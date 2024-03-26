import { NextResponse } from "next/server"

export const POST=async (request)=>{
    try{

        const {firstname,lastname,email,company,phone}=await request.json()
        return new NextResponse('user info received', {status:200})
    }

    catch(err){
        console.log(err.message)
        return new NextResponse('server error', {status:500})
    }
}