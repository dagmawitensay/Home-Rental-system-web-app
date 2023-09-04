import React, { useEffect, useState } from "react";
import homeService from "../../services/home.service";

export default function Body(){
    const [content, setContent] = useState("");
    const user = JSON.parse(localStorage.getItem("user"))
    const lesserId = user.user.id;
    console.log(user)
    useEffect(() => {
        homeService.getAllLesserHouses(lesserId).then(
            (response) => {
                console.log(response.data)
                setContent(response.data);
            }, (error) => {
                const _content = (error.response && error.response.data && error.response.data.message) || error.toString();
                setContent(_content
                )
                
            }
        )
    }, [])
    return (<div className="m-auto">
        
    </div>)
}