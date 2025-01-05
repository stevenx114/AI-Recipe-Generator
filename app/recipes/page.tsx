import { getAllRecipes } from "@/actions";
import RecipeCard from "@/components/recipe-card";

export default async function RecipesPage() {
    const recipes = await getAllRecipes();

    return (
        <div className="min-h-screen p-6 lg:p-12">
            <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
                Explore Recipes
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {recipes && recipes.map((recipe) => (
                    <RecipeCard key={recipe._id.toString()} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
