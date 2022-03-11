import styled from 'styled-components';

export const Container = styled.section`
  max-width: min(480px, 100%);
  height: 100%;

  margin: 0 auto;

  background: #efefef;

  .ImageHome {
    width: 100%;
  }

  .content {
    margin: 0 auto;

    width: 90%;
  }

  .LogoCastanhas {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .Logo {
      width: 70%;
    }
  }

  h1 {
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    text-align: center;

    color: #067500;

    margin: 24px 0 12px 0;
  }
  h2 {
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;

    text-align: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    color: #50ae5c;

    margin: 24px 0;
  }
  p {
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    text-align: justify;

    color: #999999;
    margin-bottom: 12px;
  }
  .Cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .IconCard {
      width: 67.45px;
      height: 68.23px;
    }

    .textCard {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 14px;
      line-height: 130%;

      text-align: center;

      color: #3c3c3c;

      margin-top: 12px;
    }
  }

  .CastanhaProdutivo {
    margin-bottom: 12px;
  }
`;
