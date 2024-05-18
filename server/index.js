import express from "express";
import { createTodo, todoId } from "./types.js";
import { todo } from "./db.js";
import { cors } from "cors";

const app = express();

app.use(express.json());
app.use(cors());

/** 
 * @param createTodo 
 *      - 
 */
app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you provided wrong input. Provide right input to create a todo."
        });
        return;
    }
    // todo: put parsedPayload in mongoDB

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.status(201).json({
        msg: "todo created"
    })
})

/** 
 * @param getAllTodos 
 *      - 
 */
app.get("/todo", async (req, res) => {
    const response = await todo.find();
    res.status(200).json({
        msg: "success",
        todo: response
    })
})

/** 
 * @param updateTodo 
 *      - 
 */
app.put("/todo/update", async (req, res) => {
    const createId = req.body;
    const parsedId = todoId.safeParse(createId);
    if(!parsedId.success){
        res.status(411).json({
            msg: "you provided wrong input. Provide right todo ID to update."
        });
        return;
    }
    // todo: update todo with parsedId in mongoDB
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.status(200).json({
        msg: "todo marked as completed"
    })
})

/** 
 * @param deleteTodo 
 *      - 
 */
app.delete("/todo", async (req, res) => {
    const createDeleteId = req.body;
    const parsedDeleteId = todoId.safeParse(createDeleteId);
    if(!parsedDeleteId.success){
        res.status(411).json({
            msg: "you provided wrong input. Provide right todo ID to Delete."
        });
        return;
    }
    // todo: delete todo with parsedDeleteId in mongoDB
    await todo.deleteOne({
        _id: req.body.id
    })
    res.status(200).json({
        msg: "todo deleted"
    })
})


app.listen(3000, () => console.log("server running on port 3000"))