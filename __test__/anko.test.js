const Math = require('../scripts/Mathematics');

test("(1, 0, 0)を(0, 90, 0)回転させると(0, 0, -1)になるか調べる。", ()=>{
  let rotatedPos = Math.rotatePos(1, 0, 0, 0, 90, 0);
  //xの値を調べる
  expect(rotatedPos.x).toBeGreaterThanOrEqual(-0.001);
  expect(rotatedPos.x).toBeLessThanOrEqual(0.001);
  
  //yの値を調べる
  expect(rotatedPos.y).toBeGreaterThanOrEqual(-0.001);
  expect(rotatedPos.y).toBeLessThanOrEqual(0.001);

  //zの値を調べる
  expect(rotatedPos.z).toBeGreaterThanOrEqual(-1.001);
  expect(rotatedPos.z).toBeLessThanOrEqual(-0.999);
});


test("(0, 1, 0)を(0, 0, 90)回転させると(-1, 0, 0)になるか調べる。", ()=>{
  let rotatedPos = Math.rotatePos(0, 1, 0, 0, 0, 90);
  //xの値を調べる
  expect(rotatedPos.x).toBeGreaterThanOrEqual(-1.001);
  expect(rotatedPos.x).toBeLessThanOrEqual(-0.999);
  
  //yの値を調べる
  expect(rotatedPos.y).toBeGreaterThanOrEqual(-0.001);
  expect(rotatedPos.y).toBeLessThanOrEqual(0.001);

  //zの値を調べる
  expect(rotatedPos.z).toBeGreaterThanOrEqual(-0.001);
  expect(rotatedPos.z).toBeLessThanOrEqual(0.001);
});
test("(0, 0, 1)を(90, 0, 0)回転させると(0, -1, 0)になるか調べる。", ()=>{
  let rotatedPos = Math.rotatePos(0, 0, 1, 90, 0, 0);
  //xの値を調べる
  expect(rotatedPos.x).toBeGreaterThanOrEqual(-0.001);
  expect(rotatedPos.x).toBeLessThanOrEqual(0.001);
  
  //yの値を調べる
  expect(rotatedPos.y).toBeGreaterThanOrEqual(-1.001);
  expect(rotatedPos.y).toBeLessThanOrEqual(-0.999);

  //zの値を調べる
  expect(rotatedPos.z).toBeGreaterThanOrEqual(-0.001);
  expect(rotatedPos.z).toBeLessThanOrEqual(0.001);
});