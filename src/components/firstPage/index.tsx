import React from 'react';
import ImgPerfil from '../../images/MePictureStarterPage.png'
import { Container, TextPrimary, RowForm } from './styles';


interface Props {
    toggleTheme(): void;
}

export const FirstPage = ({toggleTheme}: Props) => {

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
