"""Pack actual Godot RGBA renders. Fail rather than ship cropped or dirty frames."""
from pathlib import Path
import argparse, hashlib, json
from PIL import Image, ImageDraw, ImageFont
import numpy as np

ROOT=Path(__file__).resolve().parents[1]
NAMES=['pof','robot','cat','cyclops','star','jelly']
LABELS=['Pof','Robot','Kedi','Tepegöz','Yıldız','Denizanası']
parser=argparse.ArgumentParser()
parser.add_argument('--frames',type=Path,default=ROOT/'art/character-studio/renders')
parser.add_argument('--preview',type=Path,default=ROOT/'art/character-studio/review')
args=parser.parse_args()
args.preview.mkdir(parents=True,exist_ok=True)
report={'producer':'Godot 4.5','source':'art/character-studio/studio.gd','framesPerCharacter':32,'columns':8,'rows':4,'cellSize':192,'characters':[]}
all_frames=[]

def tiny_islands(alpha):
    mask=np.asarray(Image.fromarray(alpha).resize((128,128),Image.Resampling.NEAREST))>=16
    seen=np.zeros(mask.shape,dtype=bool);small=0
    for y,x in np.argwhere(mask):
        if seen[y,x]:continue
        stack=[(y,x)];seen[y,x]=True;size=0
        while stack:
            yy,xx=stack.pop();size+=1
            for dy,dx in [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]:
                ny,nx=yy+dy,xx+dx
                if 0<=ny<128 and 0<=nx<128 and mask[ny,nx] and not seen[ny,nx]:
                    seen[ny,nx]=True;stack.append((ny,nx))
        if size<=2:small+=1
    return small

for name in NAMES:
    frames=[];margins=[];islands=[]
    atlas=Image.new('RGBA',(192*8,192*4))
    for i in range(32):
        file=args.frames/f'{name}-{i:02}.png'
        image=Image.open(file).convert('RGBA')
        assert image.size==(512,512),(name,i,'render size')
        rgba=np.asarray(image);alpha=rgba[:,:,3]
        assert alpha.min()==0 and alpha.max()==255,(name,i,'real transparency')
        box=image.getchannel('A').getbbox();assert box,(name,i,'empty render')
        margin=min(box[0],box[1],512-box[2],512-box[3]);margins.append(margin)
        assert margin>=40,(name,i,'gesture touches portrait edge',margin)
        islands.append(tiny_islands(alpha))
        assert islands[-1]==0,(name,i,'isolated pixel residue',islands[-1])
        frames.append(image)
        packed=image.resize((192,192),Image.Resampling.LANCZOS)
        atlas.paste(packed,(i%8*192,i//8*192))
    assert np.max(np.abs(np.asarray(frames[0]).astype(int)-np.asarray(frames[-1]).astype(int)))<=2,(name,'idle pose does not close cleanly')
    output=ROOT/'public/assets'/f'character-{name}-v3.webp'
    atlas.save(output,format='WEBP',lossless=True,method=6,exact=True)
    assert output.stat().st_size<5*1024*1024,(name,'Android per-file limit')
    report['characters'].append({'name':name,'minimumPaddingPx':min(margins),'strayIslands':sum(islands),'bytes':output.stat().st_size,'sha256':hashlib.sha256(output.read_bytes()).hexdigest()})
    all_frames.append(frames)
    print(name,'padding',min(margins),'bytes',output.stat().st_size,flush=True)

# Contact sheet at both contrasting backgrounds, with no UI masking to hide edges.
sheet=Image.new('RGB',(900,640*2))
for theme,bg in enumerate(['#241a36','#ffffff']):
    draw=ImageDraw.Draw(sheet);draw.rectangle((0,theme*640,900,(theme+1)*640),fill=bg)
    for face,frames in enumerate(all_frames):
        image=frames[0].resize((290,290),Image.Resampling.LANCZOS)
        sheet.paste(image,(face%3*300+5,theme*640+face//3*320+5),image)
sheet.save(args.preview/'edge-review.png')
gif=[]
for i in range(32):
    screen=Image.new('RGBA',(600,400),'#241a36')
    for face,frames in enumerate(all_frames):
        art=frames[i].resize((192,192),Image.Resampling.LANCZOS)
        screen.alpha_composite(art,(face%3*200+4,face//3*200+4))
    gif.append(screen.convert('RGB'))
palette=sheet.resize((450,640)).quantize(colors=192)
gif=[frame.quantize(palette=palette,dither=Image.Dither.NONE) for frame in gif]
gif[0].save(args.preview/'gestures.gif',save_all=True,append_images=gif[1:],duration=38,loop=0,optimize=True)
(ROOT/'art/character-studio/quality-report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print('All 192 frames passed alpha, padding, residue and idle-loop checks.')
