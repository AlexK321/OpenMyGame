import styled from 'styled-components';

export const GameBlockContainer = styled.div`
  height: -webkit-fill-available;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 120px 0 120px 0;

  & button {
    font-size: 25px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin: 0 auto;
    font-size: 53px;
  }
  & h2 {
    margin: 0 auto;
  }

  @media (max-width: 430px) {
    & h1 {
      font-size: 40px;
    }
  }
`;
