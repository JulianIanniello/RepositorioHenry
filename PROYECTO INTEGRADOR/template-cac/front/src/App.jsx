import "./App.css";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
//import Card from "./components/Card/Card";
//import SearchBar from "./components/SearchBar/SearchBar";
import Cards from "./components/Cards/Cards";
import axios from "axios"
//import characters from "./data.js";

function App() {
   
  const [characters, setCharacters] = useState([])
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }

 const onClose = (id) =>{
  setCharacters(characters.filter((char) => {
    return char.id !== Number(id)
  }))
 }
 

  return (
    <>
    <Nav onSearch={onSearch} />
      {/* Al componente SearchBar le pasamos por la prop "onSearch" una función */}
      {/*<SearchBar onSearch={(characterID) => window.alert(characterID)} />*/}

      {/* Al componente Cards le pasamos por la prop "characters" el array de personajes que importamos más arriba */}
      <Cards characters={characters} onClose={onClose} />

      {/* Al componente Card le pasamos las props que corresponden a las propiedades de un personaje y una función "onClose" */}
      
    </>
  );
}

export default App;
