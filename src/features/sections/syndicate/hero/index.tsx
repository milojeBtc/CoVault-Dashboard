import { useState } from "react";
import { Modal } from "@features/ui";

import S from "./index.module.scss";
import { Button } from "@features/ui";

export const HeroSection = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [verificationCodeInput, setVerificationCodeInput] = useState(""); // For the input
  
  const close = () => {
    setOpenModal(false);
  };

  const handleContact = () => {
    setOpenModal(true);
  };

  function handleVerifyCode(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section id="about_section" className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.hero}>
            <div className={S.info}>
              <h1>
                Unlock the <span>power of collective</span> ownership
                <br></br>
                and investment <span>with Syndicate Vault</span>
              </h1>
              <p>
                Syndicate Vault merges group investments, transparent
                <br></br>
                management, and{" "}
                <span>collective ownership for shared success.</span>{" "}
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
              <span>AIRDROP VAULTS</span>
              <p>
                Receive <span>ecosystem specific</span> airdrops
              </p>
            </div>
            <div className={S.border} />
            <div className={S.info}>
              <span>SYNDICATE VAULTS</span>
              <p>
                Onchain <span>Investment Collective</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {openModal && <Modal close={close} type="first" 
       verificationCode={verificationCodeInput}
       setVerificationCode={setVerificationCodeInput}
       onVerifyCode={handleVerifyCode}
      />}
    </section>
  );
};
