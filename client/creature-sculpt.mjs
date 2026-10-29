import {MeshBVH} from 'three-mesh-bvh';
import {BufferGeometry,Float32BufferAttribute,Uint16BufferAttribute} from 'three';
import {SCULPT_HEADS} from './sculpt-head-data.mjs';
// Decode an offline sculpt once per geometry cache entry; never remesh on a tap.
export function sculptHead(face){
 const encoded=SCULPT_HEADS[face];if(!encoded)throw Error('Missing sculpt');
 const bytes=Uint8Array.from(atob(encoded),c=>c.charCodeAt(0)),view=new DataView(bytes.buffer),count=view.getUint32(0,true),triangles=view.getUint32(4,true),positions=new Float32Array(count*3),normals=new Float32Array(count*3),indices=new Uint16Array(triangles);
 for(let i=0;i<count;i++)for(let k=0;k<3;k++){positions[i*3+k]=view.getInt16(8+i*9+k*2,true)/10000;normals[i*3+k]=view.getInt8(8+i*9+6+k)/127}
 const offset=8+count*9;for(let i=0;i<triangles;i++)indices[i]=view.getUint16(offset+i*2,true);
 const g=new BufferGeometry();g.setAttribute('position',new Float32BufferAttribute(positions,3));g.setAttribute('normal',new Float32BufferAttribute(normals,3));g.setIndex(new Uint16BufferAttribute(indices,1));g.boundsTree=new MeshBVH(g,{indirect:true});return g;
}
