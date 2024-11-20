import { FC } from "react";
import * as S from "./index.styled";

interface IProps {
  mode: string;
  type: string;
  title?: string;
  icon?: JSX.Element;
  onClick: () => void;
  className?: string;
}

export const Button: FC<IProps> = ({
  onClick,
  mode,
  type,
  title,
  className,
  icon,
}) => {
  return (
    <S.Container
      onClick={onClick}
      $mode={mode === "dark" ? true : false}
      $type={type === "primary" ? true : false}
      $title={title ? true : false}
      $icon={icon ? true : false}
      className={className}
    >
      {title}
      {icon}
    </S.Container>
  );
};
