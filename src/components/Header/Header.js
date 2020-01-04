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
const HeaderComponent = () => {
    return (
    <Header>
    <span>
        Logo
    </span>
    </Header>
    )
}

export default HeaderComponent