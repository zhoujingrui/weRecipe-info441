import express from 'express'
import fetch from 'node-fetch'
import parser from 'node-html-parser'
var router = express.Router()

import recipeRouter from './v1/controllers/recipe.js'

router.use('/recipe', recipeRouter)

export default router;