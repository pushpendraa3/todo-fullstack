import express from "express";
import { createTodo, todoId } from "./types.js";

const app = express();

app.use(express.json());

/** 
 * @param createTodo 
 *      - 
 */
app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you provided wrong input. Provide right input to create a todo."
        });
        return;
    }
    // todo: put parsedPayload in mongoDB
})

/** 
 * @param getAllTodos 
 *      - 
 */
app.get("/todos")

/** 
 * @param updateTodo 
 *      - 
 */
app.post("/todo/update", (req, res) => {
    const createId = req.body;
    const parsedId = todoId.safeParse(createId);
    if(!parsedId.success){
        res.status(411).json({
            msg: "you provided wrong input. Provide right todo ID to update."
        });
        return;
    }
    // todo: update todo with parsedId in mongoDB

})

/** 
 * @param deleteTodo 
 *      - 
 */
app.delete("/todo", (req, res) => {
    const createDeleteId = req.body;
    const parsedDeleteId = todoId.safeParse(createDeleteId);
    if(!parsedDeleteId.success){
        res.status(411).json({
            msg: "you provided wrong input. Provide right todo ID to Delete."
        });
        return;
    }
    // todo: delete todo with parsedDeleteId in mongoDB

})


app.listen(3000, () => console.log("server running on port 3000"))