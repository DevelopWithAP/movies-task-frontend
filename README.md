## My Movies Front End

## Aim
The aim of this project was to implement a UI for a user login flow to allow users to see a list of my favourite movies.

## Technologies
* `React` with `TypeScript`for the UI.
* `React Router` for application routing.
* `react-bootstrap` as well as custom `css modules` for styling.
* `axios` for making `API` requests.

## Installation and Starting the Project
Navigate to the root directory of the project and run `npm install`<br>
Run `npm start` to start the application on port `3000`. <br>

## Flow
**N.B.: The following steps assume that the backend server is up and running.<br> For more information refer to the `README.md` of the `movies-task-backend` project.**<br>
### Sign up
* **A**. <br>By default the user is redirected to the sign up page. After providing valid information,<br>they are informed of their newly created account via an alert which contains a link to their `log in` page. 
* **B**. <br>In case of information error, or if the user has provided existing credentials, they are prompted to log in via an apporpriate alert which contains a link to their `log in` page.<br>
### Log in<br>
* **A**. After providing valid information, the user redirected to the main page where they can view all of my favourite movies.
* **B**. Similar to the sign up route, the user is informed of any error via an appropriate alert.
### Movies <br>
* **A**. After logging in the user can view all of my favourite movies. The main view also allows the to log out or view their account details.
* **B**. In case of attempting to access the route without having the appropriate credentials i.e. an access token, the application automatically redirects the user to the log in page.
