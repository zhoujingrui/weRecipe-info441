import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    let username = req.query.username;

    try {
        let recipes = await req.models.Recipe.find({ author: username });
        res.json(recipes);
        console.log(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    let title = req.body.title
    let ingredients = req.body.ingredients
    let instruction = req.body.instruction
    let author = req.body.author


    let newRecipe = new req.models.Recipe({
        title: title,
        ingredients: ingredients,
        instruction: instruction,
        // Alter this into auto in our final project, use the username as our A6 comment did;
        author: author
    })
    await newRecipe.save()
    console.log(newRecipe)
    res.json({status:"success"})
});

export default router;
