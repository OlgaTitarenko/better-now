const inputPass = document.querySelector('.Password');

const image = document.querySelector('.-visibility-button') ;
let visibility = false;
function onClickPassword() {
   image.hidden = !image.hidden;
}
function isVisible() {
    if (!visibility) {
        image.src = './img/001-invisible.svg';
        visibility = true;
        inputPass.type = "text";
    } else {
        image.src = 'img/002-visibility-button.svg';
        visibility = false;
        inputPass.type = "password";
    }
}