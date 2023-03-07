import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();
import { Request, Response } from "express";

export const addTask = async (req: Request, res: Response) => {
  try {
    let task = await prisma.task.create({
      data: {
        title: req.body.title,
        userId: req.body.userId,
      },
      select:{
        title:true,
        isCompleted: true,
      }
    });
    if (task) {
      return res.json({ message: "task created successfully", task: task });
    }
    throw "try again";
  } catch (error) {
    console.log("error");
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    let task = await prisma.task.findMany({
      where: {
        userId: req.params.userId,
      },
      select:{
        title:true,
        isCompleted: true,
        id:true
      }
    });
    if (task) {
      return res.json({ task: task });
    }
    throw "try again";
  } catch (error) {
    console.log("error");
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    // let task = await prisma.task.update({
    //     where: {
    //       id: req.params.id, this code would update a task for another user, has the access
           
    //     },
    let task = await prisma.task.updateMany({
      where: {
        id: req.params.id,
        userId: req.body.userId
      },
      data:{
        title: req.body.title,
        isCompleted: req.body.isCompleted
      },
    });
    if (task.count == 0) {
        return res.json({"msg": "no record updated"});
      }
     return res.json({"msg": "task updated"});
    
  } catch (error) {
    console.log("error");
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
     // let task = await prisma.task.update({
    //     where: {
    //       id: req.params.id, this code would delete a task for another user, has the access
           
    //     },
    let task = await prisma.task.deleteMany({
      where: {
        id: req.params.id,
        userId: req.body.userId
      },
    });
    if (task.count == 0) {
      return res.json({"msg": "no record deleted"});
    }
   return res.json({"msg": "task deleted"});
    throw "try again";
  } catch (error) {
    console.log("error");
  }
};
