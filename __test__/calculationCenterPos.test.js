//const Math = require('../scripts/Mathematics');
import Mathematics from "../scripts/Mathematics";

const Math = Mathematics;
test("(0,0,0)と(100,100,100)との中点を求める。", ()=>{
  let startPos = {x: 0, y: 0, z: 0};
  let endPos = {x: 100, y: 100, z: 100};
  let centerPos = Math.calcCenterPos(startPos, endPos);
  expect(centerPos.x).toEqual(50);
  expect(centerPos.y).toEqual(50);
  expect(centerPos.z).toEqual(50);
});

test("(12, 82, 832)と(812, 8, 124)との中点を求める。", ()=>{
  let startPos = {x: 12, y: 82, z: 832};
  let endPos = {x: 812, y: 8, z: 124};
  let centerPos = Math.calcCenterPos(startPos, endPos);
  expect(centerPos.x).toEqual(412);
  expect(centerPos.y).toEqual(45);
  expect(centerPos.z).toEqual(478);
});