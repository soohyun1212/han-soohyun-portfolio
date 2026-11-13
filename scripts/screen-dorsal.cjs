// AM screening: the photograph supplies luminance and alpha, never a dot overlay.
// Usage: node scripts/screen-dorsal.cjs <clean transparent source> <output.png> [pitch]
const sharp = require('sharp');
(async () => {
  const [source, destination, pitchArgument] = process.argv.slice(2);
  if (!source || !destination) throw Error('Provide source and destination paths');
  const {data, info} = await sharp(source).resize({width:1800}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const {width:w,height:h}=info;
  const alpha=Buffer.alloc(w*h); const tones=[];
  for(let i=0;i<w*h;i++) { alpha[i]=data[i*4+3]<16?0:data[i*4+3]; if(alpha[i]>240)tones.push(.2126*data[i*4]+.7152*data[i*4+1]+.0722*data[i*4+2]); }
  tones.sort((a,b)=>a-b);const low=tones[Math.floor(tones.length*.03)],high=tones[Math.floor(tones.length*.98)];
  const pitch=Number(pitchArgument ?? 7.5);
  if (!Number.isFinite(pitch) || pitch < 2 || pitch > 40) throw Error('Pitch must be 2–40px');
  const angle=Math.PI/4, c=Math.cos(angle),s=Math.sin(angle);let circles=[];let radii=[];
  for(let v=-w;v<w+h;v+=pitch)for(let u=-h;u<w+h;u+=pitch){
    const x=u*c-v*s+w/2,y=u*s+v*c;
    if(x<0||y<0||x>=w||y>=h)continue;
    let sum=0,weight=0;
    for(const [dx,dy] of [[0,0],[-2,-2],[2,2],[-2,2],[2,-2]]){
      const px=Math.max(0,Math.min(w-1,Math.round(x+dx))),py=Math.max(0,Math.min(h-1,Math.round(y+dy))),i=py*w+px,a=alpha[i]/255;
      sum+=(.2126*data[i*4]+.7152*data[i*4+1]+.0722*data[i*4+2])*a;weight+=a;
    }
    if(weight<.02)continue;
    const luminance=Math.max(0,Math.min(1,(sum/weight-low)/(high-low)));
    const coverage=.06+.74*Math.pow(1-luminance,.7);
    const r=pitch*Math.sqrt(coverage/Math.PI);radii.push(r);
    circles.push(`<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${r.toFixed(3)}"/>`);
  }
  const svg=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="#f5f5f2"/><g fill="#111111">${circles.join('')}</g></svg>`);
  // The source silhouette clips the screened ink, preserving fine limbs and holes.
  const rgb = await sharp(svg).removeAlpha().raw().toBuffer();
  await sharp(rgb,{raw:{width:w,height:h,channels:3}}).joinChannel(alpha,{raw:{width:w,height:h,channels:1}}).extend({top:60,bottom:60,left:60,right:60,background:{r:0,g:0,b:0,alpha:0}}).png().toFile(destination);
  console.log(JSON.stringify({width:w+120,height:h+120,pitch,angle:45,dots:circles.length,radius:[Math.min(...radii),Math.max(...radii)],low,high}));
})().catch(e=>{console.error(e);process.exit(1)});
