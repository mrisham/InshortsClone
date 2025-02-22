# 📰 Inshorts Clone - React News App

A **minimalist** and **user-friendly** news application built using **React.js** and **Material UI**, inspired by the **Inshorts** news format. The app fetches news headlines dynamically using the **NewsAPI** and presents them in a clean, digestible format.

---

## 🚀 Features

✔ **Top Headlines** - Fetches the latest news articles dynamically.
✔ **Category Selection** - Choose from different news categories via a **hamburger menu**.
✔ **Infinite Scrolling** - Click on "Load More" to fetch additional news articles.
✔ **Dark Mode Friendly** - Styled for a sleek and modern look.
✔ **Responsive Design** - Works on both mobile and desktop.

---

## ⚠️ API Limitation

Due to **NewsAPI's CORS and free-tier limitations**, this project **will not work in production** (hosted environments). However, you can:

- **Run it locally** on your system by cloning the repository and running the script.
- **Check the provided screenshots** for reference on the UI and functionality.

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/inshorts-clone.git
cd inshorts-clone
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Your API Key

- Create a **`.env`** file in the root directory and add:
  ```env
  VITE_API_KEY=your_newsapi_key_here
  ```
- Replace `your_newsapi_key_here` with your **NewsAPI Key** (Get one from [NewsAPI](https://newsapi.org/)).

### 4️⃣ Run the App

```bash
npm run dev
```

- Open **`http://localhost:5173`** in your browser.

---

## 📸 Screenshots

_For reference, screenshots of the UI have been added to the repository._

- src/images

---

## 💡 How It Works

1. The **hamburger menu** allows users to select categories (General, Sports, Business, etc.).
2. The app fetches **news articles dynamically** based on the selected category.
3. A **loader** appears until the news is fetched.
4. Clicking **"Load More"** fetches more articles.
5. **Footer includes social links** and credits.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

### 🚀 Now, Clone & Explore the News!
