import "./Slider.css"
import "./Slider.js"
import React from 'react';

function Slider() {
  return (
    <div class="image-container">
    <div class="slider-wrapper">
      <button id="prev-slide" class="slide-button material-symbols-rounded">
      ←
      </button>
      <ul class="image-list">
       <li><img class="image-item" src="/images/1.png" alt="img-1" /></li>
       <li><img class="image-item" src="/images/2.png" alt="img-2" /></li>
       <li><img class="image-item" src="/images/3.png" alt="img-3" /></li>
       <li><img class="image-item" src="/images/4.png" alt="img-4" /></li>
       <li><img class="image-item" src="/images/5.png" alt="img-5" /></li>
       <li><img class="image-item" src="/images/6.png" alt="img-6" /></li>
       <li><img class="image-item" src="/images/7.png" alt="img-7" /></li>
       <li><img class="image-item" src="/images/8.png" alt="img-8" /></li>
       <li><img class="image-item" src="/images/9.png" alt="img-9" /></li>
       <li><img class="image-item" src="/images/1.png" alt="img-10" /></li>
      </ul>
      <button id="next-slide" class="slide-button material-symbols-rounded">
      →
      </button>
    </div>
    <div class="slider-scrollbar">
      <div class="scrollbar-track">
        <div class="scrollbar-thumb"></div>
      </div>
    </div>
  </div>
  )
}

export default Slider;