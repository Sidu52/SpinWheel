Wheel Game
This project is a simple wheel game implemented using React. The game allows users to spin a wheel and try their luck to win a prize. The wheel consists of multiple sections, each representing a different prize value.

How to Run the Project
To run the project locally, follow these steps:

Clone the repository to your local machine.

Navigate to the project directory.

Install the dependencies by running the following command:

Copy code
npm install
Start the development server by running the following command:

sql
Copy code
npm start
Open your web browser and visit http://localhost:3000 to see the running application.

How to Play
Once the application is running, you will see a spinning wheel on the screen.
Click the "SPIN" button to start spinning the wheel.
The wheel will rotate randomly and come to a stop after a few seconds.
If you have any remaining spins (displayed as a count), the game will determine if you win a prize or not.
If you win, a popup window will appear displaying the prize amount.
If you lose, a popup window will appear informing you to try again.
You can continue playing by clicking the "SPIN" button again if you have remaining spins.
Dependencies
The project uses the following dependencies:

React: A JavaScript library for building user interfaces.
react-icons: A collection of icons for React applications.
wheel.scss: A CSS file containing styles for the spinning wheel.
Components
The project contains a single component called "Wheel". This component handles the logic for spinning the wheel and displaying the results. It also renders the HTML elements for the spinning wheel, spin button, and popup window.