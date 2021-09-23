import React, { useContext, useState } from 'react';
import { SwitchToggle, IconLight, IconDark, Container, IconNav, NavColumn, NavBarRow, IconNavClose, TextNav, IconClose, NavBG } from './styles';




import { ThemeContext } from 'styled-components'

interface Props {
    toggleTheme(): void;
}

export const NavBar = ({ toggleTheme }: Props) => {

    const { title } = useContext(ThemeContext);
    const [openNav, setOpenNav] = useState<boolean>();

    const HandlerOpenNav = () => {
        setOpenNav(!openNav);
        console.log(openNav);
    }

    return (
        <Container>
            {!openNav ? 
            <>
                <NavColumn>
                    <IconNav onClick={HandlerOpenNav} />
            {title === 'light' ? <IconLight /> : <IconDark /> }
                    <SwitchToggle
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={16}
                        width={30}
                        handleDiameter={20}
                        offColor="#44b310"
                        onColor="#666"
                        color="red"
                    />

                </NavColumn>
            </>
            :
            ''
             }
            {openNav ?
                <>
                    <NavBarRow>
                        <IconNavClose onClick={HandlerOpenNav}>
                            <p>Menu</p>
                            <IconClose />
                        </IconNavClose>
                        <TextNav>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Skills</li>
                                <li>Portfólio</li>
                                <li>Contact</li>
                            </ul>
                        </TextNav>
                        <NavBG />
                    </NavBarRow>
                </>
                :
                <div></div>
            }
        </Container>
    )
}