/* Enter the code to remove the main node element under this comment */
main.remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('H1');
document.body.appendChild(newHeader);
newHeader.setAttribute('id','victory');
newHeader.innerHTML='Abcd is the champion!';
