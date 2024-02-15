"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectDb";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn } from "./auth";

// create user
export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password as string, salt);
    const newUser = await new User({
      username,
      email,
      password: hashPassword,
      phone,
      isAdmin: !!isAdmin,
      isActive: !!isActive,
      address,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
// update user
export const updateUser = async (formData: FormData) => {
  const {id, username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password as string, salt);
    const updateUser: any = {
      username,
      email,
      phone,
      password: hashPassword,
      isAdmin: !!isAdmin,
      isActive: !!isActive,
      address,
    };
    Object.keys(updateUser).forEach((key)=> (updateUser[key] === '' || undefined) && delete updateUser[key]);

    await User.findByIdAndUpdate(id, updateUser);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// deletre user
export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
  revalidatePath("/dashboard/users");
};

// create product
export const addProduct = async (formData: FormData) => {
  const { title, desc, price, stock, color, size, cat } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newProduct = await new Product({
      title,
      desc,
      price: +price,
      stock: +stock,
      color,
      size,
      cat,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// update product
export const updateProduct = async (formData: FormData) => {
  const {id, title, desc, price, stock, color, size, cat  } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    
    const updateProduct: any = {
      title,
      desc,
      price: +price,
      stock: +stock,
      color,
      size,
      cat,
    };
    Object.keys(updateProduct).forEach((key)=> (updateProduct[key] === '' || undefined) && delete updateProduct[key]);

    await Product.findByIdAndUpdate(id, updateProduct);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// delete product
export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
};



// login
export const login = async (prevState:any,formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn('credentials',{username, password})
  } catch (error: any) {
    if (error.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw error;
  }
}