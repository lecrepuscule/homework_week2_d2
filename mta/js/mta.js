var SubwayLine = SubwayLine || {};

SubwayLine = {

  lineName: "line",
  stations: [],
  intersections: [],


  getDistance: function(station1, station2){
    var location1 = this.stations.indexOf(station1);
    var location2 = this.stations.indexOf(station2);
    if (location1 !== -1 && location2 !== -1) {
      return Math.abs(location1 - location2);
    }
    else {
      return null;
      console.log("one or both of stations not on line " + this.line);
    }
  }

  // locateStation: function(station) {
  //   return this.stations.indexOf(station) === -1 ? null : this.stations.indexOf(station);
  // }

  //can be expanded when there are multiple intersections on each line

  // getDistanceToIntersections: function(station, intersection) {
  //   if (intersection) {
  //     return this.getDistance(station1, intersection);
  //   }
  // }

} // end of object creation


// SubwayLine.prototype.hasStation = function(station){
//   return this.stations.indexOf(station) === -1 ? false : true;
// }


//instanciation//
var line6 = Object.create(SubwayLine);
line6.lineName = "6";
line6.stations = ["GrandCentral", "33rd", "28th", "23rd", "UnionSquare", "AstorPlace"];
line6.intersections = ["UnionSquare"];

var lineN = Object.create(SubwayLine);
lineN.lineName = "N";
lineN.stations = ["TimeSquare", "34th", "28th", "23rd", "UnionSquare", "8th"];
lineN.intersections = ["UnionSquare"];

var lineL = Object.create(SubwayLine);
lineL.lineName = "L";
lineL.stations = ["8th", "6th", "UnionSquare", "3rd", "1st"];
lineL.intersections = ["UnionSquare"];

// instanciation//

// var line6 = new SubwayLine("6", ["GrandCentral", "33rd", "28th", "23rd", "UnionSquare", "AstorPlace"], ["UnionSquare"]);

// var lineN = new SubwayLine("N", ["TimeSquare", "34th", "28th", "23rd", "UnionSquare", "8th"], ["UnionSquare"]);

// var lineL = new SubwayLine("L", ["8th", "6th", "UnionSquare", "3rd", "1st"], ["UnionSquare"]);

var test = line6.getDistance("GrandCentral", "UnionSquare");
var test2 = lineL.getDistance("8th", "UnionSquare");

console.log(test);
console.log(test2);

//can be expanded when there are multiple intersections on each line

// SubwayLine.prototype.getDistanceToIntersections = function(station, intersection) {
//   if (intersection) {
//     return this.getDistance(station1, intersection);
//   }
// }
setup();

function setup(){
  var lineDropdowns = document.getElementsByClassName("form-control");
  console.log(lineDropdowns);
  for (i=0; i<lineDropdowns.length; i++) {
    lineDropdowns[i].addEventListener("change", changeHandler);
  }
}

function changeHandler(e) {
  e.preventDefault();
  console.log("in changeHandler this is "+ this);
  findStations(this.id, this.value)
  }


function findStations(toOrFrom, line){
  var id = toOrFrom === "from-line" ? "from-station" : "to-station";
  var dropdown = document.getElementById(id);
  for (var i=0, len = dropdown.options.length; i<len;i++){
    dropdown.options[0] = null;
  }
  switch (line) {
    case "6": var stations = line6.stations;
    break;  
    case "N": var stations = lineN.stations;
    break;
    case "L": var stations = lineL.stations;
    break;
  }
  showStations(dropdown, stations);
}

function showStations(dropdown, stations){
  var newOption;
  for (i=0; i<stations.length; i++){
    newOption = document.createElement("option");
    newOption.setAttribute("value", stations[i]);
    newOption.innerText = stations[i];
    dropdown.appendChild(newOption);
  }
}


// function findRoute(){
//     if (this.id === "from-line") {
//     fromLine = this.value;
//   } 
//   else if (this.id === "to-line") {
//     toLine = this.value;
//   }
//   else {
//     console.log("invalid id found in changeHandler.");
// }


