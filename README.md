Indian Cuisine Explorer
This project is a web application designed to assist users in exploring Indian cuisine. The application provides details about various Indian dishes, including their ingredients, cooking time, origin, and more. Users can search for dishes, explore their details, and find recipes based on available ingredients.

Table of Contents
Problem Statement
Features
Installation
Backend Project
Frontend Project
Bonus Features
Future Enhancements
Challenges Faced
Problem Statement
This web application is designed to help users discover and explore Indian dishes based on various criteria such as dish name, ingredients, diet type, and region of origin.

The project uses a provided dataset indian_food.csv, which contains various details about Indian dishes. The goal is to implement a set of key functionalities including listing dishes, viewing detailed information about a dish, and suggesting possible dishes based on available ingredients.

Features
Functional Requirements:
Backend
List All Dishes: Fetch and display all dishes in the dataset.
Search Dish by Name: Find specific dishes by their name and display their details.
Ingredient-Based Suggestions: Suggest dishes that can be made based on ingredients selected by the user.
Detailed Dish View: View detailed information of each dish, such as ingredients, diet type, prep time, cooking time, flavor, course, state, and region.
Frontend
Dish List Page: Displays all dishes in a paginated, sortable, and filterable table format.
Dish Details Page: A page dedicated to displaying detailed information about a selected dish.
Dish Suggester: Allows users to input available ingredients and get a list of possible dishes they can prepare.
Installation
Prerequisites
Node.js (v14 or later)
npm or yarn
React (for frontend)
CSV data file indian_food.csv
Steps
Backend:
Clone the repository: https://github.com/baghel25/indian-cuisine-app.git

bash
Copy code
git clone https://github.com/baghel25/indian-cuisine-app/tree/main/backend.git
cd indian-cuisine-backend
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm run start
Backend API Endpoints:

/api/dishes: List all dishes.
/api/dishes/:name: Fetch details about a specific dish.
/api/suggestions?ingredients=[ingredient1,ingredient2,...]: Get dish suggestions based on the provided ingredients.
Frontend:
Clone the repository:

bash
Copy code
git clone https://github.com/baghel25/indian-cuisine-app/tree/main/fronend.git
cd indian-cuisine-frontend
Install dependencies:

bash
Copy code
npm install
Configure environment: Create a .env file in the root folder and set the API URL:

bash
Copy code
REACT_APP_API_URL=REACT_APP_API_URL=http://localhost:5000

Start the development server:

bash
Copy code
npm start
Backend Project
The backend is built using Node.js and processes interactions with the dataset. The dataset is parsed from a CSV file, and no database is required. Future scalability is considered, with potential for database integration.

Key API Endpoints:
GET /api/dishes: Returns all dishes in the dataset.
GET /api/dishes/
: Fetches detailed information about a specific dish.
GET /api/suggestions: Takes a list of ingredients and returns all possible dishes that can be made.
Tech Stack:
Node.js with Express.js
CSV Parsing with csv-parser
Optional: LHS Brackets notation for filtering data
Frontend Project
The frontend is built using React (functional components) and organizes the user interface into several components:

Dish List Component: Displays dishes in a paginated table.
Dish Detail Component: Shows detailed information about a selected dish.
Dish Suggester: A form to select ingredients and get dish suggestions.
Tech Stack:
React with Hooks
React Router for navigation
Fluent UI React (optional, for bonus points)
Pages:
Home Page: Displays a list of dishes with options for sorting and filtering.
Dish Detail Page: Shows detailed information about a specific dish.
Bonus Features
Typescript Integration: Type-safety for both frontend and backend.
Login Flow: Implemented with local storage to resume user workflow.
Search Feature: Search dishes by name, ingredients, or origin.
Auto-suggest in Search: Dynamic suggestions for dishes as the user types.
