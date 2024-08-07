"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";



function isInvalidText(text) {
    return !text || text.trim() === '';
}


// when the form is submitted Next JS will behind the scenes create a request and send it to the next JS server 
 // so that it exceutes on the server and not on the client 
export async function shareMeal(prevState, formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if (
        isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.instructions) || 
        isInvalidText(meal.creator_email) ||
        isInvalidText(meal.creator) || 
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: "Invalid Input."

        }
    }

    await saveMeal(meal);
    // here we tell next js to throw part of its catche when new data is added
    revalidatePath('/meals', 'layout');
    redirect('/meals');
}