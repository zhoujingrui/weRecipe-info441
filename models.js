import mongoose from "mongoose";

let models = {}

console.log("connecting to mongodb")

await mongoose.connect("mongodb+srv://jingrui:info441jingrui@cluster0.yntpkjf.mongodb.net/")

console.log("successfully connected to mongodb")

// Creating schema
const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    instruction: String,
    // Alter this into auto in our final project, use the username as our A6 comment did;
    author: String
})

models.Recipe = mongoose.model('Recipe', recipeSchema)

console.log("mongoose models created")
console.log(recipeSchema)

export default models;