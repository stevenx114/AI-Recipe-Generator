# AI Recipe Generator

The **AI Recipe Generator** is a web-based application that allows users to generate customised recipes based on ingredients, cuisines, dietary preferences, and more. Built with Next.js, this project leverages AI to deliver tailored and creative recipe suggestions in real-time.

## Features

- Ingredient-based recipe generation
- Support for various cuisines and dietary preferences
- User-friendly interface
- Built with Next.js for fast performance and scalability

## Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A valid OpenAI API key (for the AI functionality)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/stevenx114/AI-Recipe-Generator.git
cd AI-Recipe-Generator
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```
Replace `your_openai_api_key` with your actual OpenAI API key.

### 4. Run the Development Server

Start the development server:

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

### 5. Build for Production (Optional)

To create an optimised build for production:

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

Then, start the production server:
```bash
npm start
```

### 6. Run Linting and Formatting (Optional)

To ensure code quality:
```bash
npm run lint
```

## File Structure

```plaintext
├── pages
│   ├── api
│   │   └── generate.js  // API route for recipe generation
│   ├── index.js         // Home page
├── components           // Reusable components
├── styles               // Global and component styles
├── public               // Static assets
├── .env.local           // Environment variables
├── package.json         // Project configuration
```

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Acknowledgements

This project uses OpenAI's GPT models to power the recipe generation feature.
