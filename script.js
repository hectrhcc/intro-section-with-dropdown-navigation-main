document.addEventListener('DOMContentLoaded', function() {
let hamburguesa = document.querySelector(".hamburger-menu"); //no olvides el punto
let nav = document.getElementsByTagName("nav")[0];
console.log(hamburguesa);
hamburguesa.addEventListener('click',()=>{
    hamburguesa.style.display='none';
    nav.style.display='block';
});

let cerrar = document.querySelector(".close-img-container");
cerrar.addEventListener("click", ()=>{
    const screenSize=window.innerWidth;
    if(screenSize>=768){
        nav.style.display='block';
    }else{
        nav.style.display='none';
    }
    
    hamburguesa.style.display='block';

})

const featuresBtn = document.querySelector('#features-btn');
const featuresUl = document.querySelector('.features-ul')
const companyBtn = document.querySelector('#company-btn');
const companyUl = document.querySelector('.company-ul');
const featuresBtnArrow = document.querySelector('#features-btn-arrow')
const companyBtnArrow = document.querySelector('#company-btn-arrow')
/* funciona pero al segundo click
featuresBtn.addEventListener('click', ()=>{
    if(featuresUl.style.display=='none'){
        featuresUl.style.display='block';
    }
    else{
        featuresUl.style.display='none';
    }

})

companyBtn.addEventListener('click', () => {
    if (companyUl.style.display === 'none') {
        companyUl.style.display = 'block';
        featuresUl.style.display = 'none'; // Oculta el menú de Features si está abierto
    } else {
        companyUl.style.display = 'none';
    }
});
*/

/* aqui me confundi con el submenu que la tienen 2 elementos 
y eso complica todo ademas enreda el despligue que es independiente
let sub = document.querySelectorAll('.submenu-btn');
let feat = document.querySelector('.features-ul');
let compa = document.querySelector('.company-ul');
for(let i=0; i<sub.length;i++){
sub[i].addEventListener('click', ()=>{
sub[i].style.display='block';
if(feat.style.display=='none'){
    feat.style.display='block';
}
else{
    feat.style.display='none';
}
if(compa.style.display=='none'){
    compa.style.display='block';
}
else{
    compa.style.display='none';
}
})
}
*/
let featuresVisible = false;
    let companyVisible = false;

    featuresBtn.addEventListener('click', () => {
        if (!featuresVisible) {
            featuresUl.style.display = 'block';
            companyUl.style.display = 'none';
            featuresVisible = true;
            companyVisible = false;
    featuresBtnArrow.style.transition = 'transform 0.3s ease'
  featuresBtnArrow.style.transform = (featuresBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
        } else {
            featuresUl.style.display = 'none';
            featuresVisible = false;
            featuresBtnArrow.style.transition = 'transform 0.3s ease'
            featuresBtnArrow.style.transform = (featuresBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
// featuresUl.style.display = (featuresUl.style.display === 'block') ? 'none' : 'block';
    });

    companyBtn.addEventListener('click', () => {
        if (!companyVisible) {
            companyUl.style.display = 'block';
            featuresUl.style.display = 'none';
            companyVisible = true;
            featuresVisible = false;
            companyBtnArrow.style.transition = 'transform 0.3s ease'
            companyBtnArrow.style.transform = (companyBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
        } else {
            companyUl.style.display = 'none';
            companyVisible = false;
            companyBtnArrow.style.transition = 'transform 0.3s ease'
            companyBtnArrow.style.transform = (companyBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
//companyUl.style.display = (companyUl.style.display === 'block') ? 'none' : 'block';
    });
});