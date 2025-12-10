require('dotenv').config();
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';

// Define schema
const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true }
});

// Create model
const User = model('User', userSchema);

async function main() {
    try {
        // Connect to MongoDB
        await mongoose.connect(url);
        console.log("Connected to MongoDB");

        // CREATE document
        const newUser = new User({
            name: "Alice Smith",
            age: 28,
            email: "alice23@gmail.com"
        });

        const savedUser = await newUser.save();
        console.log("User Created:", savedUser);

        // READ - findOne
        const foundUser = await User.findOne({ email: "alice23@gmail.com" });
        console.log("Found User:", foundUser);

        // READ array
        const userOver20 = await User.find({ age: { $gt: 20 } });
        console.log("Users over 20:", userOver20);

        // find by id
        const userById = await User.findById(savedUser._id);
        console.log("User by ID:", userById);

        // UPDATE
        const updatedUser = await User.findByIdAndUpdate(
            savedUser._id,
            { age: 31 },
            { new: true }
        );
        console.log("Updated User:", updatedUser);

        // DELETE (commented)
        /*
        const deletedUser = await User.findByIdAndDelete(savedUser._id);
        console.log("Deleted User:", deletedUser);
        */

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

main();
