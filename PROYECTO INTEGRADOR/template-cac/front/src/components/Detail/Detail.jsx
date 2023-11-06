import axios from "axios"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import Cards from "../Cards/Cards";
import Card from "../Card/Card";

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
  
  return ( <div>
    
        {character ? ( <div>
            <img className={style.image} src={character.image} />
    <h2>{character.name}</h2>
    <h2>{character.status}</h2>
    <h2>{character.species}</h2>
    <h2>{character.gender}</h2>
    <h2>{character.origin.name}</h2>
</div>
        ) : (<h1>Loading Data</h1>)}
  </div>
  )
};

export default Detail