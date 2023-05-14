import { gsap } from 'gsap';

const box = document.querySelectorAll('.btn-download');

console.log('🚀  box:', box);

gsap.to(box, {
  x: 100,
  y: 100,
  // background:"red",
  //   resize: 200,
  duration: 2,
  delay: 0.5,
  //   repeat: 5,
  //   repeatDelay: 2,
  stagger: 1,
  //   paused:true,
  onComplete: function (params) {
    console.log('object');
  },
});
