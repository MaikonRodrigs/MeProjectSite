import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Row = styled.div`
    background: ${(props) => props.theme.colors.primary};
    padding: 20px;

    @media (min-width: 520px) {
      padding: 40px;
    }

    > .button-skills {
    order: 2;
    margin-top: 40px;
  }

  @media (min-width: 1024px) {
    padding-top: 60px;
  }
`;

export const LeftColumn = styled.div`
  order: 1;
  color: ${(props) => props.theme.colors.text_secondary};
  h2 {
    font-weight: 300;
    font-size: var(--hightext);
    text-align: justify;
  }

  @media (min-width: 1024px) {
    order: 0;
    width: 50%;
  }
`;

export const RightColumn = styled.div`
  order: 0;
  img {
    width: 146px;
    height: 146px;
    margin-left: -25px;
  }

  @media (min-width: 1024px) {
    order: 1;
    width: 30%;
    margin: 0 auto;

    img {
      width: 346px;
      height: 346px;
      margin-left: -25px;
    }
  }
`;

export const RowImg = styled.div`
  @media (max-width: 719px) {
    img {
      display: none;
    }
  }

  @media (min-width: 1024px) {
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
  @media (min-width: 520px) and (max-width: 720px) {
    img {
      width: 50%;
      height: 50%;
      margin-left: -50px;
    }
  }

  @media (min-width: 720px) {
    img {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    img {
      display: unset;
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
