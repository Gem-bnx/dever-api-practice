import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SubForm({setSubLink}) {
    const navigate = useNavigate();
  const [num, setNum] = useState();
  const handleOnChange = (e) => {
    setNum(e.target.value);
  };
  const handleSubmit = async () => {
    if (num >= 1 && num <= 137 && num % 1 == 0) {
      console.log(num);
      const hero = await axios
      .get("https://api.opendota.com/api/heroStats")
      .then((res) => res.data.filter(object => object.id == num)[0]);
      setSubLink(hero.img)
    //   console.log('lay duoc chua???',hero.img)
      navigate('/output')
    } else {
      alert("Please enter a natural number between 1 and 137");
    }
  };

  return (
    <>
      <input
        onChange={(e) => handleOnChange(e)}
        type="text"
        placeholder="Enter a number..."
      ></input>
      <button  onClick={() => handleSubmit()}>Submit</button>
      
    </>
  );
}

export default SubForm;
