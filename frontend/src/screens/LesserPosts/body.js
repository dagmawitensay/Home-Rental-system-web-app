import React, { useEffect, useState } from "react";
import homeService from "../../services/home.service";
import Card from "../common/card";


export default function Body(){
    const [content, setContent] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"))
    const lesserId = user.user.id;
    useEffect(() => {
        homeService.getAllLesserHouses(lesserId).then(
            (response) => {
                console.log("on lessser house boyd")
                console.log(response)
                setContent(response);
            }, (error) => {
                
                const _content = (error.response && error.response.data && error.response.data.message) || error.toString();
                setContent([])
             
            }
        )
    }, [])
    return (<div className="m-auto row" style={{width: '80%'}}>
        
        {content.map((house) => {
            return (
              <Card
                key={house.id}
                id={house.id}
                subCity={house.Sub_City}
                Size={house.Size}
                src={house.Home_Photo.Door}
                price={`${house.Price}`}
                imageId={house.id}
              />
            );
        })}
    </div>)
}