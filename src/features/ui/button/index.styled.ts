import { IBasicButtonStyle } from "@utils/typeUtils";
import styled, { css } from "styled-components";

const Container = styled.button<IBasicButtonStyle>`
  min-width: ${({ $title }) => ($title ? "100px" : "46px")};
  height: 48px;

  ${({ $title }) =>
    $title &&
    css`
      font-size: 12px;
      font-weight: 600;
      // line-height: 100%;
    `}

  ${({ $icon, $title }) =>
    $icon && !$title &&
    css`
      width: 48px;
      display: grid;
      place-items: center;
    `}

  padding: 16px;
  border-radius: 8px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  ${({ $mode, $type }) =>
    $mode && $type
      ? css`
          background-color: #fee407;
          border: 1px solid #fee407;
          color: var(--black);

          &:hover {
            background-color: #fff06e;
            box-shadow: 4px 4px 10px 0 #ffed5726;
          }
        `
      : $mode && !$type
      ? css`
          background-color: var(--black);
          border: 1px solid #ffffff26;
          color: white;

          &:hover {
            background-color: #fee407;
            border: 1px solid #fee407;
            color: var(--black);
          }
        `
      : ``}

  ${({ $title, $icon }) =>
    $title &&
    $icon &&
    css`
      display: flex;
      gap: 8px;
    `}
`;

export { Container };
