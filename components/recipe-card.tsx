import { Recipe } from "@/types";
import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
    recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
    const { recipe_title, recipe_image, _id } = recipe;

    return (
        <Link
            href={`/recipe/${_id}`}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out overflow-hidden"
        >
            {/* Recipe Image */}
            <div className="relative w-full h-48">
                <Image
                    src={recipe_image}
                    alt={recipe_title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* Recipe Title */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {recipe_title}
                </h2>
            </div>
        </Link>
    );
}
