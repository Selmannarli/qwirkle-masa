import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {CHARACTER_FILES,FRAME_COUNT,spriteFrames} from '../public/motion.mjs';

test('all Godot frames passed real-alpha, clean-edge, safe-padding and loop-closure checks',async()=>{
 const report=JSON.parse(await readFile(new URL('../art/character-studio/quality-report.json',import.meta.url),'utf8'));
 assert.equal(report.framesPerCharacter,FRAME_COUNT);assert.equal(report.characters.length,6);assert.equal(report.columns*report.rows,FRAME_COUNT);
 for(const [i,c]of report.characters.entries()){
  assert.ok(c.minimumPaddingPx>=40,c.name+' motion padding');assert.equal(c.strayIslands,0,c.name+' pixel residue');
  const bytes=await readFile(new URL('../public'+CHARACTER_FILES[i],import.meta.url));assert.equal(createHash('sha256').update(bytes).digest('hex'),c.sha256,c.name+' audited artifact');
  assert.equal(bytes.toString('ascii',8,12),'WEBP');assert.equal(bytes.toString('ascii',12,16),'VP8L','lossless alpha WebP');
  const dimensions=bytes.readUInt32LE(21);assert.equal((dimensions&0x3fff)+1,report.cellSize*report.columns);assert.equal(((dimensions>>>14)&0x3fff)+1,report.cellSize*report.rows);
 }
});
test('every frame maps exactly to one cell of its own character atlas',()=>{
 for(let face=0;face<6;face++){const frames=spriteFrames(face);assert.equal(frames.length,32);assert.equal(frames[0].backgroundPosition,'0% 0%');assert.equal(frames.at(-1).backgroundPosition,'100% 100%');assert.equal(new Set(frames.map(f=>f.backgroundPosition)).size,32);assert.ok(frames.every(f=>f.easing==='steps(1,end)'))}
});
