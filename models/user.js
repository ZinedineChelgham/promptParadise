import { Schema, model, models } from 'mongoose';


const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an email address"],
        unique: [true, "Email already exists"],
    },
    
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: [true, "Username already exists"],
        match: [/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"],
    },
    
    image: {
        type: String,
    }
})

const User = models.User || model("User", userSchema);

export default User;