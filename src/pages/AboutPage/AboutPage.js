import React  from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header'

const Title = styled.span`
    text-align: center;
    font-family: 'HelveticaNeue-Medium';
    font-weight: "Medium";
    font-size: 28px;
    letter-spacing: 0;
`


function AboutPage(){

    return (
        <section>
            <Header/>
            <section>

                <div class="flex flex-column">

                    
                    <Title>
                        Our Team
                    </Title>

                    

                    


                </div>

            </section>
        </section>
    )


}

export default AboutPage