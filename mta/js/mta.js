function SubwayLine (line, stations, intersections){
  this.line= line;
  this.stations= stations;
  this.intersections= intersections;
}

SubwayLine.prototype.getDistance = function(station1, station2){
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

// SubwayLine.prototype.locateStation = function(station) {
//   return this.stations.indexOf(station) === -1 ? null : this.stations.indexOf(station);
// }

var line6 = new SubwayLine("6", ["GrandCentral", "33rd", "28th", "23rd", "UnionSquare", "AstorPlace"], ["UnionSquare"]);

var lineN = new SubwayLine("N", ["TimeSquare", "34th", "28th", "23rd", "UnionSquare", "8th"], ["UnionSquare"]);

var lineL = new SubwayLine("L", ["8th", "6th", "UnionSquare", "3rd", "1st"], ["UnionSquare"]);

var test = line6.getDistance("33rd", "UnionSquare");

console.log(test);

// can be expanded when there are multiple intersections on each line
// Subwayline.prototype.getDistanceToIntersections = function(station, intersection) {
//   if (intersection) {

//   }
//   this.intersections.
// }
