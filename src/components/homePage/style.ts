import styled from "styled-components";

export const SectionBanner = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.primary};




  @media (max-width: 720px) {
    background: blue!important;
    flex-direction: column;
    height: 720px;

  }

  @media (min-width: 721px) and (max-width: 1024px) {
    background: red!important;
  }

  @media (min-width: 1024px) {
    background: gray!important;
  }



  @media (min-width: 720px) {
    flex-direction: row;
    padding: 35px;
  }

  @media (max-width: 719px) {
    padding: 0 25px;
    
  }

  @media (max-width: 520px) {
    align-items: center;
  }

  img {
    width: 246px;
    height: 246px;

    &:hover {
      filter: blur(1px);
      transform: rotate(360deg);
      transition: transform 2s;
    }

    @media (min-width: 720px) {
      width: 254px;
      height: 254px;
    }

    @media (min-width: 1366px) {
      width: 554px;
      height: 554px;
    }
  }
`;

export const SectionRight = styled.div`
  order: 0;

  @media (min-width: 720px) {
    display: none;
  }
`;
export const SectionLeft = styled.div`
  order: 1;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    order: 0;
  }
`;

export const RowLeft = styled.div`
  @media (min-width: 720px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: -60px;
    margin-bottom: -50px;

    img {
      margin-left: 0px;
      margin-top: 0px;
      width: 200px;
      height: 200px;
    }
  }
`;
export const RowRight = styled.div`
  @media (min-width: 720px) {
    display: flex;
    display: column;
    width: 30%;
  }

  @media (max-width: 719px) {
    display: none;
  }
`;

export const UsernameText = styled.div`
  margin-top: 20px;
  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: var(--mediumtext);
    font-weight: 300;
  }

  @media (min-width: 1366px) {
  }
`;

export const TitleDeveloper = styled.div`
  p {
    color: ${(props) => props.theme.colors.secondary};

    font-size: var(--mediumtitle);
    font-weight: 400;
    margin-bottom: -10px;
  }
  span {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 100;
    font-size: var(--lowtext);
  }
`;

export const TextDeveloper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  p {
    color: ${(props) => props.theme.colors.secondary};

    font-weight: 300;
    font-size: var(--mediumtext);
    text-align: justify;
  }
`;
