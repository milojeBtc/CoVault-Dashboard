import clsx from "clsx";
import S from "./index.module.scss";
import KeyIcon from "@assets/multisig/key.svg";
import Asset from "@assets/syndicate/asset.png";

export const FeatureSection = () => {
  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper}>
          <div className={S.position}>
            <div className={S.border}>
              <div className={S.main}>
                <div className={S.content}>
                  <div className={S.title}>
                    <img src={KeyIcon} width={33} height={39} alt="key" />
                    <h1>
                      <span className="black xxl semi-bold">Syndicate</span>
                      <span className="grey xxl base semi-bold">Vault</span>
                    </h1>
                  </div>
                  <div className={S.description}>
                    <p className="grey">
                      The Syndicate Vault is a comprehensive solution that
                      integrates collective ownership with transparent
                      management.{" "}
                      <span className="black">
                        It allows multiple participants to pool resources,
                      </span>{" "}
                      make joint decisions, and manage investments, all within a
                      <span className="black">
                        secure and transparent framework.
                      </span>
                    </p>
                  </div>
                </div>
                <div className={S.image}>
                  <img src={Asset} alt="Asset" />
                </div>
              </div>
            </div>
          </div>
          <div className={S.content}>
            <div className={S.subTitle}>
              <div className="grey base lg">How it Works</div>
              <h3 className="black xxl semi-bold">
                Collaborative Finance
                <br />
                and Ownership
              </h3>
            </div>
            <div className={S.features}>
              <div className={clsx(S.card, S.active)}>
                <div>1</div>
                <p className="base sm">
                  <span className="base sm bold">Join</span>
                  <br />
                  <span className="base sm bold">the Syndicate</span>
                  <br />
                  <br />
                  <span className="sm">
                    Connect with a network of investors and stakeholders eager
                    to pool resources and share opportunities.
                  </span>
                </p>
              </div>
              <div className={clsx(S.card)}>
                <div>2</div>
                <p className="base sm">
                  <span className="base sm bold">Collective</span>
                  <br />
                  <span className="base sm bold">Ownership</span>
                  <br />
                  <br />
                  <span className="sm">
                    Contribute to the Syndicate Vault and gain proportional
                    ownership in the assets and investments managed within the
                    vault.
                  </span>
                </p>
              </div>
              <div className={clsx(S.card)}>
                <div>3</div>
                <p className="base sm">
                  <span className="base sm bold">Transparent Treasury</span>
                  <br />
                  <span className="base sm bold">Management</span>
                  <br />
                  <br />
                  <span className="sm">
                    Benefit from clear, real-time visibility into how funds are
                    allocated and managed, ensuring transparency and
                    accountability.
                  </span>
                </p>
              </div>
              <div className={clsx(S.card)}>
                <div>4</div>
                <p className="base sm">
                  <span className="base sm bold">Collaborative</span>
                  <br />
                  <span className="base sm bold">Decision-Making</span>
                  <br />
                  <br />
                  <span className="sm">
                    Participate in governance and decision-making processes,
                    voting on investment opportunities and strategic directions.
                  </span>
                </p>
              </div>
              <div className={clsx(S.card)}>
                <div>5</div>
                <p className="base sm">
                  <span className="base sm bold">Monitor and Grow</span>
                  <br />
                  <span className="base sm bold">Decision-Making</span>
                  <br />
                  <br />
                  <span className="sm">
                    Participate in governance and decision-making processes,
                    voting on investment opportunities and strategic directions.
                  </span>
                </p>
              </div>
              <div className={clsx(S.card)}>
                <div>6</div>
                <p className="base sm">
                  <span className="base sm bold">Distribute</span>
                  <br />
                  <span className="base sm bold">Returns</span>
                  <br />
                  <br />
                  <span className="sm">
                    Receive your share of profits and benefits transparently,
                    based on your ownership and contributions to the vault.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
