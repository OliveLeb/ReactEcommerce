import React, { useEffect, useState } from 'react';
import './App.css';
import Englobant from './HOC/Englobant';
import axios from 'axios';
import Header from './Components/Commun/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Accueil from './Components/Front/Accueil/Accueil';
import Article from './Components/Front/Article/Article';
const urlApi = 'https://immense-tundra-17548.herokuapp.com/articles';
const App = () => {
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
  return (
    <Router>
      <Englobant className='App'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Accueil data={data} />
          </Route>
          <Route path='/article' exact>
            <Article />
          </Route>
        </Switch>
      </Englobant>
    </Router>
  );
};

export default App;
