import { Button } from "@features/ui";
import S from "./index.module.scss";

export const CtaSection = () => {
  const handleClick = () => {};

  return (
    <section className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <h3 className="white xxl semi-bold">
            Build <span className="base">the</span> Future
          </h3>
          <p className="light-grey base md">
            Join our waitlist today and secure your place at the forefront of
            intellectual property management innovation.
          </p>
          <p className="light-grey base md">
            Don't miss out on this unique opportunity to be among the first to
            explore Covault's revolutionary Smart Vault Protocol.
          </p>
          <Button
            title="VaultONE Waitlist"
            mode="dark"
            type="primary"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};
