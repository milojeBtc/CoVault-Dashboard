import {
  EcosystemSection,
  FAQSection,
  HeroSection,
  PotentialSection,
  SecuritySection,
  WaitlistSection,
} from "@features/sections/home";
import S from "./index.module.scss";
import { useState } from "react";
import { Modal } from "@features/ui";
import { CtaSection } from "@features/sections/cta";

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [verificationCodeInput, setVerificationCodeInput] = useState(""); // For the input
  const close = () => {
    setOpenModal(false);
  };

  function handleVerifyCode(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={S.body}>
      <HeroSection />
      <SecuritySection />
      <WaitlistSection />
      <PotentialSection />
      <EcosystemSection />
      <CtaSection />
      <FAQSection />
      {openModal && <Modal close={close} type="first" 
       verificationCode={verificationCodeInput}
       setVerificationCode={setVerificationCodeInput}
       onVerifyCode={handleVerifyCode}
      />}
    </div>
  );
};

export default Home;
