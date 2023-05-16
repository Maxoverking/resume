import { gsap } from 'gsap';

const social_checkbox = document.querySelector('.social_check');
const contacts_checkbox = document.querySelector('.contacts_check');
const socialBtn = document.querySelector('.social_btn');
const contactsBtn = document.querySelector('.contacts_btn');
const social_media_btn = document.querySelectorAll('.social_media_btn');
const contacts_media_btn = document.querySelectorAll('.contacts_media_btn');

social_checkbox.addEventListener('change', () =>
  btnTransition(social_checkbox, socialBtn, socialBtnAnimation)
);

contacts_checkbox.addEventListener('change', () =>
  btnTransition(contacts_checkbox, contactsBtn, contactsBtnAnimation)
);

function btnTransition(checkbox, btn, animationFn) {
  const { checked } = checkbox;
  const positions = animationFn(checked);

  gsap.to(btn, {
    width: checkbox.checked ? '50px' : '80px',
    height: checkbox.checked ? '50px' : '80px',
    duration: 0.2,
  });
  animationFn();

  const btns =
    checkbox === social_checkbox ? social_media_btn : contacts_media_btn;

  positions.forEach((position, index) => {
    gsap.to(btns[index], {
      x: position.x,
      y: position.y,
      duration: 0.4,
      delay: 0.2,
      stagger: 1,
    });
  });
}

function socialBtnAnimation(checked) {
  return [
    { x: checked ? -10 : 0, y: checked ? -60 : 0 },
    { x: checked ? 36 : 0, y: checked ? -46 : 0 },
    { x: checked ? 56 : 0, y: 0 },
    { x: checked ? 36 : 0, y: checked ? 46 : 0 },
    { x: checked ? -10 : 0, y: checked ? 60 : 0 },
  ];
}

function contactsBtnAnimation(checked) {
  return [
    { x: checked ? 4 : 0, y: checked ? -60 : 0 },
    { x: checked ? 4 : 0, y: checked ? 60 : 0 },
  ];
}
