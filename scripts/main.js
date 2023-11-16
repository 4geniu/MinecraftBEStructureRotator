"use strict";

/*
TODO:
- GithubActionsでの出力を参考に、テスト失敗の原因を特定する
- 領域内のブロックとその座標を浮動小数点で保存する
*/

import * as ms from "@minecraft/server";
import Mathematics from "./Mathematics.js";

let startPos = {x: 0, y: 0, z: 0};
let endPos = {x: 5, y: 5, z: 5};
let dis = Mathematics.calcWidthAndHeight(startPos, endPos);
let blockList = Array(dis.width * dis.height * dis.depth);

ms.system.afterEvents.scriptEventReceive.subscribe((ev) => {
    if(ev.id !== "SR:rotateStructure") return;

    const rotation = convertMessageToPosition(ev.message);

    const source = getSource(ev);
    if(source === null) return;
    const dimension = source.dimension;

    const centerPos = Mathematics.calcCenterPos(startPos, endPos);

    for(let i=0; i<blockList.length; i++){
      const block = blockList[i];
      const distanceFromCenter = Mathematics.calcDistanceFromCenter(centerPos, block.pos);
      const rotatedPos = Mathematics.rotatePos(distanceFromCenter, rotation.x, rotation.y, rotation.z);
      const blockPos = {
        x: rotatedPos.x + centerPos.x, 
        y: rotatedPos.y + centerPos.y, 
        z: rotatedPos.z + centerPos.z
      };

      const settedBlockPos = {x: Math.round(blockPos.x), y: Math.round(blockPos.y), z: Math.round(blockPos.z)};

      blockList[i].pos = blockPos;
      dimension.fillBlocks(settedBlockPos, settedBlockPos, block.blockId);
    }
}, {"namespaces": ["SR"]});


ms.system.afterEvents.scriptEventReceive.subscribe((ev) => {
  if(ev.id !== "SR:setArea") return;
  const args = ev.message.split(" ");
  if(args.length !== 6) throw new Error("Invalid message format. Expected 6 numbers separated by spaces(startX, startY, startZ, endX, endY, endZ).");
  const newStartPos = {x: Number(args[0]), y: Number(args[1]), z: Number(args[2])};
  const newEndPos = {x: Number(args[3]), y: Number(args[4]), z: Number(args[5])};
  startPos = newStartPos;
  endPos = newEndPos;

  const dimension = getSource(ev).dimension;
  const dis = Mathematics.calcWidthAndHeight(startPos, endPos);
  blockList = Array(dis.width * dis.height * dis.depth);
  let counter = 0;
  for(let x=startPos.x; x<=endPos.x; x++){
    for(let y=startPos.y; y<=endPos.y; y++){
      for(let z=startPos.z; z<=endPos.z; z++){
        const pos = {x: x, y: y, z: z};
        const blockId = dimension.getBlock(pos).typeId;
        const blockPos = pos;
        blockList[counter] = {pos: blockPos, blockId: blockId, originPos: pos};
        counter++;
      };
    }
  }
}, {"namespaces": ["SR"]});




/**
 * 
 * @param {ms.ScriptEventCommandMessageAfterEvent} ev 
 */
function getSource(ev) {
  switch(ev.sourceType){
    case ms.ScriptEventSource.Block:
      return ev.sourceBlock;
    case ms.ScriptEventSource.Entity:
      return ev.sourceEntity;
    default:
      return null;
  }
}


/**
 * 
 * @param {string} message 
 * 
 * @returns {startPos, endPos, rotation}
 */
function convertMessageToPosition(message) {
  const positionString = message.split(" ");
  if(positionString.length !== 3) throw new Error("Invalid message format. Expected 3 numbers separated by spaces(rotX, rotY, rotZ).");

  //文字列を数値に変換
  const position = positionString.map((str) => Number(str));

  const rotation = {x: position[0], y: position[1], z: position[2]};

  return rotation;
}