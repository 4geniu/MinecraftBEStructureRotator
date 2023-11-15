"use strict";

const Mathematics = {
    rotatePos: function (pos, xDeg, yDeg, zDeg) {

      let xRad = xDeg * Math.PI / 180;
      let yRad = yDeg * Math.PI / 180;
      let zRad = zDeg * Math.PI / 180;

      let xPos = pos.x;
      let yPos = pos.y;
      let zPos = pos.z;

      let rotatedX = xPos * Math.cos(yRad) * Math.cos(zRad) - yPos * Math.cos(yRad) * Math.sin(zRad) + zPos * Math.sin(yRad);
      let rotatedY = xPos * (Math.cos(xRad) * Math.sin(zRad) + Math.cos(zRad) * Math.sin(xRad) * Math.sin(yRad)) + yPos * (Math.cos(xRad) * Math.cos(zRad) - Math.sin(xRad) * Math.sin(yRad) * Math.sin(zRad)) - zPos * Math.cos(yRad) * Math.sin(xRad);
      let rotatedZ = xPos * (Math.sin(xRad) * Math.sin(zRad) - Math.cos(xRad) * Math.cos(zRad) * Math.sin(yRad)) + yPos * (Math.cos(zRad) * Math.sin(xRad) + Math.cos(xRad) * Math.sin(yRad) * Math.sin(zRad)) + zPos * Math.cos(xRad) * Math.cos(yRad);
      
      return {
        x: Math.round(rotatedX),
        y: Math.round(rotatedY),
        z: Math.round(rotatedZ),      
      };
    },

    
    calcCenterPos: function (startPos, endPos) {
      return {
        x: (startPos.x + endPos.x) / 2,
        y: (startPos.y + endPos.y) / 2,
        z: (startPos.z + endPos.z) / 2,
      };
    },


    calcDistanceFromCenter: function (centerPos, pos) {
      return {
        x: pos.x - centerPos.x,
        y: pos.y - centerPos.y,
        z: pos.z - centerPos.z,
      };
    },


    calcWidthAndHeight: function (startPos, endPos) {
      return {
        width: Math.abs(startPos.x - endPos.x),
        height: Math.abs(startPos.y - endPos.y),
      };
    }
}


export default Mathematics;