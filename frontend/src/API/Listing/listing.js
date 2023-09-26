import React ,{ useEffect, useState } from "react";
import axios from "axios";
import Card from "../../screens/common/card";
import { useNavigate } from "react-router";


const Access_Key = process.env.REACT_APP_Access_Key


export default function HomeListing() {
    const [no, setPage] = useState(1);
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [res, setRes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      axios(`http://localhost:3336/house/`)
        .then((response) => {
          console.log(response.data)
          setRes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // Cleanup function if needed
      // return () => {
      //   // Cleanup logic
      // };
    }, [no]);

    const handleClick = (id) => {
      navigate(`/properties/${id}`);
    
    }
  
    return (
      <div className="row" id="options">
        {res.map((home) => (
          <Card
            key={home.id}
            id={home.id}
            subCity={home.Sub_City}
            size={home.Size}
            src={home.Home_Photo.Door}
            price={home.Price}
            imageId="1"
            onClick={() => {handleClick(home.id)}}
          />
        ))}
        {/* <div className="d-flex justify-content-center">
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
        </div> */}
      </div>
    );
  }
 
// const homes = [
//     {
//        src: '../../Foo/Home/Rectangle 11.jpg',
//        price: '',
//        imageId: 1,
//        id: 1, 
//     },
//     {
//         src: '../../Foo/Home/Rectangle 12.jpg',
//         price: 100,
//         imageId: 2,
//         id: 2
//     },
//     {
//         src: '../../Foo/Home/Rectangle 13.jpg',
//         price: 200,
//         imageId: 3,
//         id: 3
//     },
//     {
//         src: '../../Foo/Home/Rectangle 24.jpg',
//         price: 300,
//         imageId: 3,
//         id: 4
//     },
//     {
//         src: '../../Foo/Home/Rectangle 25.jpg',
//         price: 400,
//         imageId: 4,
//         id: 5
//     }
// ]

