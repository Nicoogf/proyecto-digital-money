import { Schema, model, models } from "mongoose"

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
        select: false
    },
    confirmPassword: {
        type: String,
        select: false
    },
    name: {
        type: String,
        requerided: [true, "El nombre es Requerido"],
        minLength: [3, "Fullname tiene que tener al menos 3 caracteres"],
        maxLength: [50, "Full name no debe tener mas de 50 caracteres"]
    },
    lastname: {
        type: String,
        requerided: [true, "El apellido  es Requerido"],
        minLength: [3, "Fullname tiene que tener al menos 3 caracteres"],
        maxLength: [50, "Full name no debe tener mas de 50 caracteres"]
    },
    identification: {
        type: Number,
        requerided: [true, "El DNI Requerido"],
        minLength: [5, "dni tiene que tener al menos 5 caracteres"],
        maxLength: [8, "Full name no debe tener mas de 8 caracteres"]
    },
    telefono: {
        type: Number,
        requerided: [true, "El telefono Requerido"],
        minLength: [5, "dni tiene que tener al menos 5 caracteres"],
        maxLength: [12, "Full name no debe tener mas de 8 caracteres"]
    }
})

const User = models.User || model('Users', UserSchema)
export default User