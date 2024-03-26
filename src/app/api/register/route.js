import userModel from "@/models/register"
import { NextResponse } from "next/server"

export const POST=async (request)=>{
    try{

        const {firstname,lastname,email,company,phone}=await request.json()
        // store user info in database

        const user=userModel.create({firstname,lastname,company,phone})

        await user.save()
        if(user){

            return new NextResponse('user stored in database', {status:200})
        }
    }

    catch(err){
        console.log(err.message)
        return new NextResponse('server error', {status:500})
    }
}