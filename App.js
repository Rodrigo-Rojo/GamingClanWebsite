import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

export default function App() {
  const [clips, setClips] = useState([]);
  const [userInfo, setUserData] = useState([]);
  

  const getUser = async () => {
    const {data} = await axios.get("https://shielded-reef-98275.herokuapp.com/find");
    setUserData(data);
  };

  const getClips = async () => {
    const {data} = await axios.get("https://shielded-reef-98275.herokuapp.com/clips");
    setClips(data);
  };

  useEffect(() => {
    getClips();
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <MainPage userInfo={userInfo} />
      <hr className="hr" />
      <Carousel clips={clips} />
      <Footer />
    </>
  );
}
