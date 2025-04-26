🚨 AI Safety Incident Log (Incident Tracking System)
This project is a simple full-stack web app to log and manage incidents related to AI Safety.
It is built using Next.js (App Router), MongoDB (with Mongoose), and deployed via Vercel.

🛠️ Tech Stack
Frontend: Next.js (TypeScript, App Router)

Backend API: Next.js API routes

Database: MongoDB Atlas

ORM: Mongoose


🧩 How to Setup Locally
Clone the repository

git clone https://github.com/ANANDSUNNY0899/Incidents-Api.git
cd incident-api

Install dependencies

bash
Copy
Edit
npm install
# or
yarn install

Setup environment variables

Create a .env.local file in the root:

bash
Copy
Edit
MONGODB_URI=your_mongodb_connection_string


Run the development server

bash
Copy
Edit
npm run dev
# or
yarn dev


Visit

arduino
Copy
Edit
http://localhost:3000




MongoDB Database Setup
Use MongoDB Atlas (cloud database).

Create a cluster and a database.

In your .env.local, set:

php-template
Copy
Edit
MONGODB_URI=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/




🌐 API Endpoints

Method	Endpoint	Description
GET	/api/incidents	Fetch all incidents
POST	/api/incidents	Create a new incident
GET	/api/incidents/:id	Get a single incident by ID
DELETE	/api/incidents/:id	Delete an incident by ID



🛠️ Example API Calls using curl
1. Create an incident (POST)
bash
Copy
Edit
curl -X POST http://localhost:3000/api/incidents \
-H "Content-Type: application/json" \
-d '{"title":"Test Incident", "description":"Details about the incident"}'
2. Get all incidents (GET)
bash
Copy
Edit
curl http://localhost:3000/api/incidents
3. Delete an incident (DELETE)
bash
Copy
Edit
curl -X DELETE http://localhost:3000/api/incidents/<incident_id>


Conclusion
This project shows a simple working full-stack app with clean APIs, frontend pages, and database connectivity.
Perfect for learning full-stack development with Next.js and MongoDB!

