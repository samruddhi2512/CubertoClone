var cursor= document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove",function(dets){
    cursor.style.left= dets.x +"px"
    cursor.style.top= dets.y +"px"

})