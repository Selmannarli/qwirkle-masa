import {createHash} from 'node:crypto';
import {createRemoteJWKSet,jwtVerify} from 'jose';
import {firebaseConfig,googleClientId} from './public/firebase-config.mjs';
const keys=createRemoteJWKSet(new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'));
export function playerId(uid){return (BigInt('0x'+createHash('sha256').update(uid).digest('hex').slice(0,16))%800000000000n+100000000000n).toString()}
export function publicProfile(user){const id=playerId(user.uid);return {id,name:user.name?.trim().slice(0,24)||'Player '+id,guest:user.guest}}
export async function verifyAccount(token){
 if(typeof token!=='string'||token.length>8192)throw Error('Hesabına yeniden giriş yap.');
 try{const {payload:p}=await jwtVerify(token,keys,{clockTolerance:30,algorithms:['RS256'],audience:firebaseConfig.projectId,issuer:'https://securetoken.google.com/'+firebaseConfig.projectId});
 if(!p.sub||p.sub.length>128||!Number.isInteger(p.auth_time)||p.auth_time>Date.now()/1000+30)throw Error();
 return {uid:p.sub,name:p.name||'',guest:p.firebase?.sign_in_provider==='anonymous',authTime:p.auth_time};
 }catch{throw Error('Hesap oturumu doğrulanamadı. Yeniden giriş yap.')}
}

const googleKeys=createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));
export async function verifyGoogleCredential(token,nonce){const {payload}=await jwtVerify(token,googleKeys,{clockTolerance:30,algorithms:['RS256'],audience:googleClientId,issuer:['https://accounts.google.com','accounts.google.com']});if(payload.nonce!==nonce)throw Error('Giriş isteği doğrulanamadı.');return payload}
