# The Equilibrium Price Finder App

Written in Javascript, Html, and SCSS by Javier Gonzalez.

## The Brief
To provide a tool for explaining and displaying information about the basics of [Economic Equilibrium](https://en.wikipedia.org/wiki/Economic_equilibrium). 

### Requirements
[x] Refactor code into reusable snippets
[x] Structure code effectively
[x] Improve functionality and receive inputs
[x] Change how results appear to be more graphic
[x] Add content that explains equilibrium price
[x] Improve accesibility
[ ] Save data within the browser that persists between sessions (would do that with localstorage. but will keep this as a TODO for now.)
[x] Integrate with a public API

### To run
Clone the repository and do an `npm install`. If you do not have node, download it from [here](https://www.npmjs.com/get-npm).

Once dependencies have been downloaded, if you would just like to see the application, run it locally with a live-server through typing: 
`$ npm run dev`
or putting it in a local server of your choice. 

If you want to edit the local files, you can run the test suite by running 
`$ npm run test` or `$ npm run test:watch` 
to watch for changes. 

To edit the scss files, run 
`$ npm run scss`

This will compile the scss into the main css file in the public folder.

### Approach
I decided that this challenge was straightforward enough to skip running it on a framework. The only external libraries used were sass to extend the CSS capabilities and structure, and Jest for testing. To configure Jest to be able to use plain Javascript, I had to transpile some of the ES6 modules through Babel.

The compartamentalization is achieved throgh the use of ES Modules. The only import for the functionality application is handled through the app.js file in the main `src` folder. All other JavaScript files are imported into that, and run in the `renderApp()` function.

The javascript is structured into snippets refered to as widgets in the application. These have a mixture of business logic and presentation logic. Further work on this would target these to get greater separation of concerns.

Ths sass files use a utility-first approach inspired by Tailwind css. I know that it can be controversial to put what seems like render logic on the markup, but this approach has proven to be one of the best ways to get consistent results in the application. A great article on separation of concerns between html and css by the author of Tailwind is [here](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/).

### Functionality

The app is meant to show the relationship of supply and demand. It is light on visuals still, but it renders the linear equations that produce the output. The app reads and renders the values dynamically.

### Accesibility

I tried to keep the HTML to be fairly semantic, using proper elements according to their function, but got into trouble when doing the tooltip. Currently it uses the aria-describedby label which will partially help, but is not sufficient. I felt like I uncovered a can of worms in regards to accessibility that I did not expect. TODO is to create all the right states including hover, hidden, and expanded. 

### Testing

I approached this, not necessarily in a test-driven way, but did put an emphasis on testing. Overall, the approach that I prefer is integration testing rather than purely unit testing, as integration tests are more useful and informative, in my opinion. This proved useful already, allowing me to edit and refactor with confidence as I added more application logic here.