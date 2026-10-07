const API_URL="https://liyhjtyadbeozwjtrqqr.supabase.co/functions/v1/mannu-api";
const labels=[["favoriteColor","Favorite color"],["song","Current favorite song"],["comfortFood","Comfort food"],["sweet","Favorite chocolate / sweet"],["drink","Go-to drink"],["snack","Favorite snack"],["flower","Favorite flower"],["scent","Favorite scent"],["comfortWatch","Comfort movie/show"],["crush","Current celebrity/fictional fave"],["iceCream","Favorite ice cream"],["order","Go-to order"],["weather","Favorite weather"],["badDay","Best bad-day rescue"],["giftStyle","Best kind of gift"],["gesture","Favorite gesture"],["birthday","Birthday preference"],["destination","Dream escape"],["jewellery","Jewellery preference"],["clothingStyle","Clothing style"],["sizes","Useful sizes"],["brand","Favorite brand / shop"],["wishlist","Secret wishlist item"],["cantSayNo","Can't say no to"],["petPeeve","Pet peeve"],["randomPlan","Ideal random plan"],["rememberThis","Please remember"],["threeWords","Mannu in 3 words"]];
const params=new URLSearchParams(location.hash.slice(1));
const session=params.get("session"),token=params.get("token");
const loading=document.querySelector("#loading"),content=document.querySelector("#reviewContent");
let entries=[],i=0,response=null;

function fail(message){
  loading.innerHTML='<div class="kicker">PRIVATE GIFT-KEEPER FILE</div><h1>Can’t open<br><em>this dossier.</em></h1><p class="lede">'+message+'</p>';
}
function render(){
  const [key,label]=entries[i];
  document.querySelector("#reviewIndex").textContent=String(i+1).padStart(2,"0")+" / "+String(entries.length).padStart(2,"0");
  document.querySelector("#reviewQuestion").textContent=label;
  document.querySelector("#reviewAnswer").textContent=String(response.answers[key]??"");
  document.querySelector("#prevBtn").disabled=i===0;
  document.querySelector("#nextReviewBtn").disabled=i===entries.length-1;
  document.querySelector("#nextReviewBtn span:first-child").textContent=i===entries.length-1?"end of file":"next";
}
async function load(){
  if(!session||!token){fail("This review link is incomplete.");return}
  try{
    const r=await fetch(API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"review",session_id:session,review_token:token})});
    if(!r.ok){fail("The link is invalid or no longer matches this file.");return}
    const body=await r.json();response=body.response;
    entries=labels.filter(([key])=>response.answers?.[key]!==undefined&&String(response.answers[key]).trim());
    if(!entries.length){fail("The file exists, but no answers have been saved yet.");return}
    document.querySelector("#reviewStatus").textContent=response.completed?"completed dossier":"in-progress dossier";
    document.querySelector("#reviewUpdated").textContent="updated "+new Date(response.updated_at).toLocaleString();
    loading.hidden=true;content.hidden=false;render();
  }catch{fail("Couldn’t reach the private file. Try again when you’re online.")}
}
document.querySelector("#prevBtn").onclick=()=>{if(i>0){i--;render()}};
document.querySelector("#nextReviewBtn").onclick=()=>{if(i<entries.length-1){i++;render()}};
document.addEventListener("keydown",e=>{if(e.key==="ArrowLeft"&&i>0){i--;render()}if(e.key==="ArrowRight"&&i<entries.length-1){i++;render()}});
load();