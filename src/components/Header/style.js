import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 69px;
  background-color: var(--bottom-color);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--edges-color);
  div {
    width: 100%;
    max-width: 1080px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-family: var(--secondary-font);
      font-size: 24px;
      margin: 0;
      color: var(--white-color);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  a {
    font-size: 16px;
    font-weight: 500;
    margin: 0 12px;
    text-decoration: none;
    color: var(--white-color);
    padding-bottom: 4px;
    border-bottom: 3px solid transparent;
    transition: ease-out 300ms;
    :hover,
    :visited,
    .active {
      border-bottom: 3px solid var(--primary-color);
      transition: ease-out 300ms;
    }
  }
`;
