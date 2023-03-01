document.getElementById("titulacion").innerHTML = "Ivan Cors";

let toggle=document.getElementById("toggle");
 let label_toggle=document.getElementById("label_toggle");
toggle.addEventListener ("change",(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle("noche")
    if (estado == true) {
        label.innerHTML ='<i class="fa-light fa-moon"></i> ';
      } else {
        label.innerHTML ='<i class="fa-solid fa-moon"></i>';
      }
 
})
