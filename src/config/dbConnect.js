import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://rodrigo:123@cluster0.vgnnbs5.mongodb.net/?");

let db = mongoose.connection;

export default db;
