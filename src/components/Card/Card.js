import styled from 'styled-components';
import React from 'react';
import {useWindowSize} from '../../hooks/windowResize'

const Card = styled.div`
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

function CardContentDesktop ({props}) {


    console.log('props in nestes is', props);

    return (
        <div className='flex flex-row'>

            <div>
                <img src={props.image} alt=""/>
            </div>

            <div class="flex flex-column">

                <div>
                    <h3>{props.name}</h3>
                    <span>{props.role}</span>
                    <p>{props.info}</p>
                </div>

                <div>
                    <button>Click</button>
                </div>

            </div>

        </div>
    )
}




function CardComponent (props){

    const [width] = useWindowSize();
    const isMobile = width < 480;

    console.log('props is', props);

    ///const CardContext = React.createContext(props);

    ///const CardContent = isMobile == true ?  :  CardContentDesktop()



    return (
        <Card>
            

            <CardContentDesktop props={props} ></CardContentDesktop>
        </Card>
    )

}

export default CardComponent