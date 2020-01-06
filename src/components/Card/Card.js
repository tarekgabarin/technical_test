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

const ImageProfileDesktop = styled.img`
    object-fit: cover;
    width: 192px;
    height: 232px;
`
const ImageProfileMobile = styled.img`
    object-fit: cover;
`

const DesktopCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    display: -webkit-flex;
    padding-left: 1.250em;
    justify-content: space-between;
`

const NameTitle = styled.span`
    font-family: 'HelveticaNeue-Medium';
    font-weight: "Medium";
    font-size: 1.625em;
    color: #FF6600;
    margin-top: 0.375em;
    margin-bottom: 0.600em;
    line-height: 0.250em;
    display: block;
`

const RoleTitle = styled.span`
    font-family: 'HelveticaNeue-Medium';
    font-weight: "Medium";
    font-size: 1.000em;
    color: #434343;
`

const HeaderTitle = styled.hr`
    border-top: #FFFF;
    border-bottom: 1px solid #FF6600;
`
const InfoText = styled.p`
    font-family:  "Helvetica Neue";
    font-size: 0.875em;
`


function CardContentDesktop ({props}) {


    return (
        <div className='flex flex-row'>

            <div>
                <ImageProfileDesktop src={props.image} alt=""/>
            </div>

            <DesktopCardInfo>

                <div>
                    <NameTitle>{props.name}</NameTitle>
                    <RoleTitle>{props.role}</RoleTitle>
                    <HeaderTitle/>

                    <InfoText>
                        {props.info}
                    </InfoText>
                </div>

                <div>
                    <button>Click</button>
                </div>

            </DesktopCardInfo>

        </div>
    )
}

function CardContentMobile({props}) {

    return (
        <div class="flex flex-column">

                    <NameTitle>{props.name}</NameTitle>
                    <RoleTitle>{props.role}</RoleTitle>
                    <div>
                    <HeaderTitle></HeaderTitle>
                    </div>
                    <ImageProfileMobile src={props.image} alt=""/>

                    <InfoText>
                        {props.info}
                    </InfoText>                    
                    
                    


        </div>

    )

}




function CardComponent (props){

    const [width] = useWindowSize();
    const isMobile = width < 480;
    
    const CardContent = isMobile === true ?  (<CardContentMobile props={props} />) : (<CardContentDesktop props={props} />)



    return (
        <Card>
            
            {CardContent}
            
        </Card>
    )

}

export default CardComponent