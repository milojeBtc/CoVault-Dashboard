import S from "./index.module.scss";
import KeyIcon from "@assets/intelligent/key.svg";
import UnionIcon from "@assets/intelligent/union.svg"
import Asset from "@assets/syndicate/asset.png";

export const FeatureSection = () => {


  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper} style={{ backgroundColor: "black" }}>
          <div className={S.position} >
            <div className={S.border}>
              <div className={S.main}>
                <div className={S.content}>
                  <div>
                    <div className={S.title} style={{ marginBottom: "20px" }}>
                      <h1>
                        <img src={KeyIcon} width={33} height={39} alt="key" />
                        <span className="grey xxl">Unlock</span>{" "}
                        <span className="white xxl semi-bold">Intelligent Custody</span>{" "}
                        <span className="grey xxl base semi-bold"></span>
                        <br></br>
                        <span className="grey xxl base semi-bold">with our</span>{" "}

                        <img src={UnionIcon} width={33} height={39} alt="union" />{" "}

                        <span className="white xxl semi-bold">Native Multisig</span>

                      </h1>
                    </div>
                    <div className={S.description} style={{ display:"flex",flexDirection:"column", marginBottom: "20px", gap:"20px" }}>
                      <p className="grey">
                        <span className="white">Covault's Intelligent Custody Framework</span> gives users the flexibility to deploy either their multisig as
                         <span className="white"> Native Segwit</span> or <span className="white">Taproot on Bitcoin Layer 1.</span>.
                      </p>

                      <p className="grey">
                        <span className="white">Multisig</span> 
                        provides robust security, eliminating single points of failure and simplifying protocols. 
                        Enjoy unparalleled protection and peace of mind, knowing your 
                         <span className="white"> Bitcoin native assets are safe.</span>

                      </p>


                    </div>
                  </div>
                </div>
                <div className={S.image}  >
                  <img src={Asset} alt="Asset" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};
