import S from "./index.module.scss";
import Asset from "@assets/intelligent/asset.png";

export const StreamlineSection = () => {

  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper}>
          <div className={S.position}>
            <div>

              <div className={S.border}>
                <div className={S.main} style={{display:"grid", justifyContent:"center", alignItems:"center", gap:"50px"}}>
                  <div className={S.image}>
                    <img src={Asset} alt="Asset" />
                  </div>

                  <div className={S.content}>

                    <div className={S.title}>
                      <h1>
                        <span className="grey xxl ">Streamline</span>{" "}
                        <span className="white xxl base semi-bold">Rewards Distribution</span>
                        <br></br>
                        <span className="grey xxl base"> with Airdrop Vault</span>
                      </h1>
                    </div>

                    <div className={S.description}>
                      <p className="grey">
                      Our Airdrop Vaults simplify the process of distributing rewards, 
                      saving time and ensuring quick and secure distribution with 
                      either batch send or custom claim functionality.  
                      </p>
                    </div>
                  </div>


                </div>
              </div>

              <div className={S.border} >

                <div className={S.main1} style={{display:"grid", justifyContent:"center", alignItems:"center"}}>

                  <div className={S.title}>
                    <h1>
                      <span className="grey xxl base semi-bold">Airdrop Vault also provide a way to</span>
                      <br></br>
                      <span className="white xxl base semi-bold">sell a basket of future tokens.</span>
                    </h1>
                  </div>

                  <div className={S.content}>
                    <div className={S.description}>
                      <p className="grey" style={{display:"flex", justifyContent:"center"}}>
                      Airdrop vaults empower launchpads, accelerators, 
                      and other ecosystems, to package a series of tokens 
                      (or future tokens for a set period of time), 
                      and sell the rights to receive this curated basket of assets 
                      through a single airdrop vault member token.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            {/* <div style={{ display: "flex", marginLeft: "16px", marginTop: "70px", justifyContent: "center", alignItems: "center" }}>
              <Button
                onClick={handleContact}
                title="Optimize Rewards & yields"
                mode="dark"
                type="primary"
                className={S.btn}
              />


            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
