# 🟦 React Assignment – Week 4
## IGNITE'26 — Web Development / Programming Domain

Welcome to **Week 4! 🚀**

This week's assignment introduces you to **React fundamentals** and modern frontend development using **Vite** and **Tailwind CSS**.

---

# 📚 Topics Covered

- React Basics
- Vite Setup
- JSX
- Components
- Props
- State (`useState`)
- Virtual DOM
- Tailwind CSS
- React Hooks (`useEffect`, `useRef`, `useCallback`)
- Custom Hooks
- API Fetching
- React Router
- Context API
- Redux Toolkit

---

# 🎯 Learning Objectives

By completing this assignment, you will:

- Understand React's component-based architecture.
- Build reusable UI components using JSX.
- Manage state using `useState`.
- Use React Hooks effectively.
- Fetch and display data from APIs.
- Navigate between pages using React Router.
- Manage shared state using Context API.
- Understand when Redux Toolkit is useful.

---

# 📋 Part A: Theoretical Questions (2 Questions)

## Ques 1

Explain the difference between **Props** and **State** in React.

Your answer should include:

- What Props are.
- What State is.
- When each should be used.
- Why Props are immutable while State can change.
- One small example demonstrating both.

---

## Ques 2

Explain the purpose of the following React Hooks:

- `useEffect`
- `useRef`
- `useCallback`

For each hook, mention:

- Why it is used.
- When you should use it.
- One practical example.

---

# 💻 Part B: Practical Coding Questions (3 Questions)

## Ques 3. Student Directory (Components + Props + useState + Tailwind)

Build a React application using **Vite** and **Tailwind CSS**.

### Requirements

Create the following components:

- Navbar
- StudentCard
- StudentList

Each student should contain:

- Name
- Branch
- Year
- Profile Image
- Skills

### Features

- Display at least **6 students**.
- Pass data using **Props**.
- Add a button to toggle whether student details are visible using **useState**.
- Style the application using **Tailwind CSS**.
- Components should be reusable.

---

## Ques 4. User Dashboard (Hooks + API Fetching + React Router)

Create a React application with **two pages**.

### Home Page

- Display a welcome message.
- Add navigation to the Users page.

### Users Page

Fetch users from:

```text
https://jsonplaceholder.typicode.com/users
```

### Requirements

- Use `useEffect` for API fetching.
- Display:
  - Name
  - Email
  - Company
- Show a loading indicator while fetching.
- Handle errors properly.
- Navigate using **React Router**.
- Add a search box to filter users by name.

---

## Ques 5. Theme Manager (Context API + Custom Hook + Redux Toolkit)

Build a React application demonstrating global state management.

### Part A — Context API

Create a **Theme Context** that allows users to:

- Switch between **Light Mode** and **Dark Mode**.
- Access the current theme from multiple components.

### Part B — Custom Hook

Create a custom hook named:

```javascript
useDocumentTitle();
```

that updates the browser tab title dynamically.

Example titles:

- Dashboard
- Users
- Profile

### Part C — Redux Toolkit

Create a simple **Counter** using **Redux Toolkit**.

### Features

- Increment
- Decrement
- Reset

Display the counter value in a separate component.

---

# ⚠️ Note

- **Assignment to be submitted by July 3, 2026.**
- Use **React + Vite** only.
- Use **Tailwind CSS** for styling.
- Attempt this using only the concepts covered in this week's playlist — **no external libraries**.
- Write clean, reusable components.
- Comment your code wherever the logic is not obvious.
- Ensure your application runs without warnings or errors before submission.

---

# 🚀 Happy Coding!

Build, test, debug, and keep going. Good luck! 🎉
