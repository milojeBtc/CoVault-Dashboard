import { ReactNode } from "react";

interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}

interface IBasicButtonStyle {
  $mode: boolean;
  $type: boolean;
  $title: boolean;
  $icon: boolean;
}

interface IBasicComponentProps {
  children?: ReactNode;
  className?: string;
}

interface IPotentialProps {
  icon: JSX.Element;
  hoverIcon: JSX.Element;
  title: string;
  content: string;
}

interface IBenefitProps {
  className?: string;
  icon: JSX.Element;
  hoverIcon: JSX.Element;
  title: string;
  content: string;
}

interface IFaqType {
  title: string;
  content: string;
}

export type {
  IRouterType,
  IBasicButtonStyle,
  IBasicComponentProps,
  IPotentialProps,
  IBenefitProps,
  IFaqType,
};
