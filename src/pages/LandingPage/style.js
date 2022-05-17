import styled from "styled-components";

export const LandingPageContainer = styled.div``;

export const Intro = styled.section`
  padding: 128px 0 0 0;
  color: var(--white-color);
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 10px;
    }
  }
  h1 {
    font-size: 60px;
    letter-spacing: 0.5px;
    line-height: 71px;
    margin: 16px 0;
    .name {
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
  button {
    margin: 0 12px;
  }
`;

export const AboutMe = styled.section`
  background-color: var(--filler-color);
  width: 967px;
  border-radius: 8px;
  padding: 24px;
  margin: 150px auto;
  display: flex;
  .profilePic {
    height: 405px;
    width: 326px;
    margin-right: 32px;
    img {
      height: 405px;
      width: 326px;
      background-color: var(--accent-color);
      border-radius: 8px;
      object-fit: cover;
    }
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
  }
`;

export const Projects = styled.section`
  max-width: 1155px;
  margin: 0 auto 128px;
  h3 {
    font-family: var(--primary-font);
    font-size: 34px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.25px;
    color: #ffffff;
    text-align: left;
  }
  button {
    margin: 0 12px;
  }
`;

export const Project = styled.div`
  background-color: white;
  margin: 24px 0;
  height: 534px;
  width: 1155px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 7px;
    opacity: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 9.74%, #000000 100%);
    height: 100%;
    transition: 300ms ease-out;
    :hover {
      opacity: 1;
      transition: 300ms ease-out;
    }
    h3 {
      margin: 0 40px;
    }
    p {
      font-family: var(--primary-font);
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.15px;
      text-align: left;
      color: white;
      margin: 10px 40px 40px 40px;
    }
  }
`;
