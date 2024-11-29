# React Meetups Application

This is a React application that simulates a meetup platform where users can view, add, and manage their favorite meetups.

## Brief Explanation of the Implemented Solution

The application is built using React and React Router DOM for client-side routing. It features:

- URL-based Navigation: Implemented using React Router v6 to allow users to navigate between pages via URLs, enhancing SEO and user experience.

- Header Animation: The header hides on scroll down and reappears on scroll up for improved usability, utilizing a custom useHideOnScroll hook.

- Favorites Functionality: Users can add or remove meetups from their favorites list. This is managed using React's Context API to maintain global state.

- Add New Meetups: Users can submit new meetups through a form, which are then displayed on the "All Meetups" page. State management is handled via context.

- Unit Testing: Key components are tested using Enzyme to ensure reliability and correctness of the application.

The application adheres to SOLID and DRY principles, promoting clean and maintainable code.

## How to Run the Project

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Steps

1. Clone the repository:
   `git clone https://github.com/AGasco/technical-test-ac`

2. Navigate to the project folder:
   `cd technical-test-ac`

3. Install dependencies
   `npm install`

4. Start the app
   `npm start`

### Prerequisites

To run tests:
`npm test`
