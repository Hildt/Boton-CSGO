function audio (e) {
    var reproducir = new Audio();
    reproducir.src = e;
    reproducir.play();
}
window.addEventListener("load", function() {
    document.querySelectorAll("body button")[0].addEventListener("click", function() {
        audio("audios/explode3.wav")
        
        
        document.querySelector('img#HE').style.opacity = 1;
        setInterval(function () {document.querySelector('img#HE').style.opacity = 0}, 2500);
    })
    false
}, false);

window.addEventListener("load", function() {
    document.querySelectorAll("body button")[1].addEventListener("click", function() {
        audio("audios/sg_explode.wav")
        
        document.querySelector('img#Smoke').style.opacity = 1;
        setInterval(function () {document.querySelector('img#Smoke').style.opacity = 0}, 5500);
    })
    false
}, false);

window.addEventListener("load", function() {
    document.querySelectorAll("body button")[2].addEventListener("click", function() {
        audio("audios/flashbang_explode2.wav")
        
        document.querySelector('img#Flash').style.opacity = 1;
        setInterval(function () {document.querySelector('img#Flash').style.opacity = 0}, 1000);
    })
    false
}, false);

window.addEventListener("load", function() {
    document.querySelectorAll("body button")[3].addEventListener("click", function() {
        audio("audios/molotov_detonate_3.wav")

        document.querySelector('img#Incendiary').style.opacity = 1;
            setInterval(function () {document.querySelector('img#Incendiary').style.opacity = 0}, 1500);
    
    })
    false
}, false);




