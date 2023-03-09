let  container = document.getElementById('box-container');
let audio = document.querySelector("audio")
for (let i = 0; i < 484; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener("mouseenter",function(){
    audio.play()
    box.style.backgroundColor=getRandomHexCode()
    box.style.transition = "0s"
    box.style.boxShadow = "0px 0px 27px  " + getRandomHexCode();
    box.style.opacity = "40%"
    // box.style.boxShadow = "0 3px 10px 10px" 
    })
    
    box.addEventListener("mouseout",function(){
        box.style.backgroundColor =" rgba(3, 3, 165,0.5)"
        box.style.transition = "1s"
        box.style.opacity = "100%"
        box.style.boxShadow = "" 
    })   
   
}
function getRandomHexCode() {
    let hexCode = "#";
    let characters = "0123456789ABCDEF";
  
    for (let i = 0; i < 6; i++) {
      hexCode += characters[Math.floor(Math.random() * 16)];
    }
  
    return hexCode;
  }
  
