import {
  HeroSection,
  FeatureSection,
  StreamlineSection,
  OptimizeSection,
  EcosystemSection,
  FinanceSection,
  FAQSection,
  EscrowSection
} from "@features/sections/intelligent";
import S from "./index.module.scss";

const IntelligentCustody = () => {
  return (
    <div className={S.body}>
      <HeroSection />
      <FeatureSection/>
      <FinanceSection/>
      <StreamlineSection/>
      <OptimizeSection/>
      <EscrowSection/>
      <EcosystemSection/>
      <FAQSection/>
    </div>
  );
};

export default IntelligentCustody;
