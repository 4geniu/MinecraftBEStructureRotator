"use strict";

import * as ms from "@minecraft/server";
import Mathematics from "./Mathematics.js";

ms.system.afterEvents.scriptEventReceive.subscribe((ev) => {
    if(ev.id !== "SR:rotateStructure") return;

    const positions = convertMessageToPosition(ev.message);
    const startPos = positions[0];
    const endPos = positions[1];
    const rotation = positions[2];

    const source = getSource(ev);
    if(source === null) return;
    const dimension = source.dimension;

    const centerPos = Mathematics.calcCenterPos(startPos, endPos);

    let blockList = [];
    for(let x=startPos.x; x<=endPos.x; x++){
      for(let y=startPos.y; y<=endPos.y; y++){
        for(let z=startPos.z; z<=endPos.z; z++){
          const pos = {x: x, y: y, z: z};
          const distanceFromCenter = Mathematics.calcDistanceFromCenter(centerPos, pos);
          const rotatedPos = Mathematics.rotatePos(distanceFromCenter, rotation.x, rotation.y, rotation.z);

          const blockPos = {
            x: rotatedPos.x + centerPos.x, 
            y: rotatedPos.y + centerPos.y, 
            z: rotatedPos.z + centerPos.z
          };
          const blockId = dimension.getBlock(pos).typeId;
          blockList.push({pos: blockPos, blockId: blockId, originPos: pos});
        };
      }
    }

    dimension.fillBlocks(startPos, endPos, "minecraft:air");

    for(let i=0; i<blockList.length; i++){
      const block = blockList[i];
      dimension.fillBlocks(block.pos, block.pos, block.blockId);
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
  if(positionString.length !== 9) throw new Error("Invalid message format. Expected 9 numbers separated by spaces(startX, startY, startZ, endX, endY, endZ, rotX, rotY, rotZ).");

  //文字列を数値に変換
  const position = positionString.map((str) => Number(str));

  const startPos = {x: position[0], y: position[1], z: position[2]};
  const endPos = {x: position[3], y: position[4], z: position[5]};
  const rotation = {x: position[6], y: position[7], z: position[8]};

  return [startPos, endPos, rotation];
}