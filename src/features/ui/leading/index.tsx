import { FC, useEffect } from "react";
import S from "./index.module.scss";
import { useAnimate } from "framer-motion";

interface IProps {
  effect: string;
}

export const Leading: FC<IProps> = ({ effect }) => {
  const [textRef, animate] = useAnimate();

  useEffect(() => {
    animate(textRef.current, { y: effect }, { duration: 1 });
  }, [effect]);

  return (
    <div className={S.body} ref={textRef}>
      <div className={S.animation}>
        <img src="/loading.png" alt="loading" />
        <div className={S.animation_vertical} />
        <div className={S.animation_horizontal} />
        <div className={S.animation_plus_vertical} />
        <div className={S.animation_plus_horizontal} />
      </div>
    </div>
  );
};