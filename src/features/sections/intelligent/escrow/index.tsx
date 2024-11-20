import S from "./index.module.scss";

export const EscrowSection = () => {
  

  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper}>
          
          <div className={S.position}>
            <div className={S.border} >

              <div className={S.image}>
                <div className={S.title}>
                  <h1 style={{marginBottom:"30px"}}>
                    <span className="black xxl semi-bold">Secure</span>
                    <span className="grey xxl base semi-bold">{" "}transactions
                      <br></br>with</span>
                    <span className="black xxl semi-bold">{" "}Escrow Vaults</span>
                  </h1>
                  <div style={{ paddingTop: "24px", width:"full" }}>
                    <p className="grey" style={{ fontSize: "20px" }}>
                      Ensure your digital asset transactoins are safe and transparent.
                      Covault's Escrow Vault provides a trustless system that eliminates
                      thrid-party risks and guarantees protection for all parties involved.
                    </p>
                  </div>
                </div>

              </div>

              

            </div>
          </div>
        </div>
      </section>
    </>
  );
};