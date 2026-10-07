const questions = [
  {chapter:"IDENTITY CHECK",title:"First: pick your actual favorite color.",sub:"Not the aesthetic answer. The one your soul keeps choosing.",key:"favoriteColor",label:"Favorite color",type:"color",options:[["Black","#171717"],["White","#f4f0ea"],["Pink","#ff8fc7"],["Red","#e84b4b"],["Blue","#4f7cff"],["Purple","#9b6cff"],["Green","#4fa66a"],["Yellow","#f4cf55"],["Brown","#8b684d"],["Orange","#ef9145"],["Grey","#8d8d99"],["Other","linear-gradient(135deg,#ff8fc7,#7c6cff,#50d2a0)"]]},
  {chapter:"IDENTITY CHECK",title:"What song owns you right now?",sub:"The one you replay like it owes you money.",key:"song",label:"Current favorite song",type:"text",placeholder:"song — artist"},
  {chapter:"IDENTITY CHECK",title:"Your forever comfort food?",sub:"Bad day. Zero patience. What fixes at least 12% of the problem?",key:"comfortFood",label:"Comfort food",type:"text",placeholder:"type the sacred food"},
  {chapter:"IDENTITY CHECK",title:"Favorite chocolate or sweet?",sub:"Emergency gifting data. Very serious.",key:"sweet",label:"Favorite chocolate / sweet",type:"text",placeholder:"the guaranteed sugar win"},
  {chapter:"TASTE SCAN",title:"Choose your drink allegiance.",sub:"Your default little beverage situation.",key:"drink",label:"Go-to drink",type:"choice",options:["Coffee","Chai / Tea","Cold coffee","Juice","Soft drink","Water like a responsible citizen","Something else"]},
  {chapter:"TASTE SCAN",title:"Which snack disappears first around you?",sub:"This is a judgement-free crime scene.",key:"snack",label:"Favorite snack",type:"text",placeholder:"chips? chocolate? chaos?"},
  {chapter:"TASTE SCAN",title:"Pick a flower. Any flower.",sub:"Useful information for completely non-flower-related reasons.",key:"flower",label:"Favorite flower",type:"choice",options:["Roses","Tulips","Sunflowers","Lilies","Daisies","Baby's breath","I don't care about flowers"]},
  {chapter:"TASTE SCAN",title:"What scent feels most like you?",sub:"Perfume family, candle smell, shampoo aisle… whatever.",key:"scent",label:"Favorite scent",type:"choice",options:["Vanilla / sweet","Floral","Fresh / clean","Fruity","Woody","Citrus","I genuinely don't know"]},
  {chapter:"TASTE SCAN",title:"One movie or show you can always rewatch?",sub:"Even if you know every scene already.",key:"comfortWatch",label:"Comfort movie/show",type:"text",placeholder:"your immortal rewatch"},
  {chapter:"TASTE SCAN",title:"Your current fictional / celebrity weakness?",sub:"No court will see this answer. Probably.",key:"crush",label:"Current celebrity/fictional fave",type:"text",placeholder:"name names"},
  {chapter:"TASTE SCAN",title:"Your go-to ice cream flavor?",sub:"This can prevent future dessert-related disasters.",key:"iceCream",label:"Favorite ice cream",type:"text",placeholder:"flavor / brand / exact order"},
  {chapter:"TASTE SCAN",title:"What’s your default restaurant or cafe order?",sub:"The order someone should know without asking twice.",key:"order",label:"Go-to order",type:"text",placeholder:"your usual order"},
  {chapter:"COMFORT LORE",title:"What kind of weather makes you happiest?",sub:"The world outside = instant mood modifier.",key:"weather",label:"Favorite weather",type:"choice",options:["Rainy","Cold + cloudy","Sunny","Winter sunshine","Thunderstorm","Night breeze","Any weather if I'm indoors"]},
  {chapter:"COMFORT LORE",title:"When you're upset, what actually helps?",sub:"We are banning useless ‘cheer up’ energy.",key:"badDay",label:"Best bad-day rescue",type:"choice",options:["Food","A long call","Space / alone time","Memes + distraction","A hug","Going out","Music","Sleep"]},
  {chapter:"COMFORT LORE",title:"What makes a gift feel REALLY good?",sub:"Not price. The part that makes you go ‘oh… you noticed.’",key:"giftStyle",label:"Best kind of gift",type:"choice",options:["Handmade","Something useful","Something I mentioned once","Food","Jewellery / accessories","An experience / outing","A letter / words","Surprise me completely"]},
  {chapter:"COMFORT LORE",title:"Flowers, food, or handwritten note?",sub:"If someone had to pick just one.",key:"gesture",label:"Favorite gesture",type:"choice",options:["Flowers","Food","Handwritten note","A tiny useful thing","Quality time","Honestly, surprise me"]},
  {chapter:"COMFORT LORE",title:"Perfect birthday treatment?",sub:"Main-character edition. Choose your chaos level.",key:"birthday",label:"Birthday preference",type:"choice",options:["Big surprise","Small close-friends plan","Quiet + meaningful","Dinner / cafe","Trip / outing","Please do not make me the center of attention"]},
  {chapter:"COMFORT LORE",title:"Dream place you'd disappear to for a few days?",sub:"No visa officer is reading this.",key:"destination",label:"Dream escape",type:"text",placeholder:"city, country, beach, mountains…"},
  {chapter:"GIFT INTEL",title:"Gold, silver, or neither?",sub:"Future accessory decisions deserve fewer casualties.",key:"jewellery",label:"Jewellery preference",type:"choice",options:["Gold","Silver","Rose gold","Mixed metals","I barely wear jewellery"]},
  {chapter:"GIFT INTEL",title:"What kind of clothes feel most ‘you’?",sub:"Oversized? cute? minimal? ethnic? chaos?",key:"clothingStyle",label:"Clothing style",type:"text",placeholder:"describe the vibe"},
  {chapter:"GIFT INTEL",title:"Any size someone should definitely remember?",sub:"Clothes, shoes, ring — share what you’re comfortable sharing. If none, just write none.",key:"sizes",label:"Useful sizes",type:"text",placeholder:"shoe / clothing / ring — or none"},
  {chapter:"GIFT INTEL",title:"A brand or shop you almost always like?",sub:"Could be fashion, skincare, books, food — anything.",key:"brand",label:"Favorite brand / shop",type:"text",placeholder:"the safe-bet place"},
  {chapter:"GIFT INTEL",title:"Something you want but keep refusing to buy yourself?",sub:"Extremely suspicious gift-vault question.",key:"wishlist",label:"Secret wishlist item",type:"text",placeholder:"be shameless"},
  {chapter:"CHAOS ROUND",title:"One thing you can NEVER say no to?",sub:"Object, food, plan, person, anything. Expose yourself.",key:"cantSayNo",label:"Can't say no to",type:"text",placeholder:"your fatal weakness"},
  {chapter:"CHAOS ROUND",title:"Tiny thing that annoys you way too much?",sub:"Petty answers receive bonus points.",key:"petPeeve",label:"Pet peeve",type:"text",placeholder:"the small crime"},
  {chapter:"CHAOS ROUND",title:"Your ideal random plan with your favorite person?",sub:"No itinerary committee. Just vibes.",key:"randomPlan",label:"Ideal random plan",type:"choice",options:["Long drive","Street food run","Cafe + yap","Movie night","Shopping","Gaming","Walk + music","Stay in and do absolutely nothing"]},
  {chapter:"FINAL BOSS",title:"What do people always forget about you?",sub:"This machine would like to avoid becoming one of them.",key:"rememberThis",label:"Please remember",type:"textarea",placeholder:"something small but important…"},
  {chapter:"FINAL BOSS",title:"Last one: describe yourself in 3 words.",sub:"Official Mannu checksum. Be dramatic if necessary.",key:"threeWords",label:"Mannu in 3 words",type:"text",placeholder:"word · word · word"}
];

const API_URL="https://liyhjtyadbeozwjtrqqr.supabase.co/functions/v1/mannu-api";
const microcopy=["No pressure. The machine is only judging a little.","Data quality: suspiciously adorable.","Gift clearance is looking promising.","We are definitely not building Mannu lore.","The scanner nodded. Very official.","One more answer added to the classified archives."];
let index=Math.min(Number(localStorage.getItem("mannu_index")||0),questions.length-1);
let answers={};
let sessionId=localStorage.getItem("mannu_session_id")||crypto.randomUUID();
localStorage.setItem("mannu_session_id",sessionId);
function makeToken(){
  const bytes=new Uint8Array(24);crypto.getRandomValues(bytes);
  return Array.from(bytes,b=>b.toString(16).padStart(2,"0")).join("");
}
let reviewToken=localStorage.getItem("mannu_review_token")||makeToken();
localStorage.setItem("mannu_review_token",reviewToken);
let remoteTimer=null;
try{answers=JSON.parse(localStorage.getItem("mannu_answers")||"{}")}catch{answers={}}
const $=s=>document.querySelector(s);
const intro=$("#intro"),game=$("#game"),result=$("#result"),answerArea=$("#answerArea"),stage=$("#questionStage");
function show(screen){[intro,game,result].forEach(x=>x.classList.remove("active"));screen.classList.add("active");window.scrollTo({top:0,behavior:"smooth"})}
function save(){localStorage.setItem("mannu_answers",JSON.stringify(answers));localStorage.setItem("mannu_index",String(index))}
async function saveRemote(completed=false){
  try{
    const res=await fetch(API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
      action:"save",session_id:sessionId,review_token:reviewToken,answers,completed
    })});
    if(!res.ok)throw new Error("save failed");
    return true;
  }catch(e){
    console.error("Mannu remote save failed",e);
    return false;
  }
}
function queueRemoteSave(){
  clearTimeout(remoteTimer);
  remoteTimer=setTimeout(()=>saveRemote(false),450);
}
function privateReviewLink(){
  const hash=new URLSearchParams({session:sessionId,token:reviewToken}).toString();
  return location.origin+"/review.html#"+hash;
}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),1700)}
function esc(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function animateStage(direction="next"){stage.classList.remove("swap-next","swap-back");void stage.offsetWidth;stage.classList.add(direction==="back"?"swap-back":"swap-next")}
function selectAndMaybeAdvance(key,value,button,grid){answers[key]=value;save();queueRemoteSave();grid.querySelectorAll(".choice,.color-choice").forEach(x=>x.classList.remove("selected"));button.classList.add("selected")}
function render(direction){
  const q=questions[index];
  $("#chapterLabel").textContent=q.chapter;
  $("#progressLabel").textContent=String(index+1).padStart(2,"0")+" / "+questions.length;
  $("#progressBar").style.width=((index+1)/questions.length*100)+"%";
  $("#questionNumber").textContent="CASE "+String(index+1).padStart(2,"0");
  $("#questionTitle").textContent=q.title;
  $("#questionSub").textContent=q.sub;
  $("#microcopy").textContent=microcopy[index%microcopy.length];
  $("#backBtn").disabled=index===0;$("#backBtn").style.opacity=index===0?".35":"1";
  answerArea.innerHTML="";
  if(direction)animateStage(direction);

  if(q.type==="text"||q.type==="textarea"){
    const el=document.createElement(q.type==="textarea"?"textarea":"input");
    el.className="text-input";el.placeholder=q.placeholder||"type here";el.value=answers[q.key]||"";
    if(q.type==="text")el.type="text";
    el.autocomplete="off";
    el.addEventListener("input",()=>{answers[q.key]=el.value;save();queueRemoteSave()});
    el.addEventListener("keydown",e=>{if(e.key==="Enter"&&q.type==="text"){e.preventDefault();next()}});
    answerArea.appendChild(el);setTimeout(()=>el.focus({preventScroll:true}),220);
  }else if(q.type==="choice"){
    const grid=document.createElement("div");grid.className="choice-grid";
    q.options.forEach(opt=>{const b=document.createElement("button");b.className="choice"+(answers[q.key]===opt?" selected":"");b.textContent=opt;b.setAttribute("aria-pressed",answers[q.key]===opt?"true":"false");
      b.onclick=()=>{selectAndMaybeAdvance(q.key,opt,b,grid);grid.querySelectorAll(".choice").forEach(x=>x.setAttribute("aria-pressed",x===b?"true":"false"))};grid.appendChild(b)});
    answerArea.appendChild(grid);
  }else if(q.type==="color"){
    const grid=document.createElement("div");grid.className="color-grid";
    q.options.forEach(([name,color])=>{const b=document.createElement("button");b.className="color-choice"+(answers[q.key]===name?" selected":"");b.style.background=color;b.setAttribute("aria-label",name);b.setAttribute("aria-pressed",answers[q.key]===name?"true":"false");b.innerHTML="<span>"+name+"</span>";
      b.onclick=()=>{selectAndMaybeAdvance(q.key,name,b,grid);grid.querySelectorAll(".color-choice").forEach(x=>x.setAttribute("aria-pressed",x===b?"true":"false"))};grid.appendChild(b)});
    answerArea.appendChild(grid);
  }
}
async function next(){
  const q=questions[index];
  if(!answers[q.key]||!String(answers[q.key]).trim()){toast("this one needs an answer 👀");return}
  const ok=await saveRemote(false);
  if(!ok){toast("couldn’t save yet — check connection");return}
  if(index<questions.length-1){index++;save();render("next")}else finish();
}
else finish()}
async function finish(){
  save();
  const ok=await saveRemote(true);
  if(!ok){toast("couldn’t seal the file yet — check connection");return}
  buildPassport();show(result);
}
function code(){let x=questions.map(q=>answers[q.key]||"").join("|"),h=0;for(let i=0;i<x.length;i++)h=((h<<5)-h+x.charCodeAt(i))|0;return"MN-"+Math.abs(h).toString(36).toUpperCase().slice(0,6).padStart(6,"0")}
function buildPassport(){const grid=$("#passportGrid");grid.innerHTML="";questions.forEach(q=>{const v=answers[q.key];if(!v||v==="—")return;const d=document.createElement("div");d.className="passport-item";d.innerHTML="<span>"+esc(q.label)+"</span><strong>"+esc(v)+"</strong>";grid.appendChild(d)});$("#passportCode").textContent=code()}
function receipt(){const lines=["✦ MANNU VERIFICATION RECEIPT","Status: VERIFIED","Passport: "+code(),"","— CLASSIFIED MANNU LORE —"];questions.forEach(q=>{const v=answers[q.key];if(v&&v!=="—")lines.push(q.label+": "+v)});lines.push("","Private review link: "+privateReviewLink(),"","Authenticated by vibes. Please deliver the alleged gift accordingly.");return lines.join("\n")}
async function copyReceipt(){try{await navigator.clipboard.writeText(receipt());toast("copied to clipboard")}catch{toast("copy failed — use share instead")}}
async function shareReceipt(){if(navigator.share){try{await navigator.share({title:"Mannu Verification Receipt",text:receipt()})}catch(e){if(e.name!=="AbortError")copyReceipt()}}else copyReceipt()}
function downloadReceipt(){const blob=new Blob([receipt()],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="mannu-verification-receipt.txt";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),0);toast("receipt downloaded")}
$("#startBtn").onclick=()=>{show(game);render()};
$("#whyBtn").onclick=()=>{$("#whyText").hidden=!$("#whyText").hidden};
$("#nextBtn").onclick=next;
$("#backBtn").onclick=()=>{if(index>0){index--;save();queueRemoteSave();render("back")}};
$("#saveExitBtn").onclick=()=>{save();show(intro);toast("progress saved on this device")};
$("#shareBtn").onclick=shareReceipt;$("#copyBtn").onclick=copyReceipt;$("#downloadBtn").onclick=downloadReceipt;
$("#editBtn").onclick=()=>{index=0;save();show(game);render("back")};
document.addEventListener("keydown",e=>{if(!game.classList.contains("active"))return;if(e.key==="ArrowLeft"&&index>0){index--;save();render("back")}});
if(Object.keys(answers).length)$("#startBtn span:first-child").textContent="continue my extremely serious verification";