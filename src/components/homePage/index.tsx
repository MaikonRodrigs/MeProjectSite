import React, { useContext } from 'react';
import ImgPerfil from '../../images/MePictureHomePage.png'
import { Row, Container, RowImg, LeftColumn, RightColumn, RowDescription, RowText, ColummImg } from './styles';
import { Button } from '../utils/utils';

import { ThemeContext } from 'styled-components'

interface Props {
    toggleTheme(): void;
}


export const HomePage = ({ toggleTheme }: Props) => {

    const { title } = useContext(ThemeContext);


    return (
        <>
            <Row>
                <Container>
                    <LeftColumn>
                        <RowDescription>
                            <RowText>
                                <p>Hi, <strong>Bruna</strong> my name is Maikon.</p>
                                <h1>I'm Front End.</h1>
                                <span>JavaScript, TypeScript and ReactJS</span>
                            </RowText>
                            <RowImg>
                                <img src={ImgPerfil} alt="" onClick={toggleTheme} />
                            </RowImg>
                        </RowDescription>
                        <h2>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </h2>
                    </LeftColumn>
                    <RightColumn>
                        <ColummImg>
                            <img src={ImgPerfil} alt="" onClick={toggleTheme} />
                        </ColummImg>
                    </RightColumn>
                </Container>
                    <Button className="button-skills">Now my skills</Button>
            </Row>
        </>
    )
}
