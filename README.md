# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# <center>Frontend Web Development With React</center>

## Configuration
> * npm init
> * npm install create-react-app
> * npx create-react-app confusion
> * cd confusion
> * npm start
> * npm install reactstrap
> * npm install bootstrap
> * npm install react-router-dom
> * npm install redux
> * npm install react-redux
> * npm install react-redux-form

## Rendering using `ReactDOM`. see `index.js`
    ReactDOM.render(<App />, document.getElementById('root'));

## Introduction to JSX

    const element = (
        <h1 classname='greeting'>
            Hello React
        </h1>
    );

    ===

    const element = React.createElement (
        'h1'
        {className:'greeting'},
        'Hello React'
    );

    ===

    const element = {
        type: 'h1'
        props: {
            className: 'greeting',
            children: 'Hello react'
        }
    }

## state in component
> * Each component can store its own local information in "state"

## React Component Lifecycle
> * Stages
>> * Mountung
>> * Updating
>> * Unmounting
> * Mounting Lifecycle Methods
>> * constructor()
>> * render
>> * componentDidMount()
> * Updating Lifecycle Methods
>> * getDerivedStateFromProps()
>> * shouldComponentUpdate()
>> * render()
>> * fetSnapshotBeforeUpdate()
>> * componentDidUpdate()

## Assignment-1
> * created a component
>> * `src/components/MenuComponents.js`
>> * created Reactstrap Media elements
> * imported the component to App.js 
> * imported App.js to index.js
> * removed App className
> * removed App.css contents

## Assignment-2
> * converted media elements to card elements
> * added onclick() eventListener to the card item

