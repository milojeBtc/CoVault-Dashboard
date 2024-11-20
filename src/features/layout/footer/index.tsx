import { useNavigate } from "react-router-dom";

import { FaTelegramPlane } from "react-icons/fa";
import S from "./index.module.scss";
import { FaXTwitter } from "react-icons/fa6";

const linkList = [
  { title: "About", path: "#about_section" },
  { title: "Waitlist", path: "#waitlist_section" },
  { title: "Features", path: "#features_section" },
  { title: "FAQ", path: "#faq_section" },
  { title: "Terms of Service", path: "#terms_section" },
  { title: "Privacy Policy", path: "#privacy_section" },
];

const Footer = () => {
  const navigate = useNavigate();

  const onFooterFunc = (item: string) => {
    navigate(item);
  };

  return (
    <footer className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.line} />
          <div className={S.footer}>
            <div className={S.logo}>
              <img src="./logo.png" alt="logo" />
              <p className="yellow">@ Covault Protocol {new Date().getFullYear()}</p>
            </div>
            <div className={S.links}>
              {linkList.map((item, index) => (
                <div
                  key={index}
                  className={S.link}
                  onClick={() => onFooterFunc(item.path)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className={S.social}>
              <div
                className={S.btn}
                onClick={() => (window.location.href = "https://t.me/covault")}
              >
                <FaTelegramPlane size={20} color="var(--white)" />
              </div>
              <div
                className={S.btn}
                onClick={() =>
                  (window.location.href = "https://x.com/covaultbtc")
                }
              >
                <FaXTwitter size={20} color="var(--white)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
