# 📖 Dictionary Web App

A modern, responsive Dictionary Web Application built with React + Tailwind CSS.
It allows users to search for words, view meanings, phonetics, pronunciation audio, synonyms, and antonyms with a clean and user-friendly interface.

## 🚀 Features

### 🔍 Word search

### 🗣️ Phonetics and pronunciation audio

### 📚 Multiple meanings and definitions

### 🔁 Synonyms and antonyms

### 🕘 Search history using local storage

### ⚠️ Error handling

Word not found

No internet connection

### 📱 Fully responsive design

### 🎨 Modern UI built with Tailwind CSS

### 📜 Scrollable result card for long content

## 🛠️ Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

API: DictionaryAPI.dev

State Management: React Hooks

Storage: Browser Local Storage

## ⚙️ Installation and Setup
Clone the repository

git clone https://github.com/your-username/dictionary-app.git

cd dictionary-app

Install dependencies

npm install

Run the development server

npm run dev

## Open the app at:
https://web-dictionary-v01.netlify.app/

## 📂 Project Structure

src/
├── components/
│ ├── SearchBar.jsx
│ ├── ResultCard.jsx
│
├── App.jsx
├── main.jsx
└── index.css

## 🧠 How It Works

User enters a word in the search bar

The app fetches data from DictionaryAPI

Displays word details including:

Word

Phonetics

Audio pronunciation

Definitions

Synonyms and antonyms

Search history is stored locally

Errors are handled gracefully without crashing the app

## ⚠️ Error Handling

Invalid word → Displays “Word not found”
No internet → Displays network error
Empty input → Search ignored
Large content → Result card becomes scrollable

## 📱 Responsive Design

Mobile-first layout

No horizontal overflow

Optimized for mobile, tablet, and desktop screens

## 🌱 Future Improvements

Multiple pronunciation audio sources

Clickable synonyms for quick search

Dark / light mode toggle

Loading skeletons

Offline caching

## 📄 License

This project is open-source and available under the MIT License.

## 🙌 Acknowledgements

DictionaryAPI.dev
React and Tailwind CSS community

⭐ If you like this project, consider giving it a star!