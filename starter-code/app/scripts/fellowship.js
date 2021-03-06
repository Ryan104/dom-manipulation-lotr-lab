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
var ringUseCount = 0;

var debug = true;



var annoying = false; //  ---- SET TO TRUE TO SEE ALERT() BOXES ---- //
var useButton = true; // ---- SET FALSE TO RUN ALL FUNCTION WITHOUT CLICKING BUTTON ---- //

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

if (!useButton) makeMiddleEarth();
// console.log("****PART 1 COMPLETE****");


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
    newHobbitLI.id = hobbitName.split(" ")[0].toLowerCase();
    newHobbitLI.textContent = hobbitName;
    hobbitsUL.appendChild(newHobbitLI);
  });

  // Append the hobbits <ul> to the first <article> tag
  document.querySelectorAll('article')[0].appendChild(hobbitsUL);
}

if (!useButton)makeHobbits();
// console.log("****PART 2 COMPLETE****");

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ringElement = document.createElement("div");
  ringElement.id = "the-ring";

  // give the div a class of 'magic-imbued-jewelry'
  ringElement.className = "magic-imbued-jewelry";

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ringElement.addEventListener("click", function(){
    nazgulScreech();
    ringUseCount++;
    if (ringUseCount >= 3){
      // ENDO OF THE WORLD
      endMessage = "The Ring has been returned to Sauron and the world is over.";
      body.innerHTML = "<h1 style='font-size: 50px'>" + endMessage + "</h1>";
    }

    // BONUS - FRODO Disapaer for a bit
    var frodo = document.getElementById("frodo");
    var fadeEffect = setInterval(function(){
      if (!frodo.style.opacity) {
        frodo.style.opacity = 1;
      }
      if (frodo.style.opacity < 0.1){
        frodo.style.opacity = 1;
        clearInterval(fadeEffect);
      } else {
        frodo.style.opacity -= 0.1;
      }
    }, 200);

  });

  // add the ring as a child of Frodo
  document.querySelectorAll(".hobbit")[0].appendChild(ringElement);
}

if (!useButton) keepItSecretKeepItSafe();
// console.log("****PART 3 COMPLETE****");


// Part 4

function makeBuddies() {
  // create an aside tag
  var buddiesElement = document.createElement('aside');

  // attach an unordered list of the 'buddies' in the aside
  var buddiesUL = document.createElement('ul');
  buddiesUL.className = "buddies";

  buddies.forEach(function(buddy){
    var newBuddyElement = document.createElement('li');
    newBuddyElement.className = "buddy";
    newBuddyElement.textContent = buddy;
    buddiesUL.appendChild(newBuddyElement);
  });

  buddiesElement.appendChild(buddiesUL);

  // insert your aside as a child element of rivendell
  document.querySelectorAll('article')[1].appendChild(buddiesElement);
}

if (!useButton) makeBuddies();
// console.log("****PART 4 COMPLETE****");


// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.querySelectorAll('.buddy')[3].textContent = "Strider";
}

if (!useButton) beautifulStranger();
// console.log("****PART 5 COMPLETE****");


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  // Store the hobbits <ul> in a variable
  var hobbitsUL = document.querySelectorAll('.hobbits')[0];

  // Append the hobbits <ul> to rivendell <article>
  // Interesting: .appendChild(element) actuall moves element to the new parent so I dont need to remove it from the shire
  document.querySelectorAll('article')[1].appendChild(hobbitsUL);
}

if (!useButton) leaveTheShire();
// console.log("****PART 6 COMPLETE****");


// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFELLOWSHIP = document.createElement('div');
  theFELLOWSHIP.className = 'the-fellowship';
  document.querySelectorAll('article')[1].appendChild(theFELLOWSHIP);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  function addAll(classToMove, moveToThisClass){
    // addAll - takes all elements of a certain class and moves them 
    // (takes the string names of the parent like ".hobbits" or ".buddies" or ".the-fellowship")
    var elementsToMove = document.querySelectorAll(classToMove);
    var moveToElement = document.querySelector(moveToThisClass);

    elementsToMove.forEach(function(element){
      moveToElement.appendChild(element);
        // after each character is added make an alert that they have joined your party
      var message = element.textContent + " joined the fellowship!"
      if (annoying) alert(message);
      console.log("Alert: " + message);
    });
  }

  addAll(".hobbit", ".the-fellowship");
  addAll(".buddy", ".the-fellowship");

}

if (!useButton) forgeTheFellowShip();
// console.log("****PART 7 COMPLETE****");


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandolfElement = document.querySelectorAll('.buddy')[0];
  gandolfElement.textContent = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandolfElement.style.background = "white";
  //gandolfElement.style.color = "grey";
  gandolfElement.style.border = "3px solid grey";

}

if (!useButton) theBalrog();
// console.log("****PART 8 COMPLETE****");


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  var message = "The horn of Gondor has been blown!";
  if (annoying) alert(message);
  console.log("Alert: " + message);

  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boromirElement = document.querySelectorAll('.buddy')[4];
  boromirElement.style.textDecoration = 'line-through';
  // Remove Boromir from the Fellowship
  document.querySelectorAll('article')[1].appendChild(boromirElement);
}

if (!useButton) hornOfGondor();
// console.log("****PART 9 COMPLETE****");


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var mordorElement = document.querySelectorAll('article')[2];
  var hobbitsList = document.querySelector('.the-fellowship').querySelectorAll(".hobbit");

  for (var i=0; i < 2; i++){
    mordorElement.appendChild(hobbitsList[i]);
  }

  // add a div with an id of 'mount-doom' to Mordor
  var mountdoom = document.createElement('div');
  mountdoom.id = "mount-doom";
  mordorElement.appendChild(mountdoom);
}

if (!useButton) itsDangerousToGoAlone();
// console.log("****PART 10 COMPLETE****");


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div');
  var mordor = document.querySelectorAll('article')[2];
  gollum.id = "gollum";
  mordor.appendChild(gollum);

  // Remove the ring from Frodo and give it to Gollum
  var ring = document.querySelector("#the-ring");
  gollum.appendChild(ring);

  // Move Gollum into Mount Doom
  document.querySelector('#mount-doom').appendChild(gollum);
}

if (!useButton) weWantsIt();
// console.log("****PART 11 COMPLETE****");


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var gollum = document.getElementById("gollum");
  gollum.remove();

  // remove all the baddies from the document
  // 'baddies' or 'buddies'??
  // var allBuddies = document.querySelectorAll('.buddy');
  // allBuddies.forEach(function(buddy){
  //   buddy.remove();
  // });
  var sauronElement = document.querySelectorAll('article')[2];
  sauronElement.style.background = "none";

  // Move all the hobbits back to the shire
  var allHobbits =  document.querySelectorAll('.hobbit');
  var theShire = document.querySelectorAll('article')[0];
  allHobbits.forEach(function(hobbit){
    theShire.appendChild(hobbit);
  });
}

if (!useButton) thereAndBackAgain();
//console.log("****PART 12 COMPLETE****");

// THE BUTTON
var button = document.getElementById('btn-chapter');
var chapterLog = document.getElementById('chapter-number');

var chapterIndex = 0;
var book = [
  makeMiddleEarth, 
  makeHobbits, 
  keepItSecretKeepItSafe, 
  makeBuddies,
  beautifulStranger,
  leaveTheShire,
  forgeTheFellowShip,
  theBalrog,
  hornOfGondor,
  itsDangerousToGoAlone,
  weWantsIt,
  thereAndBackAgain
  ];

book[chapterIndex]();

function onClick(){
  if (chapterIndex < 11){
    book[++chapterIndex]();
    chapterLog.textContent = "Chapter " + (chapterIndex + 1);
  }
};

