import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Images from '../../utils/images/index'

const Title = styled.span`
    text-align: center;
    font-family: 'HelveticaNeue-Medium';
    font-weight: "Medium";
    margin-top: 1em;
    margin-bottom: .5em;
    font-size: 28px;
    letter-spacing: 0;
`

const IntroText = styled.p`
    font-family: 'HelveticaNeue-Medium';
    font-size: 16px;
    color: #808080;
    margin-bottom: 2em;
`

function AboutPage(){

    const teamMembers = [
        {
           image: Images.Elizabeth,
           name: 'Elizabeth J. Koch',
           role: 'Retail Salesperson',
           info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque pulvinar metus, non consectetur diam malesuada eget. Nam orci ipsum, dapibus ac odio eget, sodales bibendum leo.' 
        },
        {
            image: Images.Thomas,
            name: 'Thomas K. Brown',
            role: 'Revenue Agent',
            info: 'Nunc id urna dapibus lorem dapibus sagittis sit amet nec ligula. Sed ut aliquam metus. Sed sapien tellus, maximus quis egestas eu, luctus vulputate dolor.'
        },
        {
            image: Images.Osamu,
            name: 'Osamu K. Clayon',
            role: 'Electrical Inspector',
            info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pellentesque malesuada dolor, non euismod sapien tincidunt sed. Sed lorem arcu, ornare vitae neque quis, rutrum efficitur odio.'
        },
        {
            image: Images.Nicole,
            name: 'Nicole L. Coble',
            role: 'Workforce Development Specialist',
            info: 'Etiam tristique tortor sed euismod gravida. Etiam vel ligula consequat, ultricies magna id, ornare orci. Fusce ultricies maximus porta. Integer ac lorem a felis accumsan mattis ut ac tellus. Etiam non pulvinar metus. Pellentesque imperdiet nulla in finibus elementum.'
        }
    ]

    const test = [
        {
            image: Images.Elizabeth,
            name: 'Elizabeth J. Koch',
            role: 'Retail Salesperson',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque pulvinar metus, non consectetur diam malesuada eget. Nam orci ipsum, dapibus ac odio eget, sodales bibendum leo.' 
         }
    ]

    const CardsJSX = teamMembers.map(item => {
        return (
            <Card image={item.image} name={item.name} info={item.info} role={item.role} ></Card>
        )
    })

    return (
        <section>
            <Header/>
        
            <section className='container'>

                <div class="flex flex-column">

                    
                    <Title>
                        Our Team
                    </Title>

                    <div>
                        <IntroText>
                        Aenean efficitur ac nulla eget cursus. Morbi eget sem id lectus sollicitudin pharetra vitae vel lectus. Fusce placerat mollis malesuada. Cras nisl diam, posuere sit amet magna eu, dictum consequat ante. Mauris blandit enim velit, sodales luctus nunc facilisis eu. Sed ligula tellus, condimentum vel urna vel, faucibus pretium ante. Vivamus mollis commodo nisl nec tempus    
                        </IntroText>   
                    </div>

                    <div className='flex flex-row flex-wrap'>

                        {CardsJSX}

                    </div>


                </div>

            </section>
        </section>
    )


}

export default AboutPage