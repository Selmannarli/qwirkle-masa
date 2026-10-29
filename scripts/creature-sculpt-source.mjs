import {BufferGeometry,Float32BufferAttribute,Vector3} from 'three';
// Authored clay volumes. Each silhouette has its own cheek, brow and ear masses;
// the surface is one continuous mesh rather than a stack of intersecting balls.
const volumes={
 0:[[0,.73,0,.49,.48,.345],[-.32,.72,.025,.23,.29,.30],[.32,.72,.025,.23,.29,.30],[-.43,1.08,-.04,.18,.25,.19],[.43,1.08,-.04,.18,.25,.19],[0,1.15,-.06,.25,.18,.25]],
 2:[[0,1.02,-.015,.49,.42,.35],[-.36,.90,.015,.23,.22,.29],[.36,.90,.015,.23,.22,.29],[0,.88,.045,.36,.25,.33]],
 3:[[0,.88,-.035,.48,.48,.36],[-.28,.64,.015,.27,.25,.30],[.28,.64,.015,.27,.25,.30],[0,1.18,-.04,.35,.24,.30]],
 4:[[0,.81,-.015,.46,.46,.32],[-.28,.67,.035,.22,.24,.27],[.28,.67,.035,.22,.24,.27],[0,.61,.075,.31,.20,.27],[0,1.14,-.08,.27,.20,.23]],
 5:[[0,.94,-.025,.49,.49,.35],[0,1.22,-.065,.31,.23,.27],[-.35,.72,-.015,.22,.24,.27],[.35,.72,-.015,.22,.24,.27],[0,.64,-.015,.40,.18,.29]]
};
export function sculptHead(face){
 const parts=volumes[face];if(!parts)throw Error('Missing sculpt');
 const field=(x,y,z)=>{let d=10;for(const [cx,cy,cz,rx,ry,rz]of parts){const q=(Math.hypot((x-cx)/rx,(y-cy)/ry,(z-cz)/rz)-1)*Math.min(rx,ry,rz),k=.065,h=Math.max(0,Math.min(1,.5+.5*(q-d)/k));d=q*(1-h)+d*h-k*h*(1-h)}return d};
 const n=[45,48,29],lo=[-.76,.14,-.47],step=[1.52/n[0],1.52/n[1],.94/n[2]],idx=(x,y,z)=>x+(n[0]+1)*(y+(n[1]+1)*z),values=new Float32Array((n[0]+1)*(n[1]+1)*(n[2]+1));
 for(let z=0;z<=n[2];z++)for(let y=0;y<=n[1];y++)for(let x=0;x<=n[0];x++)values[idx(x,y,z)]=field(lo[0]+x*step[0],lo[1]+y*step[1],lo[2]+z*step[2]);
 const corners=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],tetra=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]],edges=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],positions=[],normals=[];
 const normal=p=>{const e=.001;return new Vector3(field(p.x+e,p.y,p.z)-field(p.x-e,p.y,p.z),field(p.x,p.y+e,p.z)-field(p.x,p.y-e,p.z),field(p.x,p.y,p.z+e)-field(p.x,p.y,p.z-e)).normalize()};
 for(let z=0;z<n[2];z++)for(let y=0;y<n[1];y++)for(let x=0;x<n[0];x++){
  const v=corners.map(c=>values[idx(x+c[0],y+c[1],z+c[2])]);if(v.every(d=>d>=0)||v.every(d=>d<0))continue;
  const p=corners.map(c=>new Vector3(lo[0]+(x+c[0])*step[0],lo[1]+(y+c[1])*step[1],lo[2]+(z+c[2])*step[2]));
  for(const t of tetra){const poly=[];for(const [a,b]of edges){const i=t[a],j=t[b];if((v[i]<0)===(v[j]<0))continue;poly.push(p[i].clone().lerp(p[j],v[i]/(v[i]-v[j])))}if(poly.length<3)continue;
   const center=poly.reduce((c,p)=>c.add(p),new Vector3()).multiplyScalar(1/poly.length),up=normal(center),axis=poly[0].clone().sub(center).normalize(),across=new Vector3().crossVectors(up,axis);
   poly.sort((a,b)=>Math.atan2(a.clone().sub(center).dot(across),a.clone().sub(center).dot(axis))-Math.atan2(b.clone().sub(center).dot(across),b.clone().sub(center).dot(axis)));
   for(let j=1;j<poly.length-1;j++)for(const point of [poly[0],poly[j],poly[j+1]]){positions.push(point.x,point.y,point.z);const norm=normal(point);normals.push(norm.x,norm.y,norm.z)}
  }
 }
 const g=new BufferGeometry();g.setAttribute('position',new Float32BufferAttribute(positions,3));g.setAttribute('normal',new Float32BufferAttribute(normals,3));return g;
}
