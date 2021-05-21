const colorCode = document.querySelector('.colorCode');
const btn= document.querySelector('.btn');

function generateColor(){
    let random = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor="#" + random;
    colorCode.innerHTML="#"+ random; 
}

btn.addEventListener('click',generateColor);

