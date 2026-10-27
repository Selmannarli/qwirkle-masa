import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {CHARACTER_FILES,FRAME_COUNT,spriteFrames} from '../public/motion.mjs';

test('all Godot frames passed real-alpha, clean-edge, safe-padding and loop-closure checks',async()=>{
 const report=JSON.parse(await readFile(new URL('../art/character-studio/quality-report.json',import.meta.url),'utf8'));
 assert.equal(report.framesPerCharacter,32);assert.equal(report.characters.length,6);assert.equal(report.columns*report.rows,32);
 for(const [i,c]of report.characters.entries()){
  assert.ok(c.minimumPaddingPx>=40,c.name+' motion padding');assert.equal(c.strayIslands,0,c.name+' pixel residue');
  const bytes=await readFile(new URL('../public/assets/character-'+c.name+'-v3.webp',import.meta.url));assert.equal(createHash('sha256').update(bytes).digest('hex'),c.sha256,c.name+' audited artifact');
  assert.equal(bytes.toString('ascii',8,12),'WEBP');assert.equal(bytes.toString('ascii',12,16),'VP8L','lossless alpha WebP');
  const dimensions=bytes.readUInt32LE(21);assert.equal((dimensions&0x3fff)+1,report.cellSize*report.columns);assert.equal(((dimensions>>>14)&0x3fff)+1,report.cellSize*report.rows);
 }
});
test('production portraits have four explicit expressions, stable cells and a bounded gesture',()=>{
 assert.equal(FRAME_COUNT,4);for(let face=0;face<6;face++){assert.match(CHARACTER_FILES[face],/-v4\.webp$/);const frames=spriteFrames(face);assert.ok(frames.length>=4&&frames.length<=6);assert.equal(frames[0].backgroundPosition,'100% 100%');assert.equal(frames.at(-1).backgroundPosition,'100% 100%');assert.ok(frames.every(f=>f.transform&&f.easing.startsWith('cubic-bezier')))}
});
