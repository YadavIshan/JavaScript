'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closedBtnModel = document.querySelector('.close-modal');
const openBtnModel = document.querySelectorAll('.show-modal');
//If there are multiple elements with same selector and we are using querySelector insted of
//querySelectorAll then only first element will be selected.

const openModal = () => {
  //we are not passing .hidden since it is a class because we use that to select
  //if you want to remove mulitple class then use .remove('first' , 'second' ,'etc')
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openBtnModel.length; i++) {
  openBtnModel[i].addEventListener('click', openModal);
}
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closedBtnModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//keyboard event are global event , and we need to apply them on whole document and not specific element
/* There are three types of keyboard listener
    1) keyup -> when we lift our finger from keyboard.
    2) keydown -> Fired as soon as we hit the key. 
    3) keypress -> Fires when we are continuously pressing key
*/
document.addEventListener('keydown', function (button) {
  if (button.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
