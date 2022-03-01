import styled from "styled-components";

export const ProjectDetailsContainer = styled.section`
  max-width: 1155px;
  margin: 0 auto 128px;
  text-align: left;
  section {
    padding: 64px 0;
  }
  h5 {
    font-family: var(--primary-font);
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: var(--gray-color);
    margin: 0;
  }
  h1 {
    font-family: var(--primary-font);
    font-size: 60px;
    font-weight: 700;
    line-height: 71px;
    letter-spacing: -0.5px;
    color: var(--white-color);
    margin: 24px 0;
  }
  h2 {
    font-family: var(--primary-font);
    font-size: 48px;
    font-weight: 500;
    line-height: 57px;
    letter-spacing: 0em;
    color: var(--white-color);
    margin: 16px 0;
  }
  p {
    font-family: var(--primary-font);
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.4399999976158142px;
    color: var(--white-color);
  }
  .date {
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15000000596046448px;
    color: var(--gray-color);
  }
  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .actions {
    display: flex;
    column-gap: 12px;
  }
`;

export const ProjectPreview = styled.div`
  background-color: white;
  margin: 64px 0 0 0;
  height: 534px;
  width: 1154px;
  border-radius: 8px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Technologies = styled.div`
  border-radius: 8px;
  padding: 20px 30px;
  background-color: var(--filler-color);
  font-family: var(--primary-font);
  text-align: left;
  color: var(--gray-color);
  p {
    flex-grow: 1;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.44px;
    margin: 0;
  }
`;
