import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

export default function StarwarCharacters() {
    const [character, setCharacter] = useState([]);

    useEffect( () => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            const data = res.data.results;
            console.log("Data Return from Star WAR API: ", data);
            setCharacter(data);
        })
        .catch(error => {console.log("The data was not returned: ", error);})
    },[]);





    return (
        <Container>  
        <Row>
        {character.map( (item, index) => {
                console.log("this is index: ", index)
            return <CharacterCard 
                name={item.name}
                gender={item.gender}
                birthYear={item.birth_year}
                starships={item.starships.length}
                films = {item.films.length}
                created = {item.created}
            
            />;
            })}
        </Row>      
        </Container>
    );
}