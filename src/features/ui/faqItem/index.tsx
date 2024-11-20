import { FC, useState } from "react";
import S from "./index.module.scss";
import { IFaqType } from "@utils/typeUtils";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

interface IFaqItemProps extends IFaqType {
  id:string
}
export const FAQItem: FC<IFaqItemProps> = ({ title, content, id }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(prevChecked=>!prevChecked);
  };

  return (
    <div className={S.body}>
      <label className="black" aria-expanded={checked} aria-controls={id} onClick={handleChange}>
        {title}
        {checked ? (
          <HiOutlineMinus size={24} color="var(--black)" />
        ) : (
          <HiOutlinePlus size={24} color="var(--black)" />
        )}
        <input
          type="checkbox"
          name="faq"
          id={id}
          checked={checked}
          onChange={handleChange}
        />
      </label>
      {checked && <p className="grey" id={id}>{content}</p>}
    </div>
  );
};
