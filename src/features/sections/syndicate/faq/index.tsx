import { FAQItem } from "@features/ui";
import S from "./index.module.scss";
import { FAQ_DATA } from "@utils/dataUtils";
import removal from "@assets/syndicate/removal.png";

export const FAQSection = () => {
  return (
    <section id="faq_section" className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.banner}>
            <h3 className="grey semi-bold xxl">
              Your questions answered:<br></br>
              <span className="black">All about Covault</span>
            </h3>
            <img src={removal} alt="" />
          </div>
          <div className={S.list}>
            {FAQ_DATA.map((data, index) => (
              <FAQItem key={index} id={`faq_${index}`} title={data.title} content={data.content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
