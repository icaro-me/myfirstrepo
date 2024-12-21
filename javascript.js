var peoples = 13;
function liked(option){
    var valor = document.getElementById(option);
    if(option==1){ 
        peoples += 1
        alert("thank you")
        valor.innerHTML = peoples.toString() + " peoples liked this"
    };
    
};
     
function nonLiked(option){
    var valor = document.getElementById(option);
    if (option==1){
        peoples -= 1
        alert("do you dare?") 
        valor.innerHTML = peoples.toString() + " peoples liked this"
   };
   
}



function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}
function comentei() {
    const comentb = document.getElementById("cometi").value;
    const nameuser = document.getElementById("nameuse").value;
    var father = document.getElementById("minhaDiv");
    var titulo = document.createElement("h4");
    titulo.textContent = nameuser;
    var comentario = document.createElement("h6");
    comentario.textContent = comentb;
    var miniatura = document.createElement("img");
    miniatura.src = "anon.jpg"
    miniatura.width = 32;
    miniatura.align= "Left";
    var br = document.createElement("br");
    father.appendChild(br);
    father.appendChild(miniatura);
    father.appendChild(titulo);
    titulo.appendChild(comentario);
}

//var texto  = document.createTextNode(comentb);