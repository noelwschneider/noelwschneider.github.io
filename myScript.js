const twinsLineup = {
  nobody: {
    name: '-',
    age: '-',
    games: '-',
    hits: '-',
    homeRuns: '-',
    runsBattedIn: '-',
    stolenBases: '-',
    walks: '-',
    strikeouts: '-',
    battingAverage: '-',
    onBasePercentage: '-',
    sluggingPercentage: '-',
    OPS: '-',
    WAR: '-',
  },
  
  catcher: {
    name: 'Gary Sanchez',
    age: 29,
    games: 119,
    hits: 86,
    homeRuns: 16,
    runsBattedIn: 61,
    stolenBases: 2,
    walks: 40,
    strikeouts: 136,
    battingAverage: '.205',
    onBasePercentage: '.282',
    sluggingPercentage: '.377',
    OPS: '.659',
    WAR: 1.1,
  },
  
   firstBase: {
    name: 'Jose Miranda',
    age: 24,
    games: 125,
    hits: 119,
    homeRuns: 15,
    runsBattedIn: 66,
    stolenBases: 1,
    walks: 28,
    strikeouts: 91,
    battingAverage: '.268',
    onBasePercentage: '.325',
    sluggingPercentage: '.426',
    OPS: '.751',
    WAR: 1.7,
  },
  
  secondBase: {
    name: 'Jorge Polanco',
    age: 28,
    games: 104,
    hits: 88,
    homeRuns: 16,
    runsBattedIn: 56,
    stolenBases: 3,
    walks: 64,
    strikeouts: 95,
    battingAverage: '.235',
    onBasePercentage: '.346',
    sluggingPercentage: '.405',
    OPS: '.751',
    WAR: 3.0,
  },
  
  thirdBase: {
    name: 'Gio Urshela',
    age: 30,
    games: 144,
    hits: 143,
    homeRuns: 13,
    runsBattedIn: 64,
    stolenBases: 1,
    walks: 41,
    strikeouts: 96,
    battingAverage: '.285',
    onBasePercentage: '.338',
    sluggingPercentage: '.429',
    OPS: '.767',
    WAR: 2.8,
  },
  
  shortstop: {
    name: 'Carlos Correa',
    age: 27,
    games: 136,
    hits: 152,
    homeRuns: 22,
    runsBattedIn: 64,
    stolenBases: 0,
    walks: 61,
    strikeouts: 121,
    battingAverage: '.291',
    onBasePercentage: '.366',
    sluggingPercentage: '.467',
    OPS: '.834',
    WAR: 5.2,
  },
  
  leftField: {
    name: 'Nick Gordon',
    age: 26,
    games: 136,
    hits: 110,
    homeRuns: 9,
    runsBattedIn: 50,
    stolenBases: 6,
    walks: 19,
    strikeouts: 105,
    battingAverage: '.272',
    onBasePercentage: '.316',
    sluggingPercentage: '.427',
    OPS: '.743',
    WAR: 2.4,
  },
  
  centerField: {
    name: 'Byron Buxton',
    age: 28,
    games: 92,
    hits: 76,
    homeRuns: 28,
    runsBattedIn: 51,
    stolenBases: 6,
    walks: 34,
    strikeouts: 116,
    battingAverage: '.224',
    onBasePercentage: '.306',
    sluggingPercentage: '.526',
    OPS: '.833',
    WAR: 3.2,
  },
  
  rightField: {
    name: 'Max Kepler',
    age: 29,
    games: 115,
    hits: 88,
    homeRuns: 9,
    runsBattedIn: 43,
    stolenBases: 3,
    walks: 49,
    strikeouts: 66,
    battingAverage: '.227',
    onBasePercentage: '.318',
    sluggingPercentage: '.348',
    OPS: '.666',
    WAR: 1.3,
  },
  
    designatedHitter: {
    name: 'Luis Arraez',
    age: 25,
    games: 144,
    hits: 173,
    homeRuns: 8,
    runsBattedIn: 49,
    stolenBases: 4,
    walks: 50,
    strikeouts: 43,
    battingAverage: '.316',
    onBasePercentage: '.375',
    sluggingPercentage: '.420',
    OPS: '.795',
    WAR: 3.8,
  },
};

function fillTable() {
  let selection = document.getElementById("goTwins").value;
    document.getElementById("name").innerHTML = twinsLineup[selection].name;
    document.getElementById("age").innerHTML = twinsLineup[selection].age;
    document.getElementById("games").innerHTML = twinsLineup[selection].games;
    document.getElementById("hits").innerHTML = twinsLineup[selection].hits;
    document.getElementById("homeRuns").innerHTML = twinsLineup[selection].homeRuns;
    document.getElementById("runsBattedIn").innerHTML = twinsLineup[selection].runsBattedIn;
    document.getElementById("stolenBases").innerHTML = twinsLineup[selection].stolenBases;
    document.getElementById("walks").innerHTML = twinsLineup[selection].walks;
    document.getElementById("strikeouts").innerHTML = twinsLineup[selection].strikeouts;
    document.getElementById("battingAverage").innerHTML = twinsLineup[selection].battingAverage;
    document.getElementById("onBasePercentage").innerHTML = twinsLineup[selection].onBasePercentage;
    document.getElementById("sluggingPercentage").innerHTML = twinsLineup[selection].sluggingPercentage;
    document.getElementById("OPS").innerHTML = twinsLineup[selection].OPS;
    document.getElementById("WAR").innerHTML = twinsLineup[selection].WAR;
};

function giveItGlasses() {
  if(document.getElementById("otterGlassesButton").innerHTML === "Give the otter sunglasses") {
    document.getElementById("sunglasses").style.visibility = "visible";
    document.getElementById("otterGlassesButton").innerHTML = "Remove the sunglasses";
  } else {
    document.getElementById("sunglasses").style.visibility = "hidden";
    document.getElementById("otterGlassesButton").innerHTML = "Give the otter sunglasses";
  }
}

function giveItAMustache() {
  if(document.getElementById("otterMustacheButton").innerHTML === "Give the otter a mustache") {
    document.getElementById("mustache").style.visibility = "visible";
    document.getElementById("otterMustacheButton").innerHTML = "Remove the mustache";
  } else {
    document.getElementById("mustache").style.visibility = "hidden";
    document.getElementById("otterMustacheButton").innerHTML = "Give the otter a mustache";
  }
}

function giveItAnxiety() {
  if(document.getElementById("otterAnxietyButton").innerHTML === "Give the otter anxiety") {
    document.getElementById("thoughtBubble").style.visibility = "visible";
    document.getElementById("otterAnxietyButton").innerHTML = "Stifle the anxiety";
  } else {
    document.getElementById("thoughtBubble").style.visibility = "hidden";
    document.getElementById("otterAnxietyButton").innerHTML = "Give the otter anxiety";
  }
}

fillTable();
document.getElementById("goTwins").addEventListener("change", fillTable);
document.getElementById("otterGlassesButton").addEventListener("click", giveItGlasses);
document.getElementById("otterMustacheButton").addEventListener("click", giveItAMustache);
document.getElementById("otterAnxietyButton").addEventListener("click", giveItAnxiety);

