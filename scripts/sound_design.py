"""Original Renkio sound bank: struck resonators, impacts, air and a harmonic finale.
Rebuild with Python + NumPy. Text packaging supports existing Android client updates.
"""
import numpy as np, wave, io, base64, json
from pathlib import Path
SR=32000
rng=np.random.default_rng(2601026)
def tone(t,f,d,amp=1):
    return np.sin(2*np.pi*f*t)*np.exp(-t/d)*amp
def stereo(a,tail=True):
    a=np.asarray(a); out=np.column_stack([a,a])
    if tail:
        for delay,gain in [(0.043,.17),(.079,.13),(.137,.09),(.211,.065),(.331,.04)]:
            k=int(delay*SR)
            if k<len(a):out[k:,0]+=a[:-k]*gain;out[k+17:,1]+=a[:len(a)-k-17]*gain*.9
    out=np.tanh(out*.9)
    peak=np.max(np.abs(out))
    if peak>.82:out*=.82/peak
    out[:128]*=np.linspace(0,1,128)[:,None];out[-640:]*=np.linspace(1,0,640)[:,None]
    return out
def tile(index):
    t=np.arange(int(SR*.34))/SR;f=[392,440,523.25,587.33,659.25,783.99][index]
    noise=rng.standard_normal(len(t));noise=np.convolve(noise,[.2,.6,.2],mode='same')
    a=.18*noise*np.exp(-t/.007)+tone(t,f*.48,.035,.38)+tone(t,f,.065,.3)+tone(t,f*2.71,.026,.045)+tone(t,f*4.14,.018,.018)
    if index>1:a+=tone(t,f*1.5,.095,.065)
    return stereo(a)
def whoosh():
    t=np.arange(int(SR*.28))/SR;n=rng.standard_normal(len(t));n=np.convolve(n,np.ones(6)/6,mode='same');env=np.sin(np.pi*t/.28)**2
    return stereo(n*env*.3+np.sin(2*np.pi*(180*t+1700*t*t))*env*.07,False)
def impact(level):
    length=[.85,1.35,1.9,3.6][level];t=np.arange(int(SR*length))/SR
    # Low drum pitch fall + damped resonant body + short band-limited air hit.
    a=np.sin(2*np.pi*(48*t+5.8*(1-np.exp(-t*18))))*np.exp(-t/.17)*(.55+level*.07)
    n=rng.standard_normal(len(t));n=np.convolve(n,np.ones(5)/5,mode='same');a+=n*np.exp(-t/.045)*(.14+level*.035)
    a+=tone(t,147,.10,.10)+tone(t,221,.067,.05)
    notes=[523.25,659.25,783.99,1046.5,1318.5,1568]
    # Staggered resonators and warm, gently detuned chord: no repeated pure beeps.
    for i,f in enumerate(notes[:2+level]):
        delay=.045+i*(.052 if level<3 else .075);u=np.maximum(0,t-delay);env=(t>=delay)*(1-np.exp(-u*80))*np.exp(-u/(.18+level*.10))
        a+=env*(np.sin(2*np.pi*f*u)+.20*np.sin(2*np.pi*f*2.002*u)+.08*np.sin(2*np.pi*f*3*u))*.13
    if level==3:
        for f in [130.81,164.81,196.0,261.63]:
            u=np.maximum(0,t-.16);env=(1-np.exp(-u*8))*np.exp(-u/.88)
            a+=env*(np.sin(2*np.pi*f*u)+.25*np.sin(2*np.pi*f*2*u))*.10
        for i in range(20):
            delay=.33+i*.065;u=np.maximum(0,t-delay);env=(t>=delay)*np.exp(-u/.08)
            a+=np.sin(2*np.pi*notes[i%6]*2*u)*env*.038
    return stereo(a)
sounds={**{f'tile{i+1}':tile(i) for i in range(6)},'launch':whoosh(),'impact1':impact(0),'impact2':impact(1),'impact3':impact(2),'renkio':impact(3)}
bank={};report={}
for name,a in sounds.items():
    raw=io.BytesIO()
    with wave.open(raw,'wb') as w:w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((a*32767).astype('<i2').tobytes())
    bank[name]=base64.b64encode(raw.getvalue()).decode();report[name]={'seconds':round(len(a)/SR,2),'peak':round(float(np.max(np.abs(a))),3)}
root=Path(__file__).resolve().parents[1]
(root/'public/assets/renkio-sound-bank-v2.txt').write_text(json.dumps({'format':1,'sampleRate':SR,'sounds':bank},separators=(',',':')),encoding='utf-8')
print(json.dumps(report))
