let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

document.querySelector('#loginbtn').onclick = () => {
    document.querySelector('.login-form').classList.toggle('active');
}

document.querySelector('#closeloginform').onclick = () => {
    document.querySelector('.login-form').classList.remove('active');
}

function toggleText() {
    var textElement = document.getElementById('hidden-text');
    var buttonText = document.getElementById('read-more-button');

    if (textElement.style.display === 'none' || textElement.style.display === '') {
        textElement.style.display = 'block';
        buttonText.innerText = 'Voir moins';
    } else {
        textElement.style.display = 'none';
        buttonText.innerText = 'Voir plus';
    }
}
