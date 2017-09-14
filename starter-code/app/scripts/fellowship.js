console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

var debug = true;

// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var sectionME = document.createElement("section");
  sectionME.id = "middleEarth";

  // inside, add each land as an article tag
  lands.forEach(function(land){
    // Create article for each land in lands
    var thisLand = document.createElement("article");
    //thisLand.id = land; // Give each land an ID

    // inside each article tag include an h1 with the name of the land
    var landNameHeader = document.createElement("h1");
    landNameHeader.textContent = land;
    thisLand.appendChild(landNameHeader);

    // Add each land to Middle Earth
    sectionME.appendChild(thisLand);
  });

  // append middle-earth to your document body
  body.appendChild(sectionME);
}

makeMiddleEarth();
console.log("****PART 1 COMPLETE****");


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // Create a <ul> element with class hobbits
  var hobbitsUL = document.createElement("ul");
  hobbitsUL.className = "hobbits";

  // Itterate through the 'hobbits' array and...
  hobbits.forEach(function(hobbitName){
    // Create hobbit <li> elements with class hobbit and add them to the hobbits <ul>
    var newHobbitLI = document.createElement("li");
    newHobbitLI.className = "hobbit";
    newHobbitLI.textContent = hobbitName;
    hobbitsUL.appendChild(newHobbitLI);
  });

  // Append the hobbits <ul> to the first <article> tag
  document.querySelectorAll('article')[0].appendChild(hobbitsUL);
}

makeHobbits();
console.log("****PART 2 COMPLETE****");

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ringElement = document.createElement("div");
  ringElement.id = "the-ring";

  // give the div a class of 'magic-imbued-jewelry'
  ringElement.className = "magic-imbued-jewelry";

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ringElement.addEventListener("click", nazgulScreech);

  // add the ring as a child of Frodo
  document.querySelectorAll(".hobbit")[0].appendChild(ringElement);
}

keepItSecretKeepItSafe();
console.log("****PART 3 COMPLETE****");


// Part 4

function makeBuddies() {
  // create an aside tag
  var buddiesElement = document.createElement('aside');

  // attach an unordered list of the 'buddies' in the aside
  var buddiesUL = document.createElement('ul');
  buddies.forEach(function(buddy){
    var newBuddyElement = document.createElement('li');
    newBuddyElement.textContent = buddy;
    buddiesUL.appendChild(newBuddyElement);
  });
  buddiesElement.appendChild(buddiesUL);

  // insert your aside as a child element of rivendell
  document.querySelectorAll('article')[1].appendChild(buddiesElement);
}

makeBuddies();
console.log("****PART 4 COMPLETE****");


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
