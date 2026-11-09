# Task Management Dashboard

A clean, responsive, and fully functional Task Management Dashboard built with **React.js** and **Vite**. This application allows users to efficiently create, manage, and track their tasks without needing a backend, as all data is persisted securely in the browser's `localStorage`.

## 📖 Project Overview

This project was built as a frontend assessment to demonstrate the ability to turn requirements into a working application. It features a modern UI with a sidebar for quick summary statistics and a main area for task management. It includes robust state management using React hooks (`useState`, `useMemo`, `useEffect`) and custom hooks for safe local storage handling.

### ✨ Key Features
*   **Full CRUD Operations:** Create, view, edit, and delete tasks.
*   **Task Properties:** Each task includes a Title (required), Description (optional), Priority (Low/Medium/High), Due Date (required), and Status (Pending/In Progress/Completed).
*   **Dashboard Summary:** Real-time summary cards showing counts for Total, Pending, In Progress, and Completed tasks.
*   **Advanced Filtering & Sorting:**
    *   Search tasks by title.
    *   Filter tasks by Status and Priority.
    *   Sort tasks by Due Date (Earliest First / Latest First).
*   **Data Persistence:** Tasks are saved in `localStorage`, so they remain even after a page refresh.
*   **Form Validation:** Clear error messages for missing required fields (Title and Due Date).
*   **Confirmation on Delete:** Prevents accidental deletion of tasks.
*   **Responsive Design:** Works seamlessly on desktop, tablet, and mobile screens with no horizontal overflow.

### 🛡️ Edge Cases Handled
*   **Empty States:** Differentiates between "No tasks exist yet" and "No tasks match your filters."
*   **Data Integrity:** Safely parses `localStorage` to prevent app crashes if data is corrupted or missing.
*   **Combined Filters:** Search, status, and priority filters work seamlessly together.
*   **Instant Sync:** Summary counts update immediately when a task is edited, status-changed, or deleted.

## 🛠️ Tech Stack
*   **Framework:** React.js (Vite)
*   **Styling:** Plain CSS (Custom responsive design)
*   **State Management:** React Hooks
*   **Icons/Fonts:** Native system fonts for performance

## 🚀 Setup & Run Instructions

To run this project locally, follow these steps:

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_URL>
