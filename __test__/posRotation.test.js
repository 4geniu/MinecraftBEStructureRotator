//const Math = require('../scripts/Mathematics');
import Mathematics from "../scripts/Mathematics";

const Math = Mathematics;

test("(1, 0, 0)を(0, 90, 0)回転させると(0, 0, -1)になるか調べる。", ()=>{
  let testPos = {x: 1, y: 0, z: 0}
  let rotatedPos = Math.rotatePos(testPos, 0, 90, 0);
  //xの値を調べる
  expect(rotatedPos.x).toEqual(0);
  
  //yの値を調べる
  expect(rotatedPos.y).toEqual(0);

  //zの値を調べる
  expect(rotatedPos.z).toEqual(-1);
});


test("(0, 1, 0)を(0, 0, 90)回転させると(-1, 0, 0)になるか調べる。", ()=>{
  let testPos = {x: 0, y: 1, z: 0}
  let rotatedPos = Math.rotatePos(testPos, 0, 0, 90);
  //xの値を調べる
  expect(rotatedPos.x).toEqual(-1);
  
  //yの値を調べる
  expect(rotatedPos.y).toEqual(0);

  //zの値を調べる
  expect(rotatedPos.z).toEqual(0);
});
test("(0, 0, 1)を(90, 0, 0)回転させると(0, -1, 0)になるか調べる。", ()=>{
  let testPos = {x: 0, y: 0, z: 1}
  let rotatedPos = Math.rotatePos(testPos, 90, 0, 0);
  //xの値を調べる
  expect(rotatedPos.x).toEqual(0);
  
  //yの値を調べる
  expect(rotatedPos.y).toEqual(-1);

  //zの値を調べる
  expect(rotatedPos.z).toEqual(0);
});