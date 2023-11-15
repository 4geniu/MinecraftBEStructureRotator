"use strict";

var Mathematics = {
    rotatePos: function (xPos, yPos, zPos, xDeg, yDeg, zDeg) {

      let xRad = xDeg * Math.PI / 180;
      let yRad = yDeg * Math.PI / 180;
      let zRad = zDeg * Math.PI / 180;

      let rotatedX = xPos * Math.cos(yRad) * Math.cos(zRad) - yPos * Math.cos(yRad) * Math.sin(zRad) + zPos * Math.sin(yRad);
      let rotatedY = xPos * (Math.cos(xRad) * Math.sin(zRad) + Math.cos(zRad) * Math.sin(xRad) * Math.sin(yRad)) + yPos * (Math.cos(xRad) * Math.cos(zRad) - Math.sin(xRad) * Math.sin(yRad) * Math.sin(zRad)) - zPos * Math.cos(yRad) * Math.sin(xRad);
      let rotatedZ = xPos * (Math.sin(xRad) * Math.sin(zRad) - Math.cos(xRad) * Math.cos(zRad) * Math.sin(yRad)) + yPos * (Math.cos(zRad) * Math.sin(xRad) + Math.cos(xRad) * Math.sin(yRad) * Math.sin(zRad)) + zPos * Math.cos(xRad) * Math.cos(yRad);
      
      return {
        x: Math.round(rotatedX),
        y: Math.round(rotatedY),
        z: Math.round(rotatedZ),      
      };
    },
}


module.exports = Mathematics;