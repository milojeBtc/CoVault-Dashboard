import {
  FAQSection,
  HeroSection,
  PotentialSection,
  FeatureSection,
} from "@features/sections/multisig";
import S from "./index.module.scss";
import { CtaSection } from "@features/sections/cta";

const Multisig = () => {

  return (
    <div className={S.body}>
      <HeroSection />
      <FeatureSection />
      <PotentialSection />
      <CtaSection />
      <FAQSection />
      {/* {openModal && <Modal close={close} type="first" />} */}
    </div>
  );
};

export default Multisig;
