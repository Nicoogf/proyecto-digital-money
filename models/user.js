import { Schema, model , models } from "mongoose"

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "El email es Requerido"],
        match: [
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, "Email no valido"
        ]
    },
    password: {
        type: String,
        required: [true, "La contraseña es Requerida"],
        select: false
    },
    fullname: {
        type: String,
        requerided: [true, "El nombre completo es Requerido"],
        minLength: [3, "Fullname tiene que tener al menos 3 caracteres"],
        maxLength: [50, "Full name no debe tener mas de 50 caracteres"]
    },
})

const User = models.User || model('Users', UserSchema)
export default User