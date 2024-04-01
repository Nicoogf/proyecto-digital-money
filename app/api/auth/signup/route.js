import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs" ;
import { connectDB } from "@/libs/mongodb";

export async function POST(request) {
    const { name,lastname,identification, email, password,confirmPassword ,telefono} = await request.json()
    console.log(name,lastname,identification, email, password,confirmPassword ,telefono)

    if (!password || password.length < 6) return NextResponse.json({
        message: "La contraseña debe tener al menos 6 caracteres"
    }, {
        status: 400
    })

    try {
        await connectDB()
        const userFound = await User.findOne({ email })

    if (userFound) return NextResponse.json({
        message: "El email ya existe"
    }, {
        status: 409
    })


    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({
        email,
        name,
        lastname,
        identification,
        telefono,
        password: hashedPassword
    })


    const savedUser = await user.save()
    console.log(savedUser)

    return NextResponse.json({
        _id : savedUser._id,
        email : savedUser.email,
        name : savedUser.name
    })
    } catch (error) {
        console.log(error)
     if( error instanceof Error){
        return NextResponse.json({
            message : error.message
        },
        {
            status:400
        }
      );
     }   
    }
}