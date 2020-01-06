import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 5px;
    padding: .5em;
    font-size: 1em;
    background-color: #1976D2;
    color: #ffff;
`
function ButtonComponent(props){

    return (
        <Button>
            {props.children}
        </Button>
    )

}

export default ButtonComponent;
