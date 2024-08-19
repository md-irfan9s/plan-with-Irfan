import { useState } from "react";


function Card({id, name, info, image, price, removeTour}) {
    let newstyle = {
        color: "white",
    }
    const [readmore, setreadmore] = useState((false));
    // console.log(readmore);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setreadmore(!readmore);
    }
   
    return (
        <div className="card">
            <img src= {image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className = "read-more" onClick = {readmoreHandler}>
                         {readmore ? `Show less`: `Read more`}
                    </span>
                </div>
            </div>
            
            <button className="btn-red" onClick={() => removeTour(id)}  style={newstyle}>
                Not Intrested
            </button>
        </div>
    );



}

export default Card;