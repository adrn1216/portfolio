import styled from "styled-components";
export const LandingPageContainer = styled.div``;

export const AboutMe = styled.section`
  max-width: 1080px;
  margin: 64px auto 128px;
  display: flex;
  column-gap: 50px;
  img {
    background-color: var(--filler-color);
    height: 547px;
    width: 448px;
    border-radius: 8px;
    object-fit: cover;
  }
  > div {
    text-align: left;
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-family: var(--primary-font);
      font-size: 60px;
      font-weight: 700;
      line-height: 71px;
      letter-spacing: -0.5px;
      margin: 0;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.44px;
    }
    a {
      color: var(--accent-color);
      text-decoration: none;
    }
    //TODO:  remove margin in button component
    button {
      margin: 0;
    }
  }
`;

export const Skills = styled.section`
  max-width: 1155px;
  margin: auto;
  padding: 0 20px;
  margin-bottom: 100px;
  h3 {
    font-family: var(--primary-font);
    font-size: 34px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.25px;
    color: var(--white-color);
    text-align: center;
  }
  > div {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

export const Reviews = styled.section`
  max-width: 1155px;
  margin: auto;
  padding: 0 20px;
  margin-bottom: 100px;
  h3 {
    font-family: var(--primary-font);
    font-size: 34px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.25px;
    color: var(--white-color);
    text-align: center;
  }
  > div {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;
