# 🏨 Node Hotel Application (Backend)

The **Node Hotel Application** is a backend system built using **Node.js, Express.js, and MongoDB**.  
It is designed to manage **hotel staff (Persons)** and **Menu Items**, along with **JWT-based authentication** for secure access.

---

## 🚀 Features

### 👤 User Authentication
- User Signup
- User Login
- View User Profile
- JWT-based secure authentication

### 🧑‍🍳 Hotel Staff Management (Persons)
- Add new staff members
- View all staff
- Filter staff by work type (chef, waiter, manager, etc.)
- Update staff details
- Delete staff records

### 🍽️ Menu Management
- Add menu items
- View all menu items
- Filter menu items by taste (sweet, spicy, sour)
- Update menu items
- Delete menu items

---

## 🔐 Authentication (JWT Based)

Authentication is implemented using **JSON Web Tokens (JWT)**.

### 🔄 Authentication Flow
1. User signs up or logs in
2. Server generates a JWT token
3. Token is sent to the client
4. Client sends token in the `Authorization` header
5. Server verifies token using middleware for protected routes

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (JSON Web Token)**

---

## 📁 Project Structure

```
node_Hotels/
│
├── models/          # Mongoose schemas
├── routers/         # API routes
├── db.js            # Database connection
├── jwt.js           # JWT utilities & middleware
├── server.js        # Entry point
├── .gitignore
├── package.json
└── README.md
```

---

## 🔗 API Endpoints

### 👥 Persons (Hotel Staff)

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/person` | Add a new staff member |
| GET | `/person` | Get all staff members |
| GET | `/person/:workType` | Get staff by work type |
| PUT | `/person/:id` | Update staff details |
| DELETE | `/person/:id` | Delete a staff member |

---

### 🍽️ Menu Items

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/menu` | Add a menu item |
| GET | `/menu` | Get all menu items |
| GET | `/menu/:taste` | Get menu items by taste |
| PUT | `/menu/:id` | Update menu item |
| DELETE | `/menu/:id` | Delete menu item |

---

## 📦 Data Models

### 🧑 Person Model

Represents hotel staff information.

**Fields:**
- `name` (String) – Staff name
- `age` (Number) – Staff age
- `work` (Enum) – Role (chef, waiter, manager)
- `mobile` (String) – Mobile number
- `email` (String) – Email (unique)
- `address` (String) – Address
- `salary` (Number) – Salary

**Example:**
```json
{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}
```

---

### 🍕 Menu Item Model

Represents food and drink items.

**Fields:**
- `name` (String) – Item name
- `price` (Number) – Item price
- `taste` (Enum) – Taste (sweet, spicy, sour)
- `is_drink` (Boolean) – Default: `false`
- `ingredients` (Array) – Default: empty array
- `num_sales` (Number) – Default: `0`

**Example:**
```json
{
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/muskan-am/node_Hotels.git
```

### 2️⃣ Navigate to project directory
```bash
cd node_Hotels
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Create `.env` file
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5️⃣ Start the server
```bash
node server.js
```

Server will run at:
```
http://localhost:3000
```

---

## 🔒 Security

- JWT-based authentication
- Protected routes using middleware
- Environment variables for sensitive data

---

## 📌 Future Enhancements

- Role-based authorization (Admin / Staff)
- Pagination & search
- Swagger API documentation
- Frontend integration

---

## 👩‍💻 Author

**Muskan Kesharwani**  
Backend Developer | Node.js | MongoDB  

---

⭐ If you like this project, don’t forget to star the repository!

