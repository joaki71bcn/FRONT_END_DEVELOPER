


const sacarPopup = () =>{
document.querySelector('#lightboxContainer').style.display = 'block';
};

const ocultaPopup = () =>{
document.querySelector('#lightboxContainer').style.display = 'none';
};

document.querySelector('button').addEventListener('click',sacarPopup);

document.querySelector('#ocultar').addEventListener('click',ocultaPopup);
