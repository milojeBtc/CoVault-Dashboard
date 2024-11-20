import { Button } from "@features/ui";
import S from "./index.module.scss";
import Door from "@assets/intelligent/door.png";

export const OptimizeSection = () => {
  function handleContact(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper}>
          <div className={S.position}>
            <div className={S.border} >

              <div className={S.main}>

                <div className={S.content}>

                  <div className={S.title}>
                    <h1>
                      <span className="black xxl semi-bold">Earn Yields on your
                        Native Assets with Non Custodial Staking Vaults</span>{" "}

                    </h1>
                  </div>

                  <div className={S.description}>
                    <p className="grey">
                      Staking should be both rewarding and secure.

                      Our <span className="black bold">Staking Vaults</span> offer a <span className="black bold">non-custodial</span> solution that opens the door to advanced
                      <span className="black bold"> DeFi workflows.</span>
                      Tap into high <span className="black bold">yield</span> opportunites easily and maximize returns securely
                      <span className="black bold"> without compromising custody</span>.
                    </p>
                  </div>

                  <div style={{ marginBottom: "50px" }}>
                    <Button
                      onClick={handleContact}
                      title="Staking Vaults Coming Soon"
                      mode="dark"
                      type="secondary"
                      className={S.btn}
                    />
                  </div>

                </div>

              </div>

              <div className={S.image}>
                <img src={Door} alt="Door" />
              </div>

            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};
