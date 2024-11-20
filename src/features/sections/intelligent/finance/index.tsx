import clsx from "clsx";
import S from "./index.module.scss";
import { Button } from "@features/ui";
import { useNavigate } from "react-router-dom";
import LockIcon from "@assets/intelligent/Union.png"
import SubtractIcon from "@assets/intelligent/Subtract.png"
import PeopleIcon from "@assets/intelligent/People.png"

export const FinanceSection = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/syndicate-vault")
  }


  return (
    <>
      <section id="waitlist_section" className={S.body}>

        <div className={S.wrapper}>
          <div className={S.content}>

            <div className={S.subTitle} style={{ display: "flex", flexDirection: "row", WebkitJustifyContent: "space-between", width: "100%", alignItems: "center" }}>
              <div>
                <h3 className="black xxl">
                <span className="semi-bold"> Facilitate</span> Collective Investments
                  <br></br>
                  <span className="semi-bold">with{" "}</span>a Syndicate Vault
                </h3>
              </div>
              <div style={{cursor:"pointer"}}>
                <Button
                  title="Syndicate Vault"
                  mode="dark"
                  type="primary"
                  onClick={handleClick}
                />
                </div>
            </div>

            <div className={S.features} style={{ width: "100%", justifyContent: "space-between" }}>

              <div className={clsx(S.card, S.active)}>
                <div><img src={LockIcon} alt="lock"/></div>
                <p className="base sm">
                  Syndicate Vaults are designed for groups and organizations needing shared control over digital assets.
                </p>
              </div>

              <div className={clsx(S.card)}>
              <div><img src={SubtractIcon} alt="subtract"/></div>
                <p className="base sm">

                  Our solution ensures secure, transparent, and efficient collective asset management, eliminating the risk of individual mismanagement.

                </p>
              </div>

              <div className={clsx(S.card)}>
              <div><img src={PeopleIcon} alt="people"/></div>
                <p className="base sm">

                  Achieve seamless colaboration, reduce risk, and enhanced security for your assets. To go far, go together.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
