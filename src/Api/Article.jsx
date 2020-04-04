import React, { useEffect, useState } from 'react';
import axios from 'axios';

//const urlApi = 'https://jsonplaceholder.typicode.com/posts';
const urlApi = 'https://immense-tundra-17548.herokuapp.com/articles';

const Article = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //axios.get(urlApi)
    const getArticle = async () => {
      try {
        const result = await axios.get(urlApi);
        setData(result.data);
      } catch (err) {
        alert(err);
      }
    };
    getArticle();
  }, []);
  console.log(data);

  return <div></div>;
};

export default Article;
