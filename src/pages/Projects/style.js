import styled from "styled-components";

export const ProjectsContainer = styled.section`
  max-width: 1155px;
  margin: 0 auto 128px;
  button {
    margin: 0 12px;
  }
  > * {
    text-decoration: none;
  }
`;

export const Project = styled.div`
  background-color: white;
  margin: 64px 0;
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
  h3 {
    font-family: var(--primary-font);
    font-size: 34px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.25px;
    color: #ffffff;
    text-align: left;
    margin: 0 40px;
  }
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
