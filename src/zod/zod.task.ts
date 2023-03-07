import {TypeOf , z} from 'zod'


export const createTask = z.object({
    body:z.object({
        title:z.string({
            required_error:"title is required",
            invalid_type_error:"title is invalid"
        }).max(20, "title should be less than 20 characters")
          .min(2,"title name should be more than 2 characters"),
        userId:z.string({
            required_error:"userId is required",
            invalid_type_error:"userId is invalid"
        })
    })
})

 

export const UpdateTask = z.object({
    body:z.object({
        title:z.string({
            required_error:"title is required",
            invalid_type_error:"title is invalid"
        }).max(20, "title should be less than 20 characters")
          .min(2,"title name should be more than 2 characters"),
        userId:z.string({
            required_error:"userId is required",
            invalid_type_error:"userId is invalid"
        })
    })
})

 

 

 
export type createTaskSchema = TypeOf <typeof createTask>["body"]
export type updateTaskSchema = TypeOf <typeof UpdateTask>["body"]
  
