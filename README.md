# 🌐 URL Shortener 🚀  

A fast, simple, and efficient **URL Shortener** powered by **Node.js**, **Express**, and **MongoDB**. Transform long, cumbersome links into sleek, short URLs with ease!  

---

## 🛠 Features  
- **🔗 Shorten URLs:** Convert long URLs into short, shareable links.  
- **⚡ Instant Redirection:** Short URLs redirect seamlessly to their original destinations.  
- **💾 Persistent Storage:** URLs are stored securely in a MongoDB database.  
- **📄 Dynamic Views:** Frontend templating with **EJS** for a smooth user experience.  

---

## 🛑 Requirements  
- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [MongoDB](https://www.mongodb.com/)  

---

## 🚀 Getting Started  
![image](https://github.com/user-attachments/assets/27ba4766-345e-4b77-85b0-2bbb87fbcd18)

![image](https://github.com/user-attachments/assets/2b1dc60e-be80-458f-944a-1459e050ddad)

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
2️⃣ Install Dependencies
Install all the required Node.js packages:

bash
Copy code
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add the following:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=3000
4️⃣ Start MongoDB
Ensure MongoDB is running locally or provide a cloud MongoDB URI (e.g., MongoDB Atlas).

5️⃣ Run the Server
Start the server with:

bash
Copy code
node server.js
The app will run at http://localhost:3000.

📂 Project Structure
plaintext
Copy code
📦 url-shortener  
├── 📄 server.js         # Main application file (entry point)  
├── 📂 views             # EJS templates for dynamic rendering  
├── 📂 controllers       # Logic for handling requests and rendering views  
└── 📂 models            # Mongoose models for database interactions  
📦 Dependencies
Express: Fast, unopinionated web framework.
Mongoose: Elegant MongoDB object modeling for Node.js.
EJS: Embedded JavaScript templating.
ShortID: Generate short, unique IDs for URLs.

