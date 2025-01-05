import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:px-16 lg:px-32 text-gray-900">
      <div className="flex items-center justify-between mt-8 mb-4">
        <h1 className="text-4xl font-semibold">AI Recipe Generator</h1>
        <div className="flex">
          <Link
            href="/create"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500"
          >
            Get Started
          </Link>
        </div>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Elevate your culinary game with AI-powered recipe innovation.
      </p>

      <div className="w-full rounded-lg overflow-hidden shadow-md">
        <Image
          sizes="100vw"
          width={1024}
          height={1024}
          style={{ width: '100%', height: 'auto' }}
          alt="Delicious recipe preview"
          src="/jason-briscoe-GliaHAJ3_5A-unsplash.jpg"
        />
      </div>

      <section id="hero_section" className="py-12">
        <p className="text-xl leading-relaxed">
          Unlock the potential of your pantry with our innovative AI-driven recipe generator. 
          Transform your ingredients into gourmet creations with ease and precision, supported by 
          stunning, AI-generated visuals to inspire your next dish.
        </p>
      </section>

      <section id="how_it_works" className="py-12">
        <h2 className="text-2xl font-medium mb-4">How It Works</h2>
        <ul className="text-lg space-y-4 list-disc list-inside">
          <li><strong>Enter Your Ingredients:</strong> List the items you have on hand and let our AI take care of the rest.</li>
          <li><strong>Generate Custom Recipes:</strong> Receive step-by-step recipes tailored to your ingredients.</li>
          <li><strong>Visual Inspiration:</strong> Enjoy realistic AI-generated visuals of your final dish.</li>
          <li><strong>Cook & Savour:</strong> Follow the steps and indulge in a meal made just for you.</li>
        </ul>
      </section>

      <section id="why_choose_us" className="py-12">
        <h2 className="text-2xl font-medium mb-4">Why Choose Us?</h2>
        <ul className="text-lg space-y-4 list-disc list-inside">
          <li><strong>AI-Driven Innovation:</strong> Discover endless culinary possibilities powered by AI.</li>
          <li><strong>Stunning Visuals:</strong> Get inspired with captivating, AI-crafted dish previews.</li>
          <li><strong>Effortless Experience:</strong> Enjoy a seamless, user-friendly interface designed for all skill levels.</li>
        </ul>
      </section>

      <section id="testimonials" className="py-12">
        <h2 className="text-2xl font-medium mb-4">What Our Users Say</h2>
        <div className="space-y-6">
          <blockquote className="text-lg text-gray-700">
            "This app has transformed the way I cook! It turns my leftovers into gourmet meals." <br />
            <span className="block mt-2 text-gray-500">- Jamie, Home Chef</span>
          </blockquote>
          <blockquote className="text-lg text-gray-700">
            "The AI visuals are breathtaking! It's like having a personal chef and photographer in one." <br />
            <span className="block mt-2 text-gray-500">- Sarah, Food Enthusiast</span>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
