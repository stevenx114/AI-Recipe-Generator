import Image from "next/image";
import { getRecipeById } from "@/actions";
import { notFound } from "next/navigation";
import Link from "next/link";

type RecipeProps = {
    params: {
        id: string;
    };
};

export default async function RecipePage({ params }: RecipeProps) {
    const { id } = params;
    const recipe = await getRecipeById(id);

    if (!recipe) notFound();

    const { recipe_title, recipe_content, recipe_image } = recipe;
    const recipeText = JSON.parse(recipe_content);
    console.log(recipeText);

    return (
        <div className="min-h-screen bg-gray-50 p-6 lg:p-12 flex flex-col gap-8 lg:flex-row items-center lg:items-start lg:justify-center">
            {/* Sidebar Section */}
            <div className="w-full lg:w-1/3 space-y-6">
                <Link
                    href="/recipes"
                    className="text-blue-500 text-sm font-medium hover:underline"
                >
                    ← Back to all recipes
                </Link>

                <h1 className="text-3xl font-semibold text-gray-800">
                    {recipe_title}
                </h1>

                <div className="w-full h-auto rounded-lg overflow-hidden shadow-md">
                    <Image
                        src={recipe_image}
                        alt={recipe_title}
                        sizes="100vw"
                        width={1024}
                        height={1024}
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Recipe Content */}
            <div
                className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-800"
                dangerouslySetInnerHTML={{ __html: recipeText.recipe }}
            />
        </div>
    );
}
