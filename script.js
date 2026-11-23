/*
  THE NGUYEN FILES — media setup
  1) Paste your portrait URL into SITE_MEDIA.portrait.
  2) Paste your completed introductory film URL into SITE_MEDIA.introVideo.
  3) Paste image URLs into the numbered slide entries below. Keep the ẢNH numbers as they are.
  No image-upload form is shown to visitors; all media is managed here in code.
*/
const SITE_MEDIA = {
  portrait: "https://cdn.phototourl.com/anon/2026-11-23-4e35d84b-a0a4-478f-9376-52500a0ed4cc.jpg",
  introVideo: "PASTE_YOUR_INTRO_VIDEO_URL_HERE"
};

const clues = [
  {title:"The Beginning",tag:"ORIGIN",heading:"A story shaped by more than one place.",text:"From Vietnam to the United States, new places brought new questions. This first clue is about the experiences, people, and small moments that shaped the way I see the world.",evidence:"EVIDENCE 001 · WHERE IT BEGAN",pieces:[0,5]},
  {title:"The Scientist",tag:"RESEARCH",heading:"Looking closer at the living world.",text:"From hippocampal activity and neural communication to the tumor microenvironment and natural biomaterials, I am drawn to the patterns that connect biology, computation, and health.",evidence:"EVIDENCE 002 · QUESTIONS IN THE LAB",pieces:[1,4]},
  {title:"The Innovator",tag:"IDEAS",heading:"Turning questions into things people can use.",text:"Some ideas begin with a problem that feels close to home. HomeHealth grew from an interest in environmental health, prevention, and making useful health information easier to reach.",evidence:"EVIDENCE 003 · IDEAS IN MOTION",pieces:[2,7]},
  {title:"The Founder",tag:"BUILDING",heading:"Building something bigger than myself.",text:"Lotus Biomed Vanguard and The Gréne Vietnam began with a simple belief: students can create meaningful opportunities for other students and communities when they build together.",evidence:"EVIDENCE 004 · THE THINGS WE BUILD",pieces:[3,6]},
  {title:"The Impact",tag:"COMMUNITY",heading:"Knowledge means more when it travels.",text:"Tutoring, student publishing, science challenges, environmental projects, and healthcare volunteering have shown me that learning can become a shared resource—not something kept to ourselves.",evidence:"EVIDENCE 005 · PEOPLE & PURPOSE",pieces:[8,9]},
  {title:"The Milestones",tag:"MOMENTUM",heading:"A collection of firsts, lessons, and milestones.",text:"Competitions, academic experiences, laboratory training, and leadership roles mark different points along the way. Each one represents practice, persistence, and another reason to keep exploring.",evidence:"EVIDENCE 006 · MILESTONES ALONG THE WAY",pieces:[10,11,12]},
  {title:"The Person",tag:"BEYOND THE WORK",heading:"There is always more to the picture.",text:"Outside research and organizing, there is photography, dance, traditional Vietnamese music, detective fiction, languages, and an enduring curiosity about how things fit together.",evidence:"EVIDENCE 007 · THE PERSON BEHIND THE WORK",pieces:[13,14,15]}
];

const chapters = [
 {name:"Research",kicker:"01 / RESEARCH",title:"The questions\n beneath the surface.",description:"A look inside the laboratories, datasets, and biological questions that have shaped my research journey.",slides:["Hippocampal networks & neural communication","Spatial AI and the pancreatic tumor microenvironment","Natural biomaterials and antibacterial research","Learning the language of biotechnology"]},
 {name:"Ideas & Projects",kicker:"02 / IDEAS & PROJECTS",title:"From questions\n to possibilities.",description:"Independent ideas, prototypes, and experiments that explore how science and technology can meet everyday needs.",slides:["HomeHealth — environmental health, made more accessible","Computational analysis of neuronal avalanche patterns","Small experiments, bigger questions","Making an idea tangible"]},
 {name:"Founding",kicker:"03 / FOUNDING",title:"Build what\nyou wish existed.",description:"The organizations and initiatives I helped create, and the communities that continue to grow through shared effort.",slides:["Lotus Biomed Vanguard — Lab to Life","The Gréne Vietnam — community and sustainability","A team across borders","From a first idea to a growing community"]},
 {name:"Community",kicker:"04 / COMMUNITY",title:"Learning is\nbetter shared.",description:"Science education, mentorship, outreach, and community projects that connect knowledge with people.",slides:["Victoria Tutoring and peer mentorship","Lotus Journal — student voices in biomedicine","STEM Challenge 2026","Little Moments and community engagement"]},
 {name:"Leadership",kicker:"05 / LEADERSHIP",title:"Make room\nfor others to lead.",description:"A visual record of organizing, collaboration, and the teams and school communities I have been lucky to work with.",slides:["Sci-HOSA at Mater Dei","Mater Dei Key Club","The Institute of Viéce","Planning, teamwork, and the moments between"]},
 {name:"Recognition",kicker:"06 / RECOGNITION",title:"Milestones,\nnot finish lines.",description:"Selected competition experiences, recognitions, and academic milestones—each one part of a longer learning process.",slides:["Innovation and research competitions","Academic competitions and honors","Presentations, certificates, and celebrations","Lessons that stay after the result"]},
 {name:"Healthcare",kicker:"07 / HEALTHCARE",title:"Where science\nmeets people.",description:"Experiences that have brought me closer to patients, healthcare teams, biomedical technology, and the human side of care.",slides:["Breast Cancer Network Vietnam","St. Mary Medical Center — biomedical and radiology exposure","Biochemistry and pharmaceutical science training","The people behind the science"]},
 {name:"Life & Interests",kicker:"08 / LIFE & INTERESTS",title:"The person\nbeyond the projects.",description:"A few other pieces of my world: the places, creative practices, languages, and stories that keep me curious.",slides:["Photography and collecting moments","Dance and traditional Vietnamese music","Detective fiction, books, and unanswered questions","Vietnamese, English, and Chinese"]}
];

// Each numbered item is a place to paste one image URL. Blank strings show a designed placeholder.
let photoNumber = 2;
chapters.forEach(ch => ch.slides = ch.slides.map((caption) => ({caption, photoNo: photoNumber++, src:""})));

const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));
const validUrl = value => value && !value.startsWith("PASTE_") && value.trim() !== "";
const toast = (message)=>{const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2300)};

function showScreen(id){$$('.screen').forEach(s=>s.classList.remove('active'));$("#"+id).classList.add('active');document.body.classList.toggle('world-mode',id==='world');window.scrollTo({top:0,behavior:'smooth'});}
$("#solveEntry").addEventListener('click',async()=>{showScreen('case');renderClues();selectClue(0);if(!puzzleInitialized){await initPuzzle();puzzleInitialized=true;}});
$("#worldEntry").addEventListener('click',()=>enterWorld());
$("#exitCase").addEventListener('click',()=>showScreen('home'));
$("#continueWorld").addEventListener('click',()=>{ $("#filmScreen").classList.remove('active');$("#filmScreen").setAttribute('aria-hidden','true');enterWorld(); });
function enterWorld(){ $("#filmScreen").classList.remove('active');showScreen('world');renderChapters(); }

let activeClue=0, collected=new Set(), placed=new Set(), puzzlePieces=[], dragPiece=null, dragOffset={x:0,y:0}, puzzleInitialized=false;
const COLS=4,ROWS=4;
function renderClues(){
 const list=$("#clueList");list.innerHTML='';
 clues.forEach((c,i)=>{const b=document.createElement('button');b.className='clue-item';b.dataset.index=i;b.innerHTML=`<span class="clue-no">0${i+1}</span><span class="clue-name">${c.title}</span><span class="clue-state">${collected.has(i)?'✓':i===activeClue?'OPEN':'—'}</span>`;b.addEventListener('click',()=>selectClue(i));list.appendChild(b)});
 updateProgress();
}
function selectClue(i){activeClue=i;const c=clues[i];$("#activeClueNumber").textContent=`CLUE 0${i+1} / ${c.tag}`;$("#activeClueTitle").textContent=c.heading;$("#activeClueText").textContent=c.text;$("#activeClueEvidence").textContent=c.evidence;const btn=$("#collectClue");btn.disabled=collected.has(i);btn.innerHTML=collected.has(i)?'CLUE COLLECTED ✓':'COLLECT THIS CLUE <span>↗</span>';$("#caseHint").textContent=collected.has(i)?'EVIDENCE ADDED TO THE CASE':'READ THE CLUE, THEN COLLECT ITS PIECES';renderClues();}
$("#collectClue").addEventListener('click',()=>{if(collected.has(activeClue))return;collected.add(activeClue);clues[activeClue].pieces.forEach(idx=>unlockPiece(idx));selectClue(activeClue);updateProgress();toast(`${clues[activeClue].title.toUpperCase()} — PIECES RELEASED`);if(placed.size===16)finishCase();});
function updateProgress(){const n=collected.size;$("#clueCount").textContent=`${String(n).padStart(2,'0')} / 07`;$("#progressText").textContent=`${Math.round(n/7*100)}%`;$("#progressFill").style.width=`${n/7*100}%`;$("#clueList").querySelectorAll('.clue-item').forEach((b,i)=>{b.classList.toggle('selected',i===activeClue);b.classList.toggle('done',collected.has(i));const state=$('.clue-state',b);if(state)state.textContent=collected.has(i)?'✓':i===activeClue?'OPEN':'—';});}

// A true interlocking-piece silhouette is drawn into each canvas. Internal edges share matching tab directions.
const edgeH=Array.from({length:ROWS-1},()=>Array.from({length:COLS},(_,c)=>((c*3+Math.floor(Math.random()*2))%2?1:-1)));
const edgeV=Array.from({length:ROWS},()=>Array.from({length:COLS-1},(_,c)=>((c*5+Math.floor(Math.random()*2))%2?1:-1)));
function drawJigsawPath(ctx,w,h,top,right,bottom,left,tab){
 const x=tab,y=tab,ww=w-2*tab,hh=h-2*tab,midX=x+ww/2,midY=y+hh/2,r=tab*.72;
 ctx.beginPath();ctx.moveTo(x,y);
 // top edge, left to right
 if(top===0)ctx.lineTo(x+ww,y);else{let s=-top;ctx.lineTo(midX-r*1.45,y);ctx.bezierCurveTo(midX-r*1.1,y,midX-r*1.2,y+s*tab*.55,midX-r*.55,y+s*tab*.58);ctx.bezierCurveTo(midX-r*.15,y+s*tab*.6,midX-r*.35,y+s*tab,midX,y+s*tab);ctx.bezierCurveTo(midX+r*.35,y+s*tab,midX+r*.15,y+s*tab*.6,midX+r*.55,y+s*tab*.58);ctx.bezierCurveTo(midX+r*1.2,y+s*tab*.55,midX+r*1.1,y,midX+r*1.45,y);ctx.lineTo(x+ww,y);}
 // right edge top to bottom
 if(right===0)ctx.lineTo(x+ww,y+hh);else{let s=right;ctx.lineTo(x+ww,midY-r*1.45);ctx.bezierCurveTo(x+ww,midY-r*1.1,x+ww+s*tab*.55,midY-r*1.2,x+ww+s*tab*.58,midY-r*.55);ctx.bezierCurveTo(x+ww+s*tab*.6,midY-r*.15,x+ww+s*tab,midY-r*.35,x+ww+s*tab,midY);ctx.bezierCurveTo(x+ww+s*tab,midY+r*.35,x+ww+s*tab*.6,midY+r*.15,x+ww+s*tab*.58,midY+r*.55);ctx.bezierCurveTo(x+ww+s*tab*.55,midY+r*1.2,x+ww,midY+r*1.1,x+ww,midY+r*1.45);ctx.lineTo(x+ww,y+hh);}
 // bottom right to left; positive means outward down
 if(bottom===0)ctx.lineTo(x,y+hh);else{let s=bottom;ctx.lineTo(midX+r*1.45,y+hh);ctx.bezierCurveTo(midX+r*1.1,y+hh,midX+r*1.2,y+hh+s*tab*.55,midX+r*.55,y+hh+s*tab*.58);ctx.bezierCurveTo(midX+r*.15,y+hh+s*tab*.6,midX+r*.35,y+hh+s*tab,midX,y+hh+s*tab);ctx.bezierCurveTo(midX-r*.35,y+hh+s*tab,midX-r*.15,y+hh+s*tab*.6,midX-r*.55,y+hh+s*tab*.58);ctx.bezierCurveTo(midX-r*1.2,y+hh+s*tab*.55,midX-r*1.1,y+hh,midX-r*1.45,y+hh);ctx.lineTo(x,y+hh);}
 // left edge bottom to top; negative means outward left
 if(left===0)ctx.lineTo(x,y);else{let s=-left;ctx.lineTo(x,midY+r*1.45);ctx.bezierCurveTo(x,midY+r*1.1,x+s*tab*.55,midY+r*1.2,x+s*tab*.58,midY+r*.55);ctx.bezierCurveTo(x+s*tab*.6,midY+r*.15,x+s*tab,midY+r*.35,x+s*tab,midY);ctx.bezierCurveTo(x+s*tab,midY-r*.35,x+s*tab*.6,midY-r*.15,x+s*tab*.58,midY-r*.55);ctx.bezierCurveTo(x+s*tab*.55,midY-r*1.2,x,midY-r*1.1,x,midY-r*1.45);ctx.lineTo(x,y);}
 ctx.closePath();
}
function edgeFor(r,c,side){if(side==='top')return r===0?0:-edgeH[r-1][c];if(side==='bottom')return r===ROWS-1?0:edgeH[r][c];if(side==='left')return c===0?0:-edgeV[r][c-1];return c===COLS-1?0:edgeV[r][c];}
function makePortrait(){return new Promise(resolve=>{const img=new Image();img.crossOrigin='anonymous';img.onload=()=>resolve(img);img.onerror=()=>resolve(null);if(validUrl(SITE_MEDIA.portrait)){img.src=SITE_MEDIA.portrait;}else resolve(null);});}
let portraitImage=null;
function fallbackPortrait(){const c=document.createElement('canvas');c.width=1000;c.height=750;const x=c.getContext('2d'),g=x.createLinearGradient(0,0,1000,750);g.addColorStop(0,'#718a77');g.addColorStop(.55,'#344d3d');g.addColorStop(1,'#17291f');x.fillStyle=g;x.fillRect(0,0,1000,750);x.fillStyle='rgba(225,231,210,.18)';x.beginPath();x.arc(500,270,115,0,Math.PI*2);x.fill();x.beginPath();x.ellipse(500,680,250,290,0,Math.PI,Math.PI*2);x.fill();x.fillStyle='#e8ebdd';x.font='italic 42px Georgia';x.textAlign='center';x.fillText('YOUR PORTRAIT GOES HERE',500,700);return c;}
function pieceEdges(index){const r=Math.floor(index/COLS),c=index%COLS;return {top:edgeFor(r,c,'top'),right:edgeFor(r,c,'right'),bottom:edgeFor(r,c,'bottom'),left:edgeFor(r,c,'left')};}
function buildPiece(index){const board=$("#puzzleBoard"),rect=board.getBoundingClientRect();const cellW=rect.width/COLS,cellH=rect.height/ROWS,tab=Math.min(cellW,cellH)*.19,w=cellW+tab*2,h=cellH+tab*2,scale=2;const can=document.createElement('canvas');can.width=w*scale;can.height=h*scale;const ctx=can.getContext('2d');ctx.scale(scale,scale);const r=Math.floor(index/COLS),c=index%COLS;const e=pieceEdges(index);drawJigsawPath(ctx,w,h,e.top,e.right,e.bottom,e.left,tab);ctx.save();ctx.clip();if(portraitImage){const iw=portraitImage.width,ih=portraitImage.height;const cover=Math.max((rect.width)/iw,(rect.height)/ih);const dw=iw*cover,dh=ih*cover,ox=(rect.width-dw)/2,oy=(rect.height-dh)/2;ctx.drawImage(portraitImage,ox-c*cellW+tab,oy-r*cellH+tab,dw,dh);}else{const fallback=fallbackPortrait();ctx.drawImage(fallback, -c*cellW+tab,-r*cellH+tab,rect.width,rect.height);}ctx.restore();ctx.strokeStyle='rgba(239,242,224,.72)';ctx.lineWidth=1.5;ctx.stroke();return {canvas:can,index,tab,cellW,cellH,w,h};}
async function initPuzzle(){portraitImage=await makePortrait();const board=$("#puzzleBoard");board.innerHTML='';for(let i=0;i<16;i++){const cell=document.createElement('div');cell.className='puzzle-cell';cell.dataset.index=i;board.appendChild(cell);}puzzlePieces=Array.from({length:16},(_,i)=>buildPiece(i));}
function copyCanvas(source){const copy=document.createElement('canvas');copy.width=source.width;copy.height=source.height;copy.getContext('2d').drawImage(source,0,0);return copy;}
function unlockPiece(index){if($(`#piece-${index}`))return;const p=puzzlePieces[index];if(!p)return;const card=document.createElement('div');card.className='piece-card';card.id=`piece-${index}`;card.dataset.index=index;card.appendChild(copyCanvas(p.canvas));card.addEventListener('pointerdown',startDrag);$("#pieceTray").querySelector('.tray-empty')?.remove();$("#pieceTray").appendChild(card);updatePieceCount();}
function updatePieceCount(){const available=$$('.piece-card:not(.placed)',$('#pieceTray')).length;$('#trayCount').textContent=`${available} READY`;$('#pieceCount').textContent=placed.size;}
function startDrag(e){if(placed.has(Number(e.currentTarget.dataset.index)))return;e.preventDefault();const card=e.currentTarget;dragPiece=card;card.classList.add('dragging');const rect=card.getBoundingClientRect();dragOffset.x=e.clientX-rect.left;dragOffset.y=e.clientY-rect.top;card.setPointerCapture?.(e.pointerId);card.style.position='fixed';card.style.zIndex='100';card.style.width=rect.width+'px';card.style.height=rect.height+'px';card.style.left=rect.left+'px';card.style.top=rect.top+'px';document.addEventListener('pointermove',moveDrag);document.addEventListener('pointerup',endDrag,{once:true});}
function moveDrag(e){if(!dragPiece)return;dragPiece.style.left=(e.clientX-dragOffset.x)+'px';dragPiece.style.top=(e.clientY-dragOffset.y)+'px';}
function endDrag(e){if(!dragPiece)return;const card=dragPiece;document.removeEventListener('pointermove',moveDrag);card.classList.remove('dragging');const board=$('#puzzleBoard'),rect=board.getBoundingClientRect();const inside=e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom;const index=Number(card.dataset.index);if(inside){const col=Math.min(COLS-1,Math.max(0,Math.floor((e.clientX-rect.left)/rect.width*COLS)));const row=Math.min(ROWS-1,Math.max(0,Math.floor((e.clientY-rect.top)/rect.height*ROWS)));const target=row*COLS+col;if(target===index){placePiece(index,card);}else{toast('Not quite — try another position.');resetCard(card);}}else resetCard(card);dragPiece=null;}
function resetCard(card){card.style.position='';card.style.zIndex='';card.style.width='';card.style.height='';card.style.left='';card.style.top='';}
function placePiece(index,card){const board=$('#puzzleBoard'),cell=$(`.puzzle-cell[data-index="${index}"]`,board),p=puzzlePieces[index];const can=copyCanvas(p.canvas);can.style.position='absolute';can.style.width=`calc(100% + ${p.tab*2}px)`;can.style.height=`calc(100% + ${p.tab*2}px)`;can.style.left=`-${p.tab}px`;can.style.top=`-${p.tab}px`;can.style.maxWidth='none';can.style.zIndex='2';cell.classList.add('occupied');cell.appendChild(can);card.classList.add('placed');placed.add(index);updatePieceCount();if(placed.size===16){if(collected.size===7)finishCase();else toast('Portrait almost complete — collect every clue.');}}
function finishCase(){if(placed.size!==16||collected.size!==7)return;$('#filmScreen').classList.add('active');$('#filmScreen').setAttribute('aria-hidden','false');const video=$('#introVideo');if(validUrl(SITE_MEDIA.introVideo)){video.src=SITE_MEDIA.introVideo;video.classList.add('ready');$('#videoPlaceholder').style.display='none';video.play().catch(()=>{});}else{video.classList.remove('ready');$('#videoPlaceholder').style.display='flex';}}

// Visual chapters: image URLs are intentionally configured in code, not through a visitor-facing upload control.
let activeChapter=0,activeSlide=0;
function renderChapters(){const tabs=$('#chapterTabs');tabs.innerHTML='';chapters.forEach((ch,i)=>{const b=document.createElement('button');b.className='chapter-tab'+(i===activeChapter?' active':'');b.textContent=`0${i+1} / ${ch.name.toUpperCase()}`;b.addEventListener('click',()=>{activeChapter=i;activeSlide=0;renderChapters();renderSlide();});tabs.appendChild(b);});renderSlide();}
function renderSlide(){const ch=chapters[activeChapter],s=ch.slides[activeSlide];$('#slideCategory').textContent=ch.kicker;$('#slideIndex').textContent=`ẢNH ${String(s.photoNo).padStart(2,'0')} / ${String(activeSlide+1).padStart(2,'0')}`;$('#slideCount').textContent=`${String(activeSlide+1).padStart(2,'0')} — ${String(ch.slides.length).padStart(2,'0')}`;$('#slideTitle').innerHTML=ch.title.replace('\n','<br>');$('#slideDescription').textContent=ch.description;$('#slidePlaceholderTitle').textContent=s.caption;$('#slidePlaceholderSub').textContent=s.src?'':'PASTE IMAGE URL IN THE NUMBERED MEDIA ENTRY IN SCRIPT.JS';const area=$('#slideImageArea');area.style.backgroundImage=s.src?`linear-gradient(0deg,rgba(15,28,21,.32),rgba(15,28,21,.04)),url("${s.src}")`:'';area.classList.toggle('has-image',!!s.src);$('#slidePlaceholderSub').style.display=s.src?'none':'block';$('#slideDots').innerHTML='';ch.slides.forEach((_,i)=>{const d=document.createElement('span');d.className='slide-dot'+(i===activeSlide?' active':'');$('#slideDots').appendChild(d);});}
$('#prevSlide').addEventListener('click',()=>{activeSlide=(activeSlide-1+chapters[activeChapter].slides.length)%chapters[activeChapter].slides.length;renderSlide();});$('#nextSlide').addEventListener('click',()=>{activeSlide=(activeSlide+1)%chapters[activeChapter].slides.length;renderSlide();});
function setHeroPortrait(){if(validUrl(SITE_MEDIA.portrait))$('#heroPortrait').style.backgroundImage=`url("${SITE_MEDIA.portrait}")`;}
$('#backToTop').addEventListener('click',e=>{e.preventDefault();showScreen('home');});
window.addEventListener('load',()=>{setHeroPortrait();$('#pieceTray').innerHTML='<div class="tray-empty">Collect your first clue to release the puzzle pieces.</div>';});
