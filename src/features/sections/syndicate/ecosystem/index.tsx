import { ECOSYSTEM_DATA } from "@utils/dataUtils";
import S from "./index.module.scss";
import { EcosystemCard } from "@features/ui/ecoCard";
import { Button } from "@features/ui";
import Eco from "@assets/eco.png";

export const EcosystemSection = () => {
  const handleClick = () => {};

  return (
    <section className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.list}>
            {ECOSYSTEM_DATA.map((data, index) => (
              <EcosystemCard
                key={index}
                icon={data.icon}
                hoverIcon={data.hoverIcon}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>
          <div className={S.banner}>
            <h3 className="grey xxl semi-bold">
              Our <span className="white">COVAULT ecosystem</span> is evolving{" "}
              <span className="white">RWAfi.</span>
            </h3>
            <p className="grey base">
              Our ecosystem will includes all the key area of support necessary
              to build robust and compliant multi sided marketplaces including
              futures markets for IP.
            </p>
            <p className="italic sm light-grey light">
              *THIS IS TARGETED to builders who want to build on COVAULT
              PROTOCOL
            </p>
            <div className="">
              <Button
                title="Go to Waitlist"
                mode="dark"
                type="Secondary"
                onClick={handleClick}
              />
            </div>
            <img src={Eco} alt="Eco Img" />
          </div>
        </div>
      </div>
    </section>
  );
};
