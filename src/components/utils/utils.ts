import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 45px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
 
  color: ${(props) => props.theme.colors.secondary};
  font-size: var(--mediumtext);
  

  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.8px;

  @media (max-width: 720px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;
  }

  @media (min-width: 721px) and (max-width: 820px) {
    width: 100%;
    margin-top: 40px;
  }

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;
