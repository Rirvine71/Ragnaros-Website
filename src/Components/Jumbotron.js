import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logoImage from '../Assets/GamesBackground.jpg';

const Styles = styled.div`
    .jumbotron {
        background: url(${logoImage}) no-repeat fixed center top;
        background-size: contain;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay { 
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="Jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome to the Site</h1>
                <p>take a shop around we hope you find something you like</p>
            </Container>
        </Jumbo>
    </Styles>
)