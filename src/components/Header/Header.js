import styled from 'styled-components';
import React from 'react';

const Header = styled.div`
 padding: 1em;
 width: 100%;
 background-color: #fafafa;
 border-bottom: 5px solid #ff7e28;
 text-align: left;
 margin-right: 0!important;
`
const Logo = styled.span`
    font-size: 1.500em;
    font-family: 'HelveticaNeue-Medium';
    font-weight: "Medium";
    color: #FF6600;
`

const HeaderComponent = () => {
    return (
    <Header>
        <Logo>
            Acuity
        </Logo>
    </Header>
    )
}

export default HeaderComponent