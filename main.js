const inputPass = document.querySelector('.Password');
console.log(inputPass.type);
const image = document.querySelector('.-visibility-button') ;
let visibility = false;
function onClickPassword() {
   image.hidden = !image.hidden;
}
function isVisible() {
    if (!visibility) {
        image.src = './img/001-invisible.svg';
        visibility = true;
        inputPass.type = 'text';
        console.log(inputPass.type);
    }
    if (visibility) {
        image.src = 'img/002-visibility-button.svg';
        visibility = false;
        inputPass.type = 'password';
    }
}