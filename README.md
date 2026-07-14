# Mednic Complex Website

A full-stack, highly responsive medical clinic website designed for **Mednic Complex** located in Johar Town, Lahore. The application features a modern medical theme, interactive appointment booking, contact inquiries, and smooth animations.

## Tech Stack
- **Frontend**: React (Next.js 14 App Router)
- **Backend**: Node.js with Express
- **Database**: MongoDB (Mongoose ODM)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (CSS Variables, responsive grids, transitions)

---

## Features
1. **Home/Hero Section**: Dynamic header, medical-themed presentation, and book appointment CTA.
2. **About Section**: Core clinical values, clinic features, and specialists profile context.
3. **Services Section**: Interactive cards specifying service descriptions and pricing ranges with direct booking callbacks.
4. **Doctors Panel**: Specialist profile grid presenting experience badges, photos, and backgrounds.
5. **Interactive Map**: Seamless Google Maps iframe embed showing rankings, reviews count, and opening hours card.
6. **Contact Section**: General message inquiry form and contact detail list.
7. **Graceful Degradation**: The backend automatically falls back to **Demo/Mock Mode** if MongoDB is not running locally, allowing forms to function immediately and log details to the terminal console.

---

## Directory Structure
```
medical/
├── backend/                  # Express.js Server
│   ├── src/
│   │   ├── config/db.js      # Database Connection Configuration
│   │   ├── models/           # Mongoose schemas (Appointment, Contact)
│   │   ├── routes/api.js     # API Endpoints (/api/appointments, /api/contact)
│   │   └── server.js         # Entry Point
│   ├── package.json
│   └── .env.example
├── frontend/                 # Next.js 14 Web Application
│   ├── public/images/        # High-Quality AI Generated Assets
│   ├── src/
│   │   ├── app/              # Next.js App Router Page & SEO layouts
│   │   └── components/       # Header, Hero, Services, Doctors, Map, Contact, Footer, BookingModal
│   └── package.json
├── package.json              # Monorepo Runner Commands
└── README.md                 # Project Setup & Documentation
```

---

## Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)
- MongoDB (optional, server runs in demo mode if local database is not started)

### 1. Install Dependencies
Run the install setup command from the project root directory:
```bash
npm run setup
```
This automatically runs `npm install` inside both `backend` and `frontend` folders.

### 2. Configure Environment Variables
- Create a `.env` file in the `backend/` folder (you can copy `backend/.env.example`).
- Edit the variables:
  ```env
  PORT=5000
  MONGODB_URI=mongodb://127.0.0.1:27017/mednic
  ```
- If using MongoDB Atlas, replace `MONGODB_URI` with your connection string.

### 3. Run the Servers Concurrently
Start both backend (Port 5000) and frontend (Port 3000) concurrently with:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## API Endpoints
All backend API routes are prefixed with `/api`:

### 1. Book Appointment
- **URL**: `/api/appointments`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "Waseem",
    "phone": "03377633555",
    "email": "waseem@example.com",
    "service": "Dental Care",
    "date": "2026-07-20",
    "time": "04:00 PM - 06:00 PM",
    "message": "Need scaling treatment"
  }
  ```

### 2. Submit Inquiry
- **URL**: `/api/contact`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "Waseem",
    "phone": "03377633555",
    "email": "waseem@example.com",
    "subject": "Dermal fillers pricing",
    "message": "Could you provide details about skin procedure scheduling?"
  }
  ```

---

## Vercel Deployment Instructions

### Deploying the Next.js Frontend
1. Import the project repository into your **Vercel** account.
2. Select the `frontend` folder as the Root Directory.
3. Configure the Environment Variable in Vercel settings:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: URL of your deployed backend server (e.g., `https://your-backend.render.com/api`).
4. Click **Deploy**.

### Deploying the Express Backend
The backend can be deployed to Render, Railway, Heroku, or Vercel Serverless Functions. If deploying on a standard container host:
1. Set `MONGODB_URI` environment variable to your remote MongoDB Atlas URI.
2. Make sure CORS is configured to allow your Vercel frontend domain (currently set to `*` for convenience).
