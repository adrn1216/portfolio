import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100%;
  max-width: 1155px;
  border-top: 1px solid var(--edges-color);
  margin: auto;
  > div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 64px 0 40px;
    text-align: left;
    p {
      font-family: var(--secondary-font);
      font-size: 24px;
      margin: 0;
      color: var(--white-color);
    }
    .social-links {
      display: flex;
      * {
        margin-right: 16px;
      }
    }
  }
  small {
    display: block;
    width: 100%;
    border-top: 1px solid var(--edges-color);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    text-align: left;
    color: var(--white-color);
    padding: 16px 0 32px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: var(--white-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-align: left;
    transition: ease-out 300ms;
    margin-bottom: 24px;
    :hover,
    .active {
      color: var(--accent-color);
      transition: ease-out 300ms;
    }
  }
`;
