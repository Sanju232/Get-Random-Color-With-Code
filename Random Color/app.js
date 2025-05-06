const colorCode=document.getElementById("color-code");
const btn=document.getElementById('btn');

function getRandomColor(){
    let num=Math.floor(Math.random()*16777215).toString(16);
    let colorCode=("#"+num);
    console.log(colorCode);
    document.body.style.backgroundColor=colorCode;
    document.getElementById("color-code").innerHTML=colorCode;

}

btn.addEventListener('click',()=>{
    getRandomColor();
})
getRandomColor();
