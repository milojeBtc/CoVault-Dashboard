import { BENEFIT_DATA } from "@utils/dataUtils";
import S from "./index.module.scss";
import { EcosystemCard } from "@features/ui/ecoCard";
import { Button } from "@features/ui";
import Door from "@assets/syndicate/door.png";

export const BenefitSection = () => {
  const handleClick = () => {
    window.location.replace('http://146.19.215.121:3000');
  };

  return (
    <section className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.list}>
            {BENEFIT_DATA.map((data, index) => (
              <div
                key={index}
                className={index === BENEFIT_DATA.length - 1 ? S.cols2 : ""}
              >
                <EcosystemCard
                  icon={data.icon}
                  hoverIcon={data.hoverIcon}
                  title={data.title}
                  content={data.content}
                />
              </div>
            ))}
          </div>
          <div className={S.banner}>
            <h3 className="grey xxl semi-bold">
              Key <span className="white">Benifits</span> of Syndicate{" "}
              <span className="white">Vault.</span>
            </h3>
            <p className="grey base">
              Unlocking the Power of Collective Investment
            </p>
            <div className="">
              <Button
                title="Try on Testnet"
                mode="dark"
                type="Secondary"
                onClick={handleClick}
              />
            </div>
            <img src={Door} alt="Eco Img" />
          </div>
        </div>
      </div>
    </section>
  );
};
