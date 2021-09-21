import React from 'react';
import ImgPerfil from '../../images/MePictureStarterPage.png'
import { Container, TextPrimary, RowForm } from './styles';



export const HomePage = () => {
    return (
        <Container>
            <img src={ImgPerfil} alt="" />
            <TextPrimary>Hello, World!</TextPrimary>
            <RowForm>
                <p>Whats your name?</p>
                </RowForm>
        </Container>
    )
}
