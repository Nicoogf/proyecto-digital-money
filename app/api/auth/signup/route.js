import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs" ;
import { connectDB } from "@/libs/mongodb";

export async function POST(request) {
    const { fullname, email, password } = await request.json()
    console.log(fullname, email, password)

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
        fullname,
        password: hashedPassword
    })


    const userSaved = await user.save()
    console.log(userSaved)

    return NextResponse.json(userSaved)
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }

}