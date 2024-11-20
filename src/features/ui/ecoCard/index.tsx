import { FC } from "react";
import S from "./index.module.scss";
import { IBenefitProps } from "@utils/typeUtils";

export const EcosystemCard: FC<IBenefitProps> = (data) => {
  return (
    <div className={S.body}>
      <div className={S.nomal}>
        {data.icon}
        <div className="">
          <p className="white bold">{data.title}</p>
          <p className="grey base xxl">{data.content}</p>
        </div>
      </div>
      <div className={S.hover}>
        {data.hoverIcon}
        <div className="">
          <p className="black bold">{data.title}</p>
          <p className="black base">{data.content}</p>
        </div>
      </div>
    </div>
  );
};
