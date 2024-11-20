import S from "./index.module.scss";
import KeyIcon from "@assets/multisig/key.svg";

export const PotentialSection = () => {
  return (
    <section className={S.body} id="features_section">
      <div className={S.border} />
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.info}>

            <div className={S.potential} style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex" }}><h1 className="white base semi-bold">Native Multisig</h1></div>
              <div style={{ display: "flex", marginLeft: "auto", alignItems: "center" }}><img src={KeyIcon} width={33} height={39} alt="key" /></div>
              <div style={{ display: "flex" }}><h1 className="white semi-bold" style={{ marginLeft: "auto" }}>for Layer1 Bitcoin</h1></div>
            </div>
            <div className={S.description}>
              <p className="white lg">
                Unlock the power of multisig technology for Layer1 Bitcoin
                transactions, providing you with the ultimate in security and
                reliability.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
