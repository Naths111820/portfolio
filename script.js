// typing text
const text="Future Web Developer";
let i=0;
function type(){
 if(i<text.length){
   document.querySelector(".typing").textContent+=text.charAt(i);
   i++;
   setTimeout(type,80);
 }
}
type();

// dark mode
document.getElementById("modeToggle").onclick=()=>{
 document.body.classList.toggle("dark");
};

// scroll reveal
function reveal(){
 document.querySelectorAll(".reveal").forEach(el=>{
   const top=el.getBoundingClientRect().top;
   if(top<window.innerHeight-100){
     el.classList.add("active");
   }
 });
}
window.addEventListener("scroll",reveal);
reveal();