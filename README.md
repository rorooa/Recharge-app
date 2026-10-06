# ReCharge App 📱

A modern mobile recharge web application built with **Next.js** (frontend) and **Node.js + Express** (backend), with **MongoDB** as the database.

## Features

- 🔐 User authentication with role-based access (Admin / User)
- 📱 Browse prepaid plans for Jio, Airtel, Vi, and BSNL
- 💳 Recharge instantly with plan selection
- 👑 Admin dashboard with user management, plan management & transactions
- 🗄️ Real data stored in MongoDB Atlas

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |

## Project Structure

```
recharge-app/
├── app/                  # Next.js App Router pages
│   ├── admin/            # Admin-only dashboard
│   ├── dashboard/        # User dashboard
│   ├── login/            # Login page
│   └── page.tsx          # Landing page
├── backend/
│   ├── models/           # Mongoose models (User, Plan, Transaction)
│   ├── server.js         # Express API server
│   └── seed.js           # Database seeder
└── ...
```

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/GopikrishnaBodagala/Recharge-app.git
cd Recharge-app
```

### 2. Setup Backend
```bash
cd backend
npm install
# Create a .env file with:
# PORT=5000
# MONGO_URI=your_mongodb_atlas_uri
node seed.js    # Seed the database with plans
node server.js  # Start the API server
```

### 3. Setup Frontend
```bash
cd ..
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Access

Login with `admin@recharge.com` to access the admin dashboard at `/admin`.

## License

MIT
