export type UserData = {
    id: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isActive: boolean;
    phone: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
    img?: string;
  };

  export type ProductData = {
    id: string;
    title: string;
    desc: string;
    price: number;
    stock: number;
    cat: string;
    createdAt: string;
    updatedAt?: string;
    img?: string; // img opsiyonel (optional)
    color?: string; // color opsiyonel (optional)
    size?: string; // size opsiyonel (optional)
  };