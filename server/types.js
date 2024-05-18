import zod from "zod";

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const todoId = zod.object({
    id: zod.string(),
})

export {createTodo, todoId}