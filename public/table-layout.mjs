// One world-space layout: seats, bodies, furniture, camera and labels share it.
export const TABLE_SEATS=[
 {x:0,z:-2.08,yaw:0},
 {x:-2.55,z:0,yaw:Math.PI/2},
 {x:2.55,z:0,yaw:-Math.PI/2},
 {x:0,z:2.08,yaw:Math.PI}
];
export const SEAT_HEIGHT=.96;
export const TABLE_TOP=1.46;
export function seatPoint(index,x=0,y=0,z=0){const seat=TABLE_SEATS[index];return {x:seat.x+Math.cos(seat.yaw)*x+Math.sin(seat.yaw)*z,y:SEAT_HEIGHT+y,z:seat.z-Math.sin(seat.yaw)*x+Math.cos(seat.yaw)*z}}
