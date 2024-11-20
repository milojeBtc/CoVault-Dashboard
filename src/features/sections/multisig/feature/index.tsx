import clsx from "clsx";
import S from "./index.module.scss";
import {
  HiMiniArrowRightStartOnRectangle,
  HiArrowPath,
  HiOutlineTicket,
} from "react-icons/hi2";

import ArrowIcon from "@assets/multisig/arrow.svg";

export const FeatureSection = () => {
  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper}>
          <div className={S.position}>
            <div className={S.info}>
              <div className={S.title}>
                <img src={ArrowIcon} width={36} height={39} alt="arrow" />
                <h3 className="black xxl semi-bold">
                  <span className="grey base">Native</span> Multisig
                </h3>
              </div>
              <p className="grey base">
                Experience unparalleled safety and security with our multisig
                solution designed for the collective ownership of any Bitcoin
                meta asset, including ordinals, runes, BRC20, and more.
              </p>
            </div>
          </div>
          <div className={S.content}>
            <div className={S.subTitle}>
              <div className="grey base lg">Secure Your Position</div>
              <h3 className="black xxl semi-bold">Key Features</h3>
            </div>
            <div className={S.features}>
              <div className={clsx(S.card, S.active)}>
                <HiMiniArrowRightStartOnRectangle
                  size={24}
                  color="var(--white)"
                />
                <p className="base">
                  <span className="bold">Safer</span>
                  <br />
                  <br />
                  Enhanced protection for your assets.
                </p>
              </div>
              <div className={clsx(S.card)}>
                <HiArrowPath size={24} color="var(--black)" />
                <p className="base">
                  <span className="bold">More Secure</span>
                  <br />
                  <br />
                  Robust security measures to ensure peace of mind.
                </p>
              </div>
              <div className={clsx(S.card)}>
                <HiOutlineTicket size={24} color="var(--black)" />
                <p className="base">
                  <span className="bold">Collective Ownership</span>
                  <br />
                  <br />
                  Seamless management and shared control of Bitcoin meta assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
