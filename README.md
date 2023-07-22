# Calculator Web App with Express Backend

This is a simple calculator web app that utilizes the Express framework for the backend. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Prerequisites

Before running the calculator web app, ensure you have the following prerequisites installed:

- Node.js (with npm)

## Getting Started

1. Clone the repository to your local machine:
 ```bash
   git clone https://github.com/your-username/calculator-app.git
```
2.Navigate to the project directory:
```bash
  cd calculator-app
```
3.Install the required dependencies:
```bash
  npm install
```
## Running the App
To run the calculator web app, use the following command:
```bash
  npm start
```
# The server will start running on http://localhost:3000 by default. You can change the port number in the `server.js` file if needed.

## How the App Works
- Open your web browser and visit `http://localhost:3000`.
- The web app will display a calculator interface with input fields for two numbers and a dropdown to select the desired operation.
- Enter the numbers you want to calculate and choose the operation from the dropdown.
- Click the "Calculate" button to submit the form.
- The result will be displayed on a new page, showing the calculated value.

## Backend Implementation
The backend of this calculator web app is built using Express.js, a popular Node.js framework for building web applications. The `server.js` file sets up the Express server and handles the routing for the calculator functionality.

- The `body-parser` middleware is used to parse incoming request bodies.
- The `ejs` module is utilized for rendering dynamic HTML templates.

## How Calculations are Performed
When the user submits the form, the server receives the request with the submitted data (two numbers and the selected operation). It then calculates the result based on the chosen operation using a switch statement and sends it to the `result.ejs` template for rendering.

## Contributing
If you'd like to contribute to this calculator web app, feel free to open pull requests or issues on the GitHub repository. Any contributions or suggestions are welcome!

## License
This calculator web app is open-source and licensed under the MIT License. Feel free to use!
