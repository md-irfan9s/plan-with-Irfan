import { useState } from "react";
import Card from "./Card";

function Tours({tours, removeTour}) {

    const [newstyle, newMode] = useState({
        backgroundColor : "white",
        color : "black"
    });

    const [btntext, btnNewtext] = useState("Switch Dark Mode");

    function onSwitchHandler() {
        if(newstyle.color === "white") {
            newMode({
                backgroundColor : "white",
                color : "black"
            })
            btnNewtext("Switch Dark Mode");
            
        }

        else{
            newMode({
                backgroundColor : "black",
                color : "white"
            })
            btnNewtext("Switch light Mode");

        }
    }

    // console.log(Mode);

    
    return (
        <div className="container" style={newstyle}>
            <div className="newTitle">
                <h2 className="title">Tour With Irfan</h2>
                
            </div>
            <button className="btn-switch" onClick={onSwitchHandler}>{btntext}</button>

            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card key = {tour.id} {...tour} removeTour = {removeTour} style={newstyle}></Card>
                    })
                }
            </div>
        </div>
    );




}

export default Tours;