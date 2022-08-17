# Cocktail Portal - react based application

This application is meant to be cocktail recepie catalog where the user can type in the desired cocktail name or category and it will output all records from the API provided by https://www.thecocktaildb.com/

After the user types the name or category of the cocktail, the application requests the data from www.thecocktaildb.com/api/json/v1/1/ and gets all the response in JSON format. Each result is displayed as a card for the user to choose. 
Besides cocktail name and category, the response also returns the ingredients and instructions for cocktail based on it's ID, and when the user choses (click) on certain cocktail card it displays that data in the modal window. 

## Additional Libraries

1. axios
2. react-debounce-input
3. react-dom
4. react-scripts

The app uses all libraries that are included in npm package manager, so if there is a need to install some package manually, simply run
```
npm i <package-name> or npm install <package-name>
or
yarn add <package-name>
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs on PORT 3001

Runs the app in the development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you type a new search parameter in search field or go to the selected page.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
