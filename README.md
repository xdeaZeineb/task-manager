# Task Manager

## Overview

This is a responsive and interactive Task Manager application built using **Next.js**, **Tailwind CSS**, and **Context API**. The application allows users to manage tasks across multiple stages, including adding, editing, deleting, and changing the stage of tasks.

## Features

- Display a list of tasks with the following details:
  - **Title**
  - **Description**
  - **Stage** (Pending, In Progress, Complete)
- **Add, edit, and delete tasks** (with a confirmation dialog before deleting)
- **Change task stage** (Move tasks between Pending → In Progress → Complete)
- **Drag and drop functionality** to reorder tasks and to move tasks between stages
- **Persist tasks using LocalStorage** so that data is not lost on page refresh

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xdeaZeineb/task-manager.git
   ```

### Install the dependencies:

```bash
npm install
```

## Usage

### Start the development server:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000 to see the app in action.

##Implementation Explanation

The application is built with the following key technologies:

Next.js: A React framework for building server-side rendered and static web applications.
Tailwind CSS: A utility-first CSS framework for styling the UI components.
Context API: For state management across the application, allowing efficient management of tasks and their stages.

##Bonus Features

Implemented drag and drop functionality to reorder tasks and move tasks between stages.
Persisted tasks using LocalStorage to retain data across page refreshes.

##Live Demo

You can access the deployed app here : https://task-manager-gules-nine-26.vercel.app/.

## Notes

Ensure you have Node.js and npm installed on your machine before running the app locally.
Feel free to customize this template to better fit your project.
License

This project is licensed under the MIT License - see the LICENSE file for details.

## Colors

### Primary Color

- **Hex:** #d6542c
- **Usage:** Primary buttons, call-to-action elements, and key highlights.

### Secondary Color

- **Hex:** #124c81
- **Usage:** Links, secondary buttons, and subtle highlights.

### Neutral Color

- **Hex:** #fdfdfd
- **Usage:** Main background, card backgrounds, and container sections for a clean, light look

### Text Color

- **Hex:** #3c345c
- **Usage:** Primary text color for headers and body text, ensuring good contrast against the light background.
