function AnimatedCard({imageUrl, sunColor}) {
  return (
    <div className={`card ${sunColor}`}>
      <div className="imgBx">
        <img src={imageUrl} />
      </div>
      <div className="contentBx">
        <h2>Jordan max pro</h2>
        <div className="size">
          <h3>Size :</h3>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
        </div>
        <div className="color">
          <h3>Color :</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="">Buy Now</a>
      </div>
    </div>
  )
}

export default AnimatedCard;