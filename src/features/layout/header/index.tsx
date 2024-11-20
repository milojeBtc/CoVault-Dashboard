import useScrollToAnchor from "@hooks/useScrollToAnchor";
import S from "./index.module.scss";
import { Navbar } from "ovb-navbar";
import { Button } from "@features/ui";
import { HiXMark } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "../navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  useScrollToAnchor();
  const headerRef = useRef<HTMLHeadElement>(null);

  const close = () => {
    setMobileMenu(false);
  };

  const handleContact = () => { };

  const handleGoWaitlist = () => {
    navigate("/covault-protocol#waitlist_section");
  };

  const handleGoHero = () => {
    navigate("#about_section");
  }

  useEffect(() => {
    const changeHeaderStyle = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          headerRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        } else {
          headerRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      }
    };

    window.addEventListener("scroll", changeHeaderStyle);

    return () => {
      window.removeEventListener("scroll", changeHeaderStyle);
    };
  }, []);

  const changeActiveTab = (collection: string) => {
      if(collection.startsWith("http")){
        window.open(collection, "_blank")
      }else{
        navigate(collection)
      }
      
  };


  return (
    <>
      <header className={S.body} ref={headerRef}>
        <div className={S.wrapper}>
          <div className={S.main}>
            <div onClick={handleGoHero} style={{cursor:"pointer"}}>
              <img src="./logo.png" alt="logo" />
            </div>
            <Navbar
              fullWidth={false}
              width={500}
              height={32}
              activeColor="#FEE407"
              color="#fff"
              dataLists={[
                { value: "/", label: "Home" },
                { value: "/covault-protocol", label: "Covault Protocol" },
                { value: "/multi-sig", label: "Native Multisig " },
                { value: "/syndicate-vault", label: "Syndicate Vault" },
                { value: "https://covault.notion.site/Covault-Protocol-Intelligent-Custody-Framework-428ecc3b7fb4477a95328984bad953b1", label: "Whitepaper"},
              ]}
              root={S.root}
              mask={S.mask}
              tab={S.tab}
              onChange={changeActiveTab}
            />
            <div className={S.btnGroup}>
              <Button
                onClick={handleContact}
                title="Contact"
                mode="dark"
                type="secondary"
                className={S.contact}
              />
              <Button
                onClick={handleGoWaitlist}
                title="Go to Waitlist"
                mode="dark"
                type="primary"

              />
              <Button
                icon={
                  mobileMenu ? (
                    <HiXMark size={18} color="#ff" />
                  ) : (
                    <GiHamburgerMenu size={18} color="#ff" />
                  )
                }
                mode="dark"
                type="secondary"
                className={S.hamberger}
                onClick={() => setMobileMenu(!mobileMenu)}
              />
            </div>
          </div>
        </div>
      </header>
      {mobileMenu && <HamburgerMenu close={close} />}
    </>
  );
};

export default Header;
