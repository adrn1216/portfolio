import { StyledButton } from "./style";

export const Button = ({ type, prefixIcon, suffixIcon, children }) => {
  return (
    <StyledButton type={type}>
      <div>
        {prefixIcon}
        {children}
        {suffixIcon}
      </div>
    </StyledButton>
  );
};
