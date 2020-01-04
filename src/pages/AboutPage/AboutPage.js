import React  from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'

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
`

function AboutPage(){

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

                    <div>

                        <Card>
                            
                        </Card>

                    </div>


                </div>

            </section>
        </section>
    )


}

export default AboutPage