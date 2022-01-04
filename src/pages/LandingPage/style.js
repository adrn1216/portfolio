import styled from "styled-components";

export const LandingPageContainer = styled.div``;

export const Intro = styled.section`
  padding-top: 128px;
  div {
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
  }
  .intro-div-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
