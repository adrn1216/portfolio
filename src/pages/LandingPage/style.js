import styled from "styled-components";

export const LandingPageContainer = styled.div``;

export const Intro = styled.section`
  padding: 128px 0 180px 0;
  color: var(--white-color);
  h1 {
    font-size: 60px;
    letter-spacing: 0.5px;
    line-height: 71px;
    margin: 16px 0;
    span {
      color: var(--primary-color);
    }
  }
  h5 {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutMe = styled.section`
  background-color: var(--filler-color);
  width: 967px;
  border-radius: 8px;
  padding: 24px;
  margin: auto;
  display: flex;
  img {
    height: 405px;
    background-color: red;
    width: 326px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 32px;
  }
  > div {
    text-align: left;
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-family: var(--primary-font);
      font-size: 48px;
      font-weight: 500;
      line-height: 57px;
      letter-spacing: 0em;
      margin: 0;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.44px;
    }
    //TODO:  remove margin in button component
    button {
      margin: 0;
    }
  }
`;
