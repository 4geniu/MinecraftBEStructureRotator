"use strict";

var Mathematics = {
    rotatePos: function (xPos, yPos, zPos, xDeg, yDeg, zDeg) {

      let xRad = xDeg * Math.PI / 180;
      let yRad = yDeg * Math.PI / 180;
      let zRad = zDeg * Math.PI / 180;

      return {
        x: xPos * Math.cos(yRad) * Math.cos(zRad) - yPos * Math.cos(yRad) * Math.sin(zRad) + zPos * Math.sin(yRad),
        y: xPos * (Math.cos(xRad) * Math.sin(zRad) + Math.cos(zRad) * Math.sin(xRad) * Math.sin(yRad)) + yPos * (Math.cos(xRad) * Math.cos(zRad) - Math.sin(xRad) * Math.sin(yRad) * Math.sin(zRad)) - zPos * Math.cos(yRad) * Math.sin(xRad),
        z: xPos * (Math.sin(xRad) * Math.sin(zRad) - Math.cos(xRad) * Math.cos(zRad) * Math.sin(yRad)) + yPos * (Math.cos(zRad) * Math.sin(xRad) + Math.cos(xRad) * Math.sin(yRad) * Math.sin(zRad)) + zPos * Math.cos(xRad) * Math.cos(yRad)
      };
    },
}


module.exports = Mathematics;