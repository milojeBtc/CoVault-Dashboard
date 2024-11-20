import { FC } from "react";
import S from "./index.module.scss";
import { IPotentialProps } from "@utils/typeUtils";

interface IProps extends IPotentialProps {}

export const PotentialCard: FC<IProps> = (data) => {
  return (
    <div className={S.body}>
      <div className={S.hover}>
        <div className={S.blank} />
        {data.hoverIcon}
        <span className="black lg semi-bold">{data.title}</span>
        <p className="black base">{data.content}</p>
      </div>
      <div className={S.nomal}>
        {data.icon}
        <span className="grey lg medium">{data.title}</span>
      </div>
    </div>
  );
};
