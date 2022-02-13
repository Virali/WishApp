import styled from "styled-components";

type ButtonProps = {
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  height?: string;
  width?: string;
  backgroundColor?: string;
  textColor?: string;
  margin?: string;
};

export const EllipseButton = ({
  children,
  onClick,
  height,
  width,
  backgroundColor,
  textColor,
  margin,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      color={textColor}
      margin={margin}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  text-align: center;
  vertical-align: middle;
  height: ${({ height }) => height || "fit-content"};
  width: ${({ width }) => width || "fit-content"};
  background-color: ${({ backgroundColor: buttonColor }) =>
    buttonColor || "#FFFFFF"};
  color: ${({ color }) => color || "#8EA6AB"};
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 2px;
  margin: ${({ margin }) => margin || ""};
  border: white;
  border-radius: 50px;

  :hover {
    filter: brightness(75%);
  }
`;
