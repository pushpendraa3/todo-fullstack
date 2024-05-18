import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/todo")
.then(() => console.log("DB Connected!!"))
.catch((err) => console.log(`problem connecting database! ${err}`))

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,

}, { timestamps: true });

const todo = mongoose.model("todo", todoSchema);

export { todo };