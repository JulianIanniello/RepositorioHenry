import style from "./Card.module.css"
// Aquí debes utilizar la información que llega por props al componente.
// Puede hacer destructuring de las propidades del objeto props si quieres

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
        <h1>{name}</h1>
        </div>
          {/*<h2>{status}</h2>*/}
          <h2>Specie: {species}</h2>
          <h2>Genero: {gender}</h2>
          {/*<h2>{origin}</h2>*/}
          </div>
    </div>
  );
};

export default Card;
