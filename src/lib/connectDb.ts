import mongoose from "mongoose";
interface Connection {
  isConnected?: number;
}
const connection: Connection = {};
export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URI as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    throw new Error(error);
  }
};
