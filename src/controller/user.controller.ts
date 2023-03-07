
import {PrismaClient} from '@prisma/client'
let prisma = new PrismaClient()
import   { Request, Response } from 'express';
import * as argon2 from 'argon2'



export const addUser = async (req:Request, res:Response) =>{
    let hash = await argon2.hash(req.body.password)
    try{
     let user = await prisma.user.create({
         data:{
             email:req.body.email,
             name:req.body.name,
             password:hash
         }
        })
        if(user){
         return res.json({"message":"user created successfully", "user":user})
        }
        throw('try again')
    }catch(error){
     console.log('error')
    }
 }

 export const login = async (req:Request, res:Response) =>{
   
    try{
     let user = await prisma.user.findFirst({
         where:{
              email:req.body.email,
              
         }
        })
        let verify = await argon2.verify( user!.password, req.body.password)
        if(user){
         return res.json(user)
        }
        throw('try again')
    }catch(error){
     console.log('error')
    }
 }

