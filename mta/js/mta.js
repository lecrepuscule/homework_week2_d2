var SubwayLine = SubwayLine || {};

SubwayLine = {

  line: "line",
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
line6.line = "6";
line6.stations = ["GrandCentral", "33rd", "28th", "23rd", "UnionSquare", "AstorPlace"];
line6.intersections = ["UnionSquare"];


var lineN = Object.create(SubwayLine);
lineN.line = "N";
lineN.stations = ["TimeSquare", "34th", "28th", "23rd", "UnionSquare", "8th"];
lineN.intersections = ["UnionSquare"];

var lineL = Object.create(SubwayLine);
lineL.line = "L";
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
