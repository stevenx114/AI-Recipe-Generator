'use client'
import { FormEvent, useState } from "react"
import generateRecipe from "@/actions/generateRecipe";

export default function CreatePage() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log(ingredients);
      await generateRecipe(ingredients);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-semibold mt-10 mb-6 text-gray-800">
        Generate a New Recipe
      </h1>

      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <label
            htmlFor="ingredients"
            className="font-medium text-lg text-gray-700"
          >
            Which ingredients would you like to use?
          </label>

          <textarea
            onChange={(e) => setIngredients(e.target.value.split(","))}
            id="ingredients"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients separated by commas: (e.g. chicken, linguine, mushrooms)"
            required
            disabled={loading}
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-medium shadow-md transition-colors duration-200 ${
              loading
                ? "bg-blue-400 cursor-not-allowed animate-pulse"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Recipe"}
          </button>
        </form>
      </div>
    </div>
  );
}
