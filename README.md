# ENTNT-Calendar-Application-For-Communication-Tracking

## Objective
This application is designed to help organizations efficiently track communication with companies, ensuring timely follow-ups and consistent engagement. It features an Admin Module for configuration, a User Module for task management, and an optional Reporting and Analytics Module for actionable insights.

## Features
### Admin Module
- **Company Management:**
  - Add, edit, and delete companies with details such as name, location, LinkedIn profile, emails, phone numbers, comments, and communication periodicity.
- **Communication Method Management:**
  - Define methods (e.g., LinkedIn Post, Email, Phone Call) with descriptions, sequence order, and mandatory flags.
![Vite + React and 1 more page - Personal - Microsoft​ Edge 02-01-2025 18_15_12](https://github.com/user-attachments/assets/eabc4125-7cb1-45d9-9b88-dad0a6e5c568)

### User Module
- **Dashboard:**
  - View companies with their recent communication history and next scheduled communication.
  - Color-coded highlights for overdue (red) and due (yellow) communications.
- **Communication Actions:**
  - Log completed communications with type, date, and notes.
- **Notifications:**
  - View overdue and today's communications in dedicated grids with a notification badge.
   ![Vite + React and 1 more page - Personal - Microsoft​ Edge 02-01-2025 18_13_58](https://github.com/user-attachments/assets/3f77cc9c-7613-4a1a-a77d-00c98dff0794)

- **Calendar View:**
  - Visualize past and future communications on a calendar interface.
![Vite + React and 1 more page - Personal - Microsoft​ Edge 02-01-2025 18_14_06](https://github.com/user-attachments/assets/967ede6d-740a-4ad0-9ce9-56e5c222f5d4)

### Reporting and Analytics Module (Optional)
- Generate reports on communication frequency, engagement effectiveness, overdue trends, and more.
- Export reports in PDF or CSV format.
![Vite + React and 1 more page - Personal - Microsoft​ Edge 02-01-2025 18_14_17](https://github.com/user-attachments/assets/a351ccaf-214e-44f0-b02d-07738a3cdd30)

---

## Tech Stack
- **Frontend:** React.js
- **State Management:** React Hooks (useState)
- **Styling:** CSS Modules / Tailwind CSS (optional)
- **Calendar Component:** FullCalendar.js (or custom implementation)
- **Deployment Platform:** Vercel / Netlify

---

## Installation & Setup
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps to Run Locally
1. Clone the repository:
   https://github.com/Abbinavraam/ENTNT-Calendar-Application-For-Communication-Tracking
   
2.Navigate to the project directory:
  cd Calendar-App

3.Install Dependencies
  npm install
  
4.Start the development server:
  npm run dev

5.Open your browser and navigate to:
  http://localhost:5173/


##Usage

1.Admin Module:
* Configure companies and communication methods via the management panels.
  
2.User Module:
* View the dashboard for a quick overview of communication tasks.
* Use the calendar to manage communication schedules.
  
3.Notifications:
* Stay updated on overdue and due communications.
  
4.Reporting & Analytics:
* Access reports on communication effectiveness and trends.

