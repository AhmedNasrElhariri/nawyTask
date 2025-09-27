# 🏠 Apartment Listing Application

A modern, full-stack apartment listing application built with Node.js, Express, TypeScript, Prisma, PostgreSQL, Next.js, and Tailwind CSS.




### Backend Features
- **RESTful API** with Express.js and TypeScript
- **PostgreSQL Database** with Prisma ORM
- **Advanced Search & Filtering** by unit name, number, project, rent range, and bedrooms
- **Full CRUD Operations** for apartments


### Frontend Features
- **Server-Side Rendering** with Next.js 14
- **Responsive Design** optimized for mobile and desktop
- **Real-time Search** with URL-based state management
- **Modern UI** with Tailwind CSS
- **Image Optimization** with Next.js Image component
- **Form Validation** and error handling
- **Loading States** and success feedback
- **Client and Server Components** for optimal performance

### Search & Filter Capabilities
- 🔍 **Text Search**: Search by unit name, unit number, or project name
- 🏢 **Project Filter**: Filter by specific projects
- 🛏️ **Bedroom Count**: Filter by number of bedrooms

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **PostgreSQL** - Relational database
- **CORS** - Cross-origin resource sharing

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js Image** - Optimized image loading

## 📁 Project Structure

```
apartment-listing-app/
├── backend/                     # Express.js backend
│   ├── src/
│   │   ├── index.ts           # Main server file
│   │   └── seed.ts             # Database seeding script
│   ├── prisma/
│   │   └── schema.prisma       # Database schema
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                    # Backend environment variables
│
├── frontend-next/                    # Next.js frontend
│   ├── app/
│   │   ├── apartments/
│   │   │   └── create/
│   │   │       ├── page.tsx    # Create apartment page
│   │   │       └── CreateApartmentForm.tsx
│   │   ├── apartment/
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Apartment details page
│   │   ├── components/
│   │   │   ├── ApartmentList.tsx
│   │   │   ├── ApartmentCard.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx            # Home page
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── .env.local              # Frontend environment variables
│
└── README.md
```

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AhmedNasrElhariri/nawyTask.git
cd apartment-listing-app
```

### 2. Backend Setup

```bash
cd backend
npm install

```

### 3. Frontend Setup

```bash
cd ../frontend-next
npm install
```

## ⚙️ Configuration

### Backend Configuration

1. **Copy environment variables:**
```bash
cd backend
cp .env.example .env
```

2. **Edit `.env` file:**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/apartment_db?schema=public"

# Server
PORT=3001
NODE_ENV=development

# CORS (optional)
FRONTEND_URL=http://localhost:3000
```

### Frontend Configuration

1. **Copy environment variables:**
```bash
cd frontend-next
cp env.local.example .env.local
```

2. **Edit `.env.local` file:**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 2. Run Database Migrations

```bash
cd backend

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database with sample data
npm run db:seed
```


## 🏃‍♂️ Running the Application


## 📚 API Documentation

### Base URL
```
http://localhost:4000/api
```

### Endpoints

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| `GET` | `/apartments` | Get all apartments with search/filter | `search`, `project`, `minRent`, `maxRent`, `bedrooms` |
| `GET` | `/apartments/:id` | Get apartment by ID | `id` (path parameter) |
| `POST` | `/apartments` | Create new apartment | Request body with apartment data |

### Request/Response Examples

#### Get Apartments with Search
```bash
GET /api/apartments?search=luxury&bedrooms=2&minRent=2000&maxRent=5000
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "unitName": "Luxury Studio",
      "unitNumber": "A101",
      "project": "Sunset Heights",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 1200.0,
      "rent": 3800.0,
      "description": "Modern apartment...",
      "imageUrl": "https://example.com/image.jpg",
      "address": "123 Main St",
      "amenities": ["Pool", "Gym"],
      "available": true,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### Create Apartment
```bash
POST /api/apartments
Content-Type: application/json
```

**Request Body:**
```json
{
  "unitName": "Modern Loft",
  "unitNumber": "B301",
  "project": "Urban Heights",
  "bedrooms": 2,
  "bathrooms": 2,
  "area": 1100.0,
  "rent": 3200.0,
  "description": "Beautiful modern loft...",
  "imageUrl": "https://example.com/image.jpg",
  "address": "456 Oak Ave",
  "amenities": ["Parking", "Balcony", "AC"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 7,
    "unitName": "Modern Loft",
    // ... other apartment data
  }
}
```

## 🌐 Frontend Routes

| Route | Description | Type |
|-------|-------------|------|
| `/` | Home page with apartment listings | Server Component |
| `/apartments/create` | Create new apartment form | Client Component |
| `/apartment/[id]` | Apartment details page | Server Component |

## 🔐 Environment Variables

### Backend (.env)
```env
# Required
DATABASE_URL="postgresql://username:password@localhost:5432/apartment_db?schema=public"

# Optional
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```env
# Required
NEXT_PUBLIC_API_URL=http://localhost:3001

# Optional (for server-side database access)
DATABASE_URL="postgresql://username:password@localhost:5432/apartment_db?schema=public"
```


## 🏗️ Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Prisma](https://www.prisma.io/) - Database ORM
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - UI library

## 👨‍💼 Author

**Your Name**
- GitHub: [@AhmedNasr]
- Email: ahmednasr.fci97@gmail.com

---

⭐ **Star this repository if you found it helpful!**