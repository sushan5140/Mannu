const questions = [
  {chapter:"IDENTITY CHECK", title:"First: pick your actual favorite color.", sub:"Not the aesthetic answer. The one your soul keeps choosing.", key:"favoriteColor", label:"Favorite color", type:"color", options:[
    ["Black","#171717"],["White","#f4f0ea"],["Pink","#ff8fc7"],["Red","#e84b4b"],["Blue","#4f7cff"],["Purple","#9b6cff"],["Green","#4fa66a"],["Yellow","#f4cf55"],["Brown","#8b684d"],["Orange","#ef9145"],["Grey","#8d8d99"],["Other","linear-gradient(135deg,#ff8fc7,#7c6cff,#50d2a0)"]
  ]},
  {chapter:"IDENTITY CHECK", title:"What song owns you right now?", sub:"The one you replay like it owes you money.", key:"song", label:"Current favorite song", type:"text", placeholder:"song — artist"},
  {chapter:"IDENTITY CHECK", title:"Your forever comfort food?", sub:"Bad day. Zero patience. What fixes at least 12% of the problem?", key:"comfortFood", label:"Comfort food", type:"text", placeholder:"type the sacred food"},
  {chapter:"TASTE SCAN", title:"Choose your drink allegiance.", sub:"Your default little beverage situation.", key:"drink", label:"Go-to drink", type:"choice", options:["Coffee","Chai / Tea","Cold coffee","Juice","Soft drink","Water like a responsible citizen","Something else"]},
  {chapter:"TASTE SCAN", title:"Which snack disappears first around you?", sub:"This is a judgement-free crime scene.", key:"snack", label:"Favorite snack", type:"text", placeholder:"chips? chocolate? chaos?"},
  {chapter:"TASTE SCAN", title:"Pick a flower. Any flower.", sub:"Useful information for completely non-flower-related reasons.", key:"flower", label:"Favorite flower", type:"choice", options:["Roses","Tulips","Sunflowers","Lilies","Daisies","Baby's breath","I don't care about flowers"]},
  {chapter:"TASTE SCAN", title:"What scent feels most like you?", sub:"Perfume family, candle smell, shampoo aisle… whatever.", key:"scent", label:"Favorite scent", type:"choice", options:["Vanilla / sweet","Floral","Fresh / clean","Fruity","Woody","Citrus","I genuinely don't know"]},
  {chapter:"TASTE SCAN", title:"One movie or show you can always rewatch?", sub:"Even if you know every scene already.", key:"comfortWatch", label:"Comfort movie/show", type:"text", placeholder:"your immortal rewatch"},
  {chapter:"TASTE SCAN", title:"Your current fictional / celebrity weakness?", sub:"No court will see this answer. Probably.", key:"crush", label:"Current celebrity/fictional fave", type:"text", placeholder:"name names"},
  {chapter:"COMFORT LORE", title:"What kind of weather makes you happiest?", sub:"The world outside = instant mood modifier.", key:"weather", label:"Favorite weather", type:"choice", options:["Rainy","Cold + cloudy","Sunny","Winter sunshine","Thunderstorm","Night breeze","Any weather if I'm indoors"]},
  {chapter:"COMFORT LORE", title:"When you're upset, what actually helps?", sub:"We are banning useless 'cheer up' energy.", key:"badDay", label:"Best bad-day rescue", type:"choice", options:["Food","A long call","Space / alone time","Memes + distraction","A hug","Going out","Music","Sleep"]},
  {chapter:"COMFORT LORE", title:"What makes a gift feel REALLY good?", sub:"Not price. The part that makes you go 'oh… you noticed.'", key:"giftStyle", label:"Best kind of gift", type:"choice", options:["Handmade","Something useful","Something I mentioned once","Food","Jewellery / accessories","An experience / outing","A letter / words","Surprise me completely"]},
  {chapter:"COMFORT LORE", title:"Perfect birthday treatment?", sub:"Main character edition. Choose your chaos level.", key:"birthday", label:"Birthday preference", type:"choice", options:["Big surprise","Small close-friends plan","Quiet + meaningful","Dinner / cafe","Trip / outing","Please do not make me the center of attention"]},
  {chapter:"COMFORT LORE", title:"Dream place you'd disappear to for a few days?", sub:"No visa officer is reading this.", key:"destination", label:"Dream escape", type:"text", placeholder:"city, country, beach, mountains…"},
  {chapter:"CHAOS ROUND", title:"One thing you can NEVER say no to?", sub:"Object, food, plan, person, anything. Expose yourself.", key:"cantSayNo", label:"Can't say no to", type:"text", placeholder:"your fatal weakness"},
  {chapter:"CHAOS ROUND", title:"Tiny thing that annoys you way too much?", sub:"Petty answers receive bonus points.", key:"petPeeve", label:"Pet peeve", type:"text", placeholder:"the small crime"},
  {chapter:"CHAOS ROUND", title:"What's your 'buy this for me and we're good' item?", sub:"Could cost ₹20. Could financially destroy someone. We need the data.", key:"easyGift", label:"Easy win gift", type:"text", placeholder:"the guaranteed win"},
  {chapter:"CHAOS ROUND", title:"Your ideal random plan with your favorite person?", sub:"No itinerary committee. Just vibes.", key:"randomPlan", label:"Ideal random plan", type:"choice", options:["Long drive","Street food run","Cafe + yap","Movie night","Shopping","Gaming","Walk + music","Stay in and do absolutely nothing"]},
  {chapter:"FINAL BOSS", title:"What do people always forget about you?", sub:"This machine would like to avoid becoming one of them.", key:"rememberThis", label:"Please remember", type:"textarea", placeholder:"something small but important…"},
  {chapter:"FINAL BOSS", title:"Last one: describe yourself in 3 words.", sub:"Official Mannu checksum. Be dramatic if necessary.", key:"threeWords", label:"Mannu in 3 words", type:"text", placeholder:"word · word · word"}
];

const microcopy = [
  "No pressure. The machine is only judging a little.",
  "Data quality: suspiciously adorable.",
  "Gift clearance is looking promising.",
  "We are definitely not building Mannu lore.",
  "The scanner nodded. Very official.",
  "One more answer added to the classified archives."
];

let index = Number(localStorage.getItem("mannu_index") || 0);
let answers = JSON.parse(localStorage.getItem("mannu_answers") || "{}");

const $ = s => document.querySelector(s);
const intro=$("#intro"), game=$("#game"), result=$("#result");
const answerArea=$("#answerArea");

function show(screen){[intro,game,result].forEach(x=>x.classList.remove("active"));screen.classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
function save(){localStorage.setItem("mannu_answers",JSON.stringify(answers));localStorage.setItem("mannu_index",String(index));}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1700);}
function esc(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}

function render(){
  const q=questions[index];
  $("#chapterLabel").textContent=q.chapter;
  $("#progressLabel").textContent=String(index+1).padStart(2,"0")+" / "+questions.length;
  $("#progressBar").style.width=((index+1)/questions.length*100)+"%";
  $("#questionNumber").textContent="CASE "+String(index+1).padStart(2,"0");
  $("#questionTitle").textContent=q.title;
  $("#questionSub").textContent=q.sub;
  $("#microcopy").textContent=microcopy[index%microcopy.length];
  $("#backBtn").style.opacity=index===0?".35":"1";
  answerArea.innerHTML="";

  if(q.type==="text"||q.type==="textarea"){
    const el=document.createElement(q.type==="textarea"?"textarea":"input");
    el.className="text-input";
    el.placeholder=q.placeholder||"type here";
    el.value=answers[q.key]||"";
    if(q.type==="text") el.type="text";
    el.autocomplete="off";
    el.addEventListener("input",()=>{answers[q.key]=el.value;save();});
    el.addEventListener("keydown",e=>{if(e.key==="Enter"&&q.type==="text"){e.preventDefault();next();}});
    answerArea.appendChild(el);
    setTimeout(()=>el.focus(),250);
  } else if(q.type==="choice"){
    const grid=document.createElement("div");grid.className="choice-grid";
    q.options.forEach(opt=>{
      const b=document.createElement("button");b.className="choice"+(answers[q.key]===opt?" selected":"");b.textContent=opt;
      b.onclick=()=>{answers[q.key]=opt;save();grid.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");};
      grid.appendChild(b);
    });answerArea.appendChild(grid);
  } else if(q.type==="color"){
    const grid=document.createElement("div");grid.className="color-grid";
    q.options.forEach(([name,color])=>{
      const b=document.createElement("button");b.className="color-choice"+(answers[q.key]===name?" selected":"");b.style.background=color;b.setAttribute("aria-label",name);
      b.innerHTML="<span>"+name+"</span>";
      b.onclick=()=>{answers[q.key]=name;save();grid.querySelectorAll(".color-choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");};
      grid.appendChild(b);
    });answerArea.appendChild(grid);
  }
}
function next(){
  const q=questions[index];
  if(!answers[q.key]||!String(answers[q.key]).trim()){toast("answer it or use skip 👀");return;}
  if(index<questions.length-1){index++;save();render();}else finish();
}
function skip(){answers[questions[index].key]="—";if(index<questions.length-1){index++;save();render();}else finish();}
function finish(){save();buildPassport();show(result);}
function code(){let x=questions.map(q=>answers[q.key]||"").join("|");let h=0;for(let i=0;i<x.length;i++)h=((h<<5)-h+x.charCodeAt(i))|0;return "MN-"+Math.abs(h).toString(36).toUpperCase().slice(0,6).padStart(6,"0");}
function buildPassport(){
  const grid=$("#passportGrid");grid.innerHTML="";
  questions.forEach(q=>{const v=answers[q.key];if(!v||v==="—")return;const d=document.createElement("div");d.className="passport-item";d.innerHTML="<span>"+esc(q.label)+"</span><strong>"+esc(v)+"</strong>";grid.appendChild(d);});
  $("#passportCode").textContent=code();
}
function receipt(){
  const lines=["✦ MANNU VERIFICATION RECEIPT","Status: VERIFIED","Passport: "+code(),"","— CLASSIFIED MANNU LORE —"];
  questions.forEach(q=>{const v=answers[q.key];if(v&&v!=="—")lines.push(q.label+": "+v);});
  lines.push("","Authenticated by vibes. Please deliver the alleged gift accordingly.");
  return lines.join("\n");
}
async function copyReceipt(){try{await navigator.clipboard.writeText(receipt());toast("copied to clipboard");}catch{toast("copy failed — use share instead");}}
async function shareReceipt(){if(navigator.share){try{await navigator.share({title:"Mannu Verification Receipt",text:receipt()});}catch(e){if(e.name!=="AbortError")copyReceipt();}}else copyReceipt();}
function downloadReceipt(){const blob=new Blob([receipt()],{type:"text/plain"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="mannu-verification-receipt.txt";a.click();URL.revokeObjectURL(a.href);toast("receipt downloaded");}

$("#startBtn").onclick=()=>{show(game);render();};
$("#whyBtn").onclick=()=>{$("#whyText").hidden=!$("#whyText").hidden;};
$("#nextBtn").onclick=next;
$("#skipBtn").onclick=skip;
$("#backBtn").onclick=()=>{if(index>0){index--;save();render();}};
$("#saveExitBtn").onclick=()=>{save();show(intro);toast("progress saved on this device");};
$("#shareBtn").onclick=shareReceipt;
$("#copyBtn").onclick=copyReceipt;
$("#downloadBtn").onclick=downloadReceipt;
$("#editBtn").onclick=()=>{index=0;save();show(game);render();};

if(Object.keys(answers).length) $("#startBtn span:first-child").textContent="continue my extremely serious verification";