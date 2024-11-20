import S from "./index.module.scss";
import puzzle from "@assets/syndicate/puzzle.png";

export const SecuritySection = () => {
  return (
    <section className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.banner}>
            <div>
              <h2 className="xxl white semi-bold">
                <img src={puzzle} alt="puzzle" />
                Alleviating <span className="base grey">pain points</span>
              </h2>
              <p className="light-grey base">
                The Syndicate Vault transforms group investment{" "}
                <span className="grey">and management, offering a robust</span>
              </p>
              <p className="light-grey base">
                solution for collective ownership,{" "}
                <span className="grey">
                  transparent oversight, and collaborative success.
                </span>
              </p>
            </div>
          </div>
          <div className={S.panel}>
            <div className={S.panelItem}>
              <div className="white">Overcoming Isolation</div>
              <p className="base grey">
                Engage in a collaborative environment that combats the
                challenges of individual investment by fostering shared goals
                and resources.
              </p>
            </div>
            <div className={S.panelItem}>
              <div className="white">Simplifying Management</div>
              <p className="base grey">
                Streamline collective investments with a platform that handles
                contributions, decision-making, and management seamlessly.
              </p>
            </div>
            <div className={S.panelItem}>
              <div className="white">Ensuring Transparency</div>
              <p className="base grey">
                Gain clear visibility into all your financial activities and
                decisions, addressing concerns about opaque management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
