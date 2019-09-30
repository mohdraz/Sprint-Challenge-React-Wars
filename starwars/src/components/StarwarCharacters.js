import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row, Button } from "reactstrap";
import {ButtonStyle} from "../styles/CardStyles";


export default function StarwarCharacters() {
    const [character, setCharacter] = useState([]);
    const [page, setPages] = useState(1);

        useEffect( () => {
            axios
            .get(`https://swapi.co/api/people/?page=${page}`)
            .then(res => {
                const data = res.data.results;
                console.log("Data Return from Star WAR API: ", data);
                setCharacter(data);
            })
            .catch(error => {console.log("The data was not returned: ", error);})
        },[page]);

    
    return (
        <Container>  
            <Button style={ButtonStyle} onClick={ () => setPages(1)}>Page 1</Button>
            <Button style={ButtonStyle} onClick={ () => setPages(2)}>Page 2</Button>
            <Button style={ButtonStyle} onClick={ () => setPages(3)}>Page 3</Button>
            <Button style={ButtonStyle} onClick={ () => setPages(4)}>Page 4</Button>
            <Button style={ButtonStyle} onClick={ () => setPages(5)}>Page 5</Button>
            <Button style={ButtonStyle} onClick={ () => setPages(6)}>Page 6</Button>
            <Button style={ButtonStyle} onClick={ () => setPages(7)}>Page 7</Button>
            <Button style={ButtonStyle} onClick={ () => setPages(8)}>Page 8</Button>
            <Button style={ButtonStyle} onClick={ () => setPages(9)}>Page 9</Button>
        <Row>
        {character.map( (item, index) => {
                console.log("this is index: ", index)
            return <CharacterCard 
                name={item.name}
                gender={item.gender}
                birthYear={item.birth_year}
                starships={item.starships.length}
                vehicles={item.vehicles.length}
                films = {item.films.length}
                created = {item.created}
            
            />;
            })}
        </Row>      
        </Container>
    );
}