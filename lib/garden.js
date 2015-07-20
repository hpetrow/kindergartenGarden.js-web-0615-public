'use strict';
// add your solution here!

function Garden(crops, students) {
  this.crops = crops;
  this.students = students.sort();
  this.makeStudents();
}

Garden.prototype.makeStudents = function() {
  var cropsList = {
    G: 'grass',
    V: 'violets',
    R: 'radishes',
    C: 'clover'
  };

  var rows = this.crops.split("\n");
  var cropsPerStudent = rows[0].length/this.students.length;
  
  for (var i = 0; i < this.students.length; i++) {
    var cropStr = '';

    for (var j = 0; j < rows.length; j++) {
      cropStr += (rows[j].slice(i * cropsPerStudent, i * cropsPerStudent + cropsPerStudent));
    }
    this[this.students[i].toLowerCase()] = cropStr.split("").map(function(crop) {
      return cropsList[crop];
    });
  }
}
