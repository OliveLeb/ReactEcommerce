import React from 'react';
//import Article from '../../../Api/Article';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import styles from './Accueil.module.css';
import 'react-quill/dist/quill.bubble.css';

const img = 'https://via.placeholder.com/150';
const Accueil = ({ data }) => {
  const { idCard } = useParams();

  const cardFromIdCard = (idCard) => {
    const item = data.find((item) => item.id === idCard);
    return (
      <div
        titre={item._id + ' ' + item.titre}
        contenu={item.contenu}
        id={item._id}
        estSeule
      />
    );
  };

  return (
    <div>
      {idCard ? (
        cardFromIdCard(idCard)
      ) : (
        <div>
          {data.map((article) => {
            return (
              <div key={article._id} className={styles.card}>
                <img src={img} alt='' />
                <div>{article.titre}</div>
                <ReactQuill
                  theme='bubble'
                  readOnly={true}
                  value={article.contenu}
                />
                <div>{article.prix} €</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Accueil;
