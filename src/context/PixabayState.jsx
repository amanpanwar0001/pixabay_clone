import React, { useEffect, useState } from "react";
import pixabaycontext from "./PixabayContext";

const PixabayState = (props) => {
  const api_key = "45788084-7b0da66664b6474c84840ee7a";
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState('london');

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  };

  return (
    <pixabaycontext.Provider value={{ imageData, fetchImageByCategory, setQuery }}>
      {props.children}
    </pixabaycontext.Provider>
  );
};

export default PixabayState;
