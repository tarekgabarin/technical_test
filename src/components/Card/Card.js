import styled from 'styled-components';
import React from 'react';
///import PlaceholderImage from '../../utils/images/placeholder'

const Card = styled.div`
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    padding: 1.4em;
    opacity: 100%;
    box-shadow: 0px 2px 4px 0px;
    border-radius: 5px;
    background-color: #FFFF;
`
function CardComponent (){

    return (
        <Card>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, distinctio!</h1>
        </Card>
    )

}

export default CardComponent