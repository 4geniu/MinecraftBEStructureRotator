//const Math = require('../scripts/Mathematics');
import Mathematics from "../scripts/Mathematics";

const Math = Mathematics;

test("Center(50, 50, 50)とPos(100, 100, 100)との距離を求める。", ()=>{
  let centerPos = {x: 50, y: 50, z: 50};
  let pos = {x: 100, y: 100, z: 100};
  let distance = Math.calcDistanceFromCenter(centerPos, pos);
  expect(distance.x).toEqual(50);
  expect(distance.y).toEqual(50);
  expect(distance.z).toEqual(50);
});