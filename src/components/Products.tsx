import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=28")
      .then((res) => setData(res.data.recipes))
  }, []);

  console.log(data)
  

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between gap-4">
        {data.map((item) => (
        <div key={item.id} className="text-white flex flex-col h-[530px] rounded-lg w-auto bg-[#221f1f] hover:shadow-lg hover:shadow-red-400 duration-300 ease-in">
            <img src={item.image} className="h-[360px] rounded-lg object-contain"/>
            <div className="p-4">
                <h2 className="text-2xl">{item.name}</h2>
                <p>difficulty: {item.difficulty}</p>
                <Rating name="read-only" value={Math.floor(item.rating)} readOnly />
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
