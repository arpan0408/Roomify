import React from 'react'
import b from "../images/b.jpg"
import c from "../images/c.jpg"
import a from "../images/a.jpg"


function Card() {
  return (
   
<>

<div className="card Card" style={{width: "18rem",height:"22rem"}}>
  
  <img src={b} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Chandran P.G</h5>
    <p className="card-text">Luxurious features and amenities</p>
    <a href="#" className="btn btn-primary">Book Here</a>
  </div>
</div>

<div className="card Card" style={{width: "18rem",height:"22rem"}}>
  <img src={c} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> Title Navra Room</h5>
    <p className="card-text">Affordable and simple.</p>
    <a href="#" className="btn btn-primary">Book Here</a>
  </div>

</div>
<div className="card Card" style={{width: "18rem",height:"22rem"}}>
  <img src={a} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Shyam Hotel</h5>
    <p className="card-text">Spacious and comfortable</p>
    <a href="#" className="btn btn-primary">Book Here</a>
  </div>
</div>
</>

  )
}

export default Card;