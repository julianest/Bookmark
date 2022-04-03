const data = [
    {
        id: 1,
        img:"./images/illustration-features-tab-1.svg",
        alt:"pantalla1",
        h:"Bookmark in one click",
        p:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        id: 2,
        img:"./images/illustration-features-tab-2.svg",
        alt:"pantalla2",
        h:"Intelligent search",
        p:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        id: 3,
        img:"./images/illustration-features-tab-3.svg",
        alt:"pantalla3",
        h:"Share your bookmarks",
        p:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }    
]
//------obtencion de datos------//
const template = document.getElementById("template");
const btn1 = document.getElementById("btn1sec2");
const btn2 = document.getElementById("btn2sec2");
const btn3 = document.getElementById("btn3sec2");

//------Pantalla inicial ------//
const result1 = data.find(element=> element.id == 1);

//------Obtencion de Eventos----//
btn1.addEventListener("click", ()=>{
    crearTemplate(result1);
    console.log(result1);
});
btn2.addEventListener("click", ()=>{
    const result2 = data.find(element=> element.id == 2); 
    crearTemplate(result2);
    console.log(result2);
});
btn3.addEventListener("click", ()=>{
    const result3 = data.find(element=> element.id == 3); 
    crearTemplate(result3);
    console.log(result3);
});

//-----Generador del template-----//
function crearTemplate (datos){
    const {img, alt, h, p}=datos;
    template.innerHTML= 
    `
<section class="sec3">
    <article class="sec3Art">
    <div>
        <img src="${img} " class="pantalla2" alt="${alt} ">
        <div class="semi-circulo-2"></div>
    </div>
    </article>
    <article class="sec3Art">
    <div style="margin-left:10%">
        <h2>${h}</h2>
        <p>${p} </p>
    </div>
    <div>
        <button type="button" class="btn btn-primary" style="margin-left:10%" id="btnAcord">More info</button>
    </div>
    </article>
</section>
`
};


//-----Inicializacion de la pantalla inicial-----//
(function(){
    crearTemplate(result1)
})();