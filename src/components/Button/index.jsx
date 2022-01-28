import { StyledButton } from "./style";

export const Button = ({ type, prefixIcon, suffixIcon, children, width }) => {
  return (
    <StyledButton type={type} width={width}>
      <div>
        {prefixIcon}
        {children}
        {suffixIcon}
      </div>
    </StyledButton>
  );
};
