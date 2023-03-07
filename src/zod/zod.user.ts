import {TypeOf , z} from 'zod'


export const createUser = z.object({
    body:z.object({
        name:z.string({
            required_error:"name is required",
            invalid_type_error:"name is invalid"
        }).max(20, "name should be less than 20 characters")
          .min(2,"movie name should be more than 2 characters"),
        email:z.string({
            required_error:"email is required",
            invalid_type_error:"email is invalid"
        }),
        password:z.string({
            required_error:"password is required",
            invalid_type_error:"password is invalid"
        })
    })
})

export const loginUser = z.object({
    body:z.object({
        email:z.string({
            required_error:"email is required",
            invalid_type_error:"email is invalid"
        }),
        password:z.string({
            required_error:"password is required",
            invalid_type_error:"password is invalid"
        })
    })
})

 
export type createUserSchema = TypeOf <typeof createUser>["body"]
export type loginSchema = TypeOf <typeof loginUser>["body"]
 
