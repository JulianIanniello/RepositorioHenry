import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, status, species, gender, origin, image, onClose } = props
  return (
    <div className={style.CardContainer}>

        <div className={style.header_card}>

          <div className={style.wrapperButton}>
            <button className={style.button} onClick={() =>onClose(id)}>X</button>
          </div>

         <img src={image} alt='' />
        </div>

      <div className={style.wrapperText}>
        <div className={style.name}>
          <Link className={style.link}
          to= {`/detail/${id}`}>
        <h1>{name}</h1>
        </Link>
        </div>
          <h2>Specie: {species}</h2>
          <h2>Genero: {gender}</h2>
          </div>
    </div>
  );
};

export default Card;
