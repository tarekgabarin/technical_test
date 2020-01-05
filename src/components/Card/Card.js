import styled from 'styled-components';
import React from 'react';


const Card = styled.div`
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    padding: 1.4em;
    opacity: 100%;
    box-shadow: 0px 2px 4px 0px;
    border-radius: 5px;
    background-color: #FFFF;
    @media screen and (min-width: 1024px) {
    width: 40%;
    /* &:first-child {
        margin-left: 1em
    }
    &:last-child {
        margin-right: 1em
    } */
    margin: 1em;

    }
    @media screen and (max-device-width: 480px) and (orientation: portrait){
    width: 90%;
    margin: 1em;
    }
 
`
function CardComponent (props){

    return (
        <Card>
        
        </Card>
    )

}

export default CardComponent