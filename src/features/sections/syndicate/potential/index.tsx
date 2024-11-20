import S from "./index.module.scss";
import lockup from "@assets/lockup.svg";
import world from "@assets/world.svg";
import { PotentialCard } from "@features/ui";
import { POTENTIAL_DATA } from "@utils/dataUtils";

export const PotentialSection = () => {
  return (
    <section className={S.body} id="features_section">
      <div className={S.wrapper}>
        <div className={S.main}> 
          <div className={S.title}>
            <h3 className="xxl grey base">
              <img src={lockup} alt="lockup" /> Unlock the{" "}
              <span className="white semi-bold">
                full potential of <img src={world} alt="world" />
                intellectual
              </span>{" "}
              property markets
            </h3>
          </div>
          <div className={S.cards}>
            {POTENTIAL_DATA.map((data, index) => (
              <PotentialCard
                key={index}
                icon={data.icon}
                hoverIcon={data.hoverIcon}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
