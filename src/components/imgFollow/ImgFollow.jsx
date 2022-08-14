import { useEffect } from 'react'
import ClaimImg from '../../assets/ai.png'

const ImgFollow = () => {
  // FACE FOLLOW
  useEffect(() => {
    const constrain = 850;
    const mouseOverContainer = document.getElementById('mainClaim');
    const ex1Layer = document.getElementById('mainImg');

    const transforms = (x, y, el) => {
      const box = el.getBoundingClientRect();
      const calcX = -(y - box.y - (box.height / 2)) / constrain;
      const calcY = (x - box.x - (box.width / 2)) / constrain;

      return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    };

    const transformElement = (el, xyEl) => {
      // eslint-disable-next-line no-param-reassign
      el.style.transform = transforms(...xyEl);
    };

    mouseOverContainer.onmousemove = (e) => {
      const xy = [e.clientX, e.clientY];
      const position = xy.concat([ex1Layer]);

      window.requestAnimationFrame(() => {
        transformElement(ex1Layer, position);
      });
    };
  });
  // FACE FOLLOW FIN
  return (
    <img src={ ClaimImg } id='mainImg' alt='RaulBHG'/>
  )
}

export default ImgFollow