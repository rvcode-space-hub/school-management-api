# 🏫 School Management API

A RESTful API built with Node.js and Express.js to manage school data, including adding new schools and retrieving nearby schools based on geographical location.

I used the Haversine formula to calculate the great-circle distance between two geo-coordinates, which is accurate for Earth-scale distances

---

## 🚀 Features

* ➕ Add new schools with location details
*📍 Uses the Haversine formula to calculate distance and fetch nearby schools based on latitude and longitude.
* 📏 Distance-based sorting (nearest first)
* 🧱 Clean and scalable architecture
* ⚡ Fast and optimized queries

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Architecture:** MVC + Service Layer
* **Other:** REST API, Geo-distance calculation

---

## 📂 Project Structure

```
SCHOOL-MANAGEMENT-API
│
├── src
│   ├── config
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── controllers
│   │   └── school.controller.js
│   │
│   ├── routes
│   │   └── school.router.js
│   │
│   ├── services
│   │   └── school.service.js
│   │
│   ├── utils
│   │   ├── db.query.js
│   │   └── school.distance.js
│   │
│   └── app.js
│
├── .env
├── server.js
├── package.json
├── package-lock.json
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://git@github.com:rvcode-space-hub/school-management-api.git

```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file:

```
PORT=9000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Vsnl@123
DB_DATABASE=school_db
```

### 4️⃣ Run the server

```bash
npm run dev 
```


## 🔄 Data Flow

<p align="center">
  <img src="School Management Data Flow.jpg" alt="Data Flow Diagram" width="700"/>
</p>


## 📄 API Documentation

<p align="center">
  <a href="https://documenter.getpostman.com/view/39236302/2sBXijLCXi" target="_blank">
    <img src="https://img.shields.io/badge/View-Postman%20Docs-orange?style=for-the-badge&logo=postman" />
  </a>
</p>
Server will run on:

```
http:/localhost:9000
```

---

## 📌 API Endpoints

### ➕ Add School

* **Method:** POST
* **Endpoint:** `/api/addSchool`

#### Request Body:

```json
{
    "name" : "GREEN LAND PUBLIC SCHOOL",
    "address": "2126 GALI NO4 RAJGARH COLONY DELHI - 110031",
    "latitude" : 28.6631372863256,
    "longitude" : 77.272399157308797
}
```

#### Response:

```json
{
  "message": "School added successfully"
}
```

---

### 📍 List Nearby Schools

* **Method:** GET
* **Endpoint:** `/api/listSchools`

#### Query Params:

```
latitude=28.5354
longitude=77.2420
```

#### Example Request:

```
http://localhost:9000/api/listSchools?latitude=28.5354&longitude=77.2420
```

#### Response:

```json
[
    {
        "id": 18,
        "name": "GREEN LAND PUBLIC SCHOOL",
        "address": "2126 GALI NO4 RAJGARH COLONY DELHI - 110031",
        "latitude": 28.66309928894043,
        "longitude": 77.27230072021484,
        "distance": 14.504381924639572
    },
    {
        "id": 19,
        "name": "GEETA BAL BHARTI SR. SEC. SCHOOL",
        "address": "RAJGARH COLONY DELHI 110031",
        "latitude": 28.664310455322266,
        "longitude": 77.27510070800781,
        "distance": 14.693936764140126
    },
    {
        "id": 20,
        "name": "AMAR JYOTI SCHOOL",
        "address": "KARKAR DOOMA DELHI - 110092",
        "latitude": 28.69380760192871,
        "longitude": 77.2646484375,
        "distance": 17.752321019999613
    }
]
```

---

## 🧠 How It Works

* User provides latitude & longitude
* API calculates distance using geo formula
* Schools are sorted by nearest distance
* Optimized for real-world location-based use cases

---

## 📈 Use Cases

* 🏫 School locator apps
* 📍 Nearby recommendation systems
* 🌐 Location-based services

---


## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ravi Shankar Singh**
Backend Developer 🚀


---