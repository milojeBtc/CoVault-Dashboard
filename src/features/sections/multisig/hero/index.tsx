import S from "./index.module.scss";
import { Button } from "@features/ui";

export const HeroSection = () => {
  const handleContact = () => { 
    window.location.replace('http://146.19.215.121:3000');
  };

  return (
    <section id="about_section" className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.hero}>
            <div className={S.info}>
              <h1>
                Welcome to the
                <br></br>
                Age of {" "}
                <span>Intelligent</span> {" "}
                Custody
              </h1>
              <p>
                Explore the future of intelligent custody with our testnet demo. 
                <br></br>
                Experience the benefits firsthand and see how NATIVE MULTISIG 
                <br></br>
                can transform your asset management.
              </p>
              <Button
                onClick={handleContact}
                title="Try on Testnet"
                mode="dark"
                type="primary"
                className={S.btn}
              />
            </div>
            {/* <div className={S.diamond}>
              <img src={diamond} alt="diamond" />
            </div> */}
          </div>
          <div className={S.infos}>
            <div className={S.info}>
              <span>MULTISIG VAULT</span>
              <p>
                For <span>all Bitcoin</span> native assets
              </p>
            </div>
            <div className={S.border} />
            <div className={S.info}>
              <span>FULL COLECTIVE</span>
              <p>
                Including ordinals, runes, BRC20, and more.
              </p>
            </div>
            <div className={S.border} />
            <div className={S.info}>
              <span>OWNERSHIP</span>
              <p>
                Seamless management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
