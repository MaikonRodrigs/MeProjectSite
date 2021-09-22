import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 45px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.secondary};
  font-size: var(--mediumtext);
  margin-top: 40px;

  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.8px;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;
