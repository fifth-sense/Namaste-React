/**
 * create below type structure using react
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *     </div>
 *  </div>
 */

const parent = React.createElement("div", {id: "parent"}, 
   React.createElement("div", {id: "child"},
    React.createElement("h1", {id: "heading"}, "I am H1 tag!" ))
);
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello from React!!");

//suppose i want to have another h2 tag inside child div as children 
// in that case we can pass array of children 
const parent2 = React.createElement("div", {id: "parent"}, 
   React.createElement("div", {id: "child"},[
    React.createElement("h1", {}, "I am H1 tag!" ),
    React.createElement("h2", {}, "i am h2 tag!!")]
    )
);
// supose i want to two child inside parent tag
// for that as well we can pass array of elemnets
const parent3 = React.createElement("div", {id: "parent"}, [
   React.createElement("div", {id: "child"},[
    React.createElement("h1", {}, "I am H1 tag!" ),
    React.createElement("h2", {}, "i am h2 tag!!")]
    ),  
    React.createElement("div", {id: "child2"},[
    React.createElement("h1", {}, "I am H1 tag!" ),
    React.createElement("h2", {}, "i am h2 tag!!")]
    )]);



console.log(heading); // react element - it is a js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent3); 
//what if we have  h1 tag in index.html in that case what will it do==> it will replaced h1 tag and render root
