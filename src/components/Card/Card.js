import styled from 'styled-components';
import React from 'react';
import {useWindowSize} from '../../hooks/windowResize'

const Card = styled.div`
    padding: 1.250em 1.500em;
    opacity: 100%;
    box-shadow: 0px 2px 4px 0px;
    border-radius: 5px;
    background-color: #FFFF;
    @media screen and (min-width: 1024px) {
    width: 45%;
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

const ImageProfile = styled.img`
    object-fit: cover;
    width: 192px;
    height: 232px;
`

const DesktopCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    display: -webkit-flex;
    padding-left: 1.250em;
`

///const NameTitle = 

function CardContentDesktop ({props}) {


    return (
        <div className='flex flex-row'>

            <div>
                <ImageProfile src={props.image} alt=""/>
            </div>

            <DesktopCardInfo>

                <div>
                    <h3>{props.name}</h3>
                    <span>{props.role}</span>
                    <p>{props.info}</p>
                </div>

                <div>
                    <button>Click</button>
                </div>

            </DesktopCardInfo>

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