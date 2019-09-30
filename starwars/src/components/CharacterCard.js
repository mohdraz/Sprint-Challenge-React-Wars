import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col } from 'reactstrap';

import {CardStyle,Title,FooterStyle} from "../styles/CardStyles";

const CharacterCard = props => {
    return (
    <Col xs="6">
        <Card style={CardStyle}> 
            <CardHeader style={Title}>{props.name}</CardHeader>
            <CardBody>
                <CardText>Gender is {props.gender}</CardText>
                <CardText>Birth Year is {props.birthYear}</CardText>
                <CardText>Owns {props.starships} starships</CardText>
                <CardText>Owns {props.vehicles} Vehicles</CardText>
                <CardText>Appeared in {props.films} films</CardText>
            </CardBody>
            <CardFooter style={FooterStyle}>Created on: {props.created}</CardFooter>
      </Card>
      </Col>
    );};

export default CharacterCard;