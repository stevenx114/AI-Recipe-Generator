'use server';
import OpenAI from "openai";
import { v2 as cloudinary } from 'cloudinary';
import mongoDBClient from '@/db'
import { redirect } from "next/navigation";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

export default async function generateRecipe(ingredients: string[]) {
    const db = await mongoDBClient.db('recipe_generator');
    let recipePath;

    try {
        console.log(ingredients);
        // Generate
        const recipePrompt =
            `
            Create a detailed recipe based on only the following ingredients:
            ` +
            ingredients.join(',') +
            `
            \n
            Give the recipe a title.
            Format the recipe in a HTML body with semantic elements.
            Give back the result in JSON format as following:
            {
                title: Recipe Title,
                recipe: Recipe formatted in HTML
            }
            Don't add any other markup.
            `;
        console.log(recipePrompt);

        // OpenAI API Call
        const recipeCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: recipePrompt
                }
            ],
            model: 'gpt-4o-mini',
            temperature: 0.7,
            response_format: {type: 'json_object'}
        });

        console.log(recipeCompletion.choices[0].message.content);
        const content = recipeCompletion.choices[0].message.content as string;
        const recipeData = JSON.parse(content);

        // Generate the dish image
        const recipeTitle = recipeData?.title;

        if (!recipeTitle) {
            throw new Error("Recipe title is required for image generation");
        }

        const imagePrompt = `${recipeTitle}, professional food photography.`;

        const imageCompletion = await openai.images.generate({
            model: "dall-e-3",
            prompt: imagePrompt,
            size: "1024x1024",
            quality: 'standard',
            n: 1
        })

        console.log(imageCompletion);

        const imageURL = imageCompletion.data[0].url;

        // Store image in Cloudinary
        const imageFileName = recipeTitle.split(' ').join('_').toLowerCase();

        const uploadResult = await cloudinary.uploader.upload(imageURL!, {
            public_id: imageFileName
        });

        console.log(uploadResult);

        // Store in MongoDB
        const savedRecipe = await db.collection('recipes').insertOne({
            recipe_title: recipeTitle,
            recipe_content: content,
            recipe_image: uploadResult.url
        });

        console.log(savedRecipe);

        recipePath = savedRecipe.insertedId;

    } catch (error) {
        console.log(error);
    } finally {
        redirect(`/recipe/${recipePath}`);
    }
}