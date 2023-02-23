let  container = document.getElementById('box-container');
let audio = document.querySelector("audio")
for (let i = 0; i < 484; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener("mouseenter",function(){
    box.style.backgroundColor=getRandomHexCode()
    box.style.transition = "0s"
    box.style.shadow = "0px 0px 27px 3.5px " + getRandomHexCode();
    box.style.opacity = "40%"
    audio.play()
    })
    box.addEventListener("mouseout",function(){
        box.style.backgroundColor =" rgb(3, 3, 165)"
        box.style.transition = "3s"
        box.style.opacity = "100%"
        
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
  
