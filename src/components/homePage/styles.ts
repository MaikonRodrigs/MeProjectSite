import styled from "styled-components";


export const Container = styled.div`
  
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 190px;
    opacity: 0.7;
    cursor: pointer;
    margin-top: -100px;

    &:hover {
      opacity: 1;
      transition: opacity 1s;
    }
  }
`;

export const TextPrimary = styled.h1`
  color: ${props => props.theme.colors.secondary};
  font-weight: 200;
  font-size: var(--lowtitlemob);

`;

export const RowForm = styled.div`
    border: 1.5px solid ${props => props.theme.colors.secondary};
    border-radius: 10px;
    width: 200px;
    height: 30px;
    margin: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: ${props => props.theme.colors.secondary};
        font-size: var(--lowtext);
        font-weight: 100;
    }
`;
