"""Deterministic AM halftone of a licensed photograph, not image generation.

White ink on black paper. Dot area is proportional to local luminance.
The sampling grid rotates 22.5 degrees, and the final image returns to the
source photograph's original aspect ratio. No overlay pattern is used.
"""
from pathlib import Path
from PIL import Image, ImageOps, ImageFilter, ImageDraw
import numpy as np
import math

import argparse
parser=argparse.ArgumentParser()
parser.add_argument('source', help='Downloaded licensed NOAA JPEG')
parser.add_argument('--output', default=str(Path(__file__).resolve().parents[1]/'public/images/lobster-halftone.webp'))
args=parser.parse_args()
source=Image.open(args.source).convert('L')
source=ImageOps.autocontrast(source,cutoff=(1,1))
source=source.point(lambda p: round(255*(p/255)**0.7))
source=source.filter(ImageFilter.UnsharpMask(radius=1.2,percent=110,threshold=4))
source.thumbnail((1800,1400),Image.Resampling.LANCZOS)
w,h=source.size
angle=22.5
rotated=source.rotate(angle,Image.Resampling.BICUBIC,expand=True,fillcolor=0)
a=np.asarray(rotated,dtype=np.float32)/255
# A 5px cell becomes a fine ~2px dot pitch at the 650px display width.
pitch=5; scale=3
screen=Image.new('L',(rotated.width*scale,rotated.height*scale),17)
draw=ImageDraw.Draw(screen)
radii=[]
for y in range(0,rotated.height,pitch):
 for x in range(0,rotated.width,pitch):
  lum=float(a[y:y+pitch,x:x+pitch].mean())
  if lum<0.018:continue
  radius=pitch*math.sqrt(lum/math.pi)*scale
  cx=(x+pitch/2)*scale;cy=(y+pitch/2)*scale
  draw.ellipse((cx-radius,cy-radius,cx+radius,cy+radius),fill=245)
  radii.append(radius/scale)
screen=screen.resize(rotated.size,Image.Resampling.LANCZOS)
screen=screen.rotate(-angle,Image.Resampling.BICUBIC,expand=True,fillcolor=17)
left=(screen.width-w)//2;top=(screen.height-h)//2
screen=screen.crop((left,top,left+w,top+h))
# Small, deterministic print grain, below the magnitude of the halftone dots.
rng=np.random.default_rng(2026)
arr=np.asarray(screen,dtype=np.float32)+rng.normal(0,0.65,(h,w))
final=Image.fromarray(np.uint8(np.clip(arr,0,255)),'L')
output=Path(args.output)
output.parent.mkdir(parents=True,exist_ok=True)
final.save(output,quality=94,method=6)
print({'output':str(output),'dimensions':[w,h],'dot_pitch':pitch,'screen_angle':angle})
