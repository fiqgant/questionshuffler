# 🎲 Question Shuffler

**Question Shuffler** is a beautiful and interactive **React + Tailwind CSS** app that displays a **random question or case study** from a predefined list. Featuring animated gradient backgrounds, floating glowing blobs, and a glassmorphism card design — it’s perfect for exams, interviews, or study sessions.

---

## ✨ Features

- 🔀 Shuffle a random question with animated transition
- 🌌 Floating animated blobs with glowing gradient colors
- 💠 Elegant glassmorphism card with blur and depth
- 🎬 Smooth fade-in animation for questions
- ⚡ Fast, responsive, and works offline
- 🌙 Full dark mode design

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/fiqgant/questionshuffler.git
cd question-shuffler
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm start
```

> App will run at: `http://localhost:3000`

---

## 🧱 Project Structure

```
src/
├── App.js            # Main React component
├── features.js       # List of predefined case study questions
├── index.css         # Tailwind CSS + custom animations
└── index.js          # Entry point
public/
└── index.html        # Set title: "Question Shuffler"
```

---

## ⚙️ Customization

To modify the list of questions or case studies, open:

```js
// src/features.js
export default [
  "Login system with 2FA (password + OTP)...",
  "Auto discount applies when total > $250...",
  // Add your own questions here!
];
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📘 License

MIT License
© 2025 — Made with ❤️ by [fiq](https://github.com/fiqgant)

---

## 🙌 Acknowledgements

* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* Glassmorphism inspiration from [ui.glass](https://ui.glass/)
