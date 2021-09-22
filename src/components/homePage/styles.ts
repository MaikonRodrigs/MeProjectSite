import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 40px 30px 80px;

  display: flex;
  flex-direction: column;
`;

export const LeftColumn = styled.div`
  order: 1;
  color: ${(props) => props.theme.colors.text_secondary};
  h2 {
    font-weight: 300;
    font-size: var(--hightext);
    text-align: justify;
  }

  @media (min-width: 720px) {
    
  }
`;

export const RightColumn = styled.div`
  order: 0;
  img {
    width: 146px;
    height: 146px;
    margin-left: -25px;
  }

  @media (min-width: 560px) {
  }

}
`;

export const RowImg = styled.div`
  @media (max-width: 719px) {
    img {
      display: none;
    }
  }
`;
export const RowText = styled.div`
  margin-bottom: 40px;
  p {
    font-weight: 100;
    font-size: var(--mediumtext);
  }
  h1 {
    font-weight: 400;
    font-size: var(--mediumtitle);
    margin-bottom: -10px;
  }

  span {
    font-weight: 100;
    font-size: var(--lowtext);
  }
`;
export const ColummImg = styled.div`
    @media (min-width: 720px) {
  img {
    display: none
  }
}
`;
export const RowDescription = styled.div`
@media (min-width: 719px) {
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 250px;
    margin-top: -30px;
  }
}
  
`;

/* color: ${(props) => props.theme.colors.secondary}; */
