import React, { useContext } from 'react';
import ImgPerfil from '../../images/MePictureStarterPage.png'
import { Container, TextPrimary, RowForm } from './styles';

import { ThemeContext } from 'styled-components'
import { ThemeProvider } from 'styled-components'


interface Props {
    toggleTheme(): void;
}


export const HomePage = ({toggleTheme}: Props) => {

    const { title } = useContext(ThemeContext);


    return (
        
            <Container>
                <img src={ImgPerfil} alt="" onClick={toggleTheme}/>
                <TextPrimary>Hello, World!</TextPrimary>
                <RowForm>
                    <p>Whats your name?</p>
                </RowForm>
            </Container>
    )
}
