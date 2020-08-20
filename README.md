# The Equilibrium Price Finder App

Written in Javascript, Html, and SCSS by Javier Gonzalez.

# [live demo](https://keypathchallenge.neocities.org/)

## *** Updates based on feedback ***
After speaking with Denise, some of the feedback that I got was that the UI was a bit dull. The original project also lacked an element of interactivity which makes the digestion of content more pallatable. She was absolutely right. 

For this approach, I actually did a quick mockup on Figma to play and iterate without a large time investment from my part. This always proves to be useful, it is much cheaper to iterate on a mockup than on a functioning app.

I then focused on making the entire application more reactive to user input. This presented some challenges, which I overcame and am happy with the result. Any more complexity than this and I would definitely need to rely on libraries that can offload some performance issues which might come up here.

Finally, I imported a d3 based function plotting library. I did not want to go with pure d3 for time reasons mostly. If the project was to grow, I would definitely go with d3 to handle the presentation of custom elements.

### Reactivity
The page mantains a shared state between the input elements and and the rendered output. This was starting to get tricky, and my solution was to simply add a callback based approach to re-rendering the DOM on updates. A lot of it is handled in the RenderResultsWidget which calls the right methods on updating the inputs. 
 i.e.:
```js
 export default function RenderResultsWidget(){
    let output = getEquilibriumOutputFromDOM();
    renderChart(output);
    renderOutput(output);
}
```
Issues with this is that it uses the DOM elements for keeping track of state, and is therefore prone towards errors and edge cases. If the application was to grow in complexity, I would definitely move towards something like RsJx to handle this, and to perform operations (like debouncing the slider) on the different streams of data.

### Code Structure
With this iteration, I was also able to focus a bit more on separating the logic and the presentation concerns. I created a service directory with elements that are purely logic, to ensure consistent results. Again, with RsJx or a state managing library, even greater isolation could be achieved.

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

The javascript is structured into snippets refered to as widgets in the application for UI functionality, and services for application logic.

Ths sass files use a utility-first approach inspired by Tailwind css. I know that it can be controversial to put what seems like render logic on the markup, but this approach has proven to be one of the best ways to get consistent results in the application. A great article on separation of concerns between html and css by the author of Tailwind is [here](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/).

### Accesibility

I tried to keep the HTML to be fairly semantic, using proper elements according to their function, but got into trouble when doing the tooltip. Currently it uses the aria-describedby label which will partially help, but is not sufficient. I felt like I uncovered a can of worms in regards to accessibility that I did not expect. TODO is to create all the right states including hover, hidden, and expanded. 

### Testing

I approached this, not necessarily in a test-driven way, but did put an emphasis on testing. Overall, the approach that I prefer is integration testing rather than purely unit testing, as integration tests are more useful and informative, in my opinion. This proved useful already, allowing me to edit and refactor with confidence as I added more application logic here.
