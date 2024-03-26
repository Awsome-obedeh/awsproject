import userModel from "@/models/register"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const POST=async (request)=>{
    try{
        connect();
        const {firstname,lastname,email,company,phone}=await request.json()
        console.log(firstname,lastname,email,company,phone)
        // store user info in database

        const user=userModel({firstname,lastname,company,phone,email})

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