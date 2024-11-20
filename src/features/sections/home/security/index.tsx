import S from "./index.module.scss";
import up from "@assets/up.svg";
import lock from "@assets/lock.svg";
import security from "@assets/security.png";

export const SecuritySection = () => {
  return (
    <section className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.banner}>
            <div>
              <h2 className="xxl white semi-bold">
                <img src={up} alt="Up" />
                Empowering{" "}
                <span className="base grey">
                  efficient multisided markets with
                </span>{" "}
                compliance, innovation, and
                <img src={lock} alt="Lock" />
                security
              </h2>
              <p className="light-grey base">
                At COVAULT We are introducing a tool kit for visionaries{" "}
                <span className="grey">
                  to build the next wave of structured financial markets for the
                  global intellectual property sector.
                </span>
              </p>
            </div>
            <img src={security} alt="Banner" />
          </div>
          <div className={S.panel}>
            <p className="base grey">
              Our mission is about{" "}
              <span className="white bold">building efficient markets,</span>{" "}
              that helps bring liquidity to intellectual property creators and{" "}
              <span className="white bold">
                new investment opportunities to global investors and patrons.
              </span>
            </p>
            <div className={S.line} />
            <p className="base grey">
              <span className="white bold">We integrate financial</span>{" "}
              structuring, contract execution, and secure storage into a
              seamless, efficient system, supporting builders in{" "}
              <span className="white bold">
                creating multi-sided markets for intellectual property RWA.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
