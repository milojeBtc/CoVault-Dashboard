import { ECOSYSTEM } from "@utils/dataUtils";
import S from "./index.module.scss";
import { EcosystemCard } from "@features/ui/ecoCard";
import { Button } from "@features/ui";
import { PiLockKeyFill } from "react-icons/pi";


export const EcosystemSection = () => {
  
  
  const handleRedirect = () => {
    window.location.replace('http://146.19.215.121:3000');
  }
  return (
    <section className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.list}>
            {ECOSYSTEM.map((data, index) => (
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

            <h3 className="grey xxl">
               <span className="white semi-bold"><PiLockKeyFill size={30} color="var(--yellow)"/> Build advanced</span><br></br>
               economies with{" "}
              <span className="white semi-bold">Intelligent Custody</span>
            </h3>
            <p className="grey base" style={{fontSize:"19px"}}>
              
              Covault Protocol offers sophisticated solutions for complex token economies. Our modular
              architecture integrates vaults, runes, and automated community rewards to streamline operations and optimized
              asset management.
            </p>
            
            <div className="">
              <Button
                title="Try on Testnet"
                mode="dark"
                type="primary"
                onClick={handleRedirect}
              />
            </div>
            {/* <img src={Eco} alt="Eco Img" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
