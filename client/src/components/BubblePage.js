import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth" /*1. import axiosWithAuth*/ */

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
//build components below
const BubblePage = (/*2. add props*/props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  /*3. Add your useEffect*/
  useEffect(() => {
    axiosWithAuth()
    .get("/api/colors")
    .then(res => {
      setColorList(res.data)
      //console.log(res.data)
    })
    .catch(err => {
      console.log(err, "sorry, but an error has occurred attempting to retrieve this pae.")
    })
  }, [/*need to do more research*/props])

  return (
    <>
      <ColorList /*import components*/colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

