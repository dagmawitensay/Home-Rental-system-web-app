import React ,{ useEffect, useState } from "react";
import axios from "axios";
import Card from "../../screens/common/card";


const Access_Key = process.env.REACT_APP_Access_Key


export default function HomeListing() {
    const [no, setPage] = useState(1);
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [res, setRes] = useState([]);
    console.log(Access_Key)
    useEffect(() => {
      axios(`https://api.unsplash.com/search/photos?page=${no}&query=homes&client_id=${Access_Key}&per_page=12`)
        .then(response => {
          console.log(response.data.results);
          setRes(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
      // Cleanup function if needed
      // return () => {
      //   // Cleanup logic
      // };
    }, [no]);
  
    return (
      <div className="row" id="options">
        {res.map(img => (
          <Card
            key={img.id}
            id={img.id}
            subCity={img.alt_description}
            size={img.width}
            src={img.urls.small}
            price="$200"
            imageId="1"
          />
        ))}
        <div className="d-flex justify-content-center">
            <button className="btn btn-secondary" disabled={prevDisabled} style={{width: '25%'}} onClick={() => {
                setNextDisabled(false)
                if (no == 2) {
                  setPrevDisabled(true);  
                }
                setPage(no - 1)
                }}>Prev</button>
            <span className="mx-5">Page {no}</span>
            <button className="btn btn-secondary" style={{width: '25%'}}  disabled={nextDisabled} onClick={()=> {
                setPrevDisabled(false) 
                if (no == res.length) {
                    setNextDisabled(true)
                }
                setPage(no + 1)}}
                >Next</button>
        </div>
      </div>
    );
  }
 
const homes = [
    {
       src: '../../Foo/Home/Rectangle 11.jpg',
       price: '',
       imageId: 1,
       id: 1, 
    },
    {
        src: '../../Foo/Home/Rectangle 12.jpg',
        price: 100,
        imageId: 2,
        id: 2
    },
    {
        src: '../../Foo/Home/Rectangle 13.jpg',
        price: 200,
        imageId: 3,
        id: 3
    },
    {
        src: '../../Foo/Home/Rectangle 24.jpg',
        price: 300,
        imageId: 3,
        id: 4
    },
    {
        src: '../../Foo/Home/Rectangle 25.jpg',
        price: 400,
        imageId: 4,
        id: 5
    }
]

