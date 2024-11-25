import clsx from "clsx";
import S from "./index.module.scss";
import {
  HiMiniArrowRightStartOnRectangle,
  HiArrowPath,
  HiOutlineTicket,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Notiflix from "notiflix";
import { useState } from "react";
import { Button, Modal } from "@features/ui";
import { FaCheck } from "react-icons/fa";
import { saveWLController } from "../../../../controller";
import { IWhitelistType } from "../../../../config";
import { validateEmail, validateTelegramUrl, validateTwitterUrl, validateUsername } from "@utils/validUtils";
import emailjs from "emailjs-com";

export const WaitlistSection = () => {
  const [userInfo, setUserInfo] = useState<IWhitelistType>({
    name: "~",
    email: "~",
    twitter: "~",
    tel: "~",
  });


  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"first" | "confirm" | "wrong" | "list" | "email verification">("confirm");

  const [verificationCodeInput, setVerificationCodeInput] = useState(""); // For the input
  const [generatedCode, setGeneratedCode] = useState<number>(); // Store generated code


  const close = () => {
    setOpenModal(false);
    setVerificationCodeInput("");
  };

  const sendVerificationEmail = async () => {
    const code = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit code
    try {
      const result = await emailjs.send("service_ltobmmn", "template_lk2wtkg", {
        to_email: userInfo.email,
        from_name: "CoVault Supporting Team",
        to_name: userInfo.name,
        message: code
      }, "RW2UABbP1FILG1tve");

      setGeneratedCode(code);
      return result;
    } catch (error) {
      console.error("EmailJS error:", error);
      return null;
    }
  };


  const handleSetChangeData = (name: string, data: string) => {
    setUserInfo((prevData) => ({ ...prevData, [name]: data }));
  };



  const handleClick = async () => {

    const emailValid = await validateEmail(userInfo.email);
    const nameValid = await validateUsername(userInfo.name);
    const twitterValid = await validateTwitterUrl(userInfo.twitter);
    const telValid = await validateTelegramUrl(userInfo.tel);

    console.log("emailValid ==> ", emailValid);
    console.log("nameValid ==> ", nameValid);
    console.log("twitterValid ==> ", twitterValid);
    console.log("telValid ==> ", telValid);

    if (!emailValid) {
      Notiflix.Notify.warning("Email is not valid.")
      return;
    }

    if (!nameValid) {
      Notiflix.Notify.warning("Name is not valid.")
      return;
    }

    if (!twitterValid) {
      Notiflix.Notify.warning("Twitter is not valid.")
      return;
    }

    if (!telValid) {
      Notiflix.Notify.warning("Telegram is not valid.")
      return;
    }

    const sentResult = await sendVerificationEmail();


    if (sentResult) {
      setModalType("email verification");
      setOpenModal(true);
      Notiflix.Notify.success("Verification code has been sent to your email.");
    } else {
      Notiflix.Notify.failure("Error sending verification code.");
    }

  };

  const handleVerifyCode = async () => {
    if (verificationCodeInput === String(generatedCode)) {
      const result = await saveWLController(userInfo);
      console.log("saveWLController result ==> ", result)
      if (result.data.success) {
        setModalType("confirm")
        Notiflix.Notify.success(result.data.message);
        setOpenModal(true);
        setModalType("confirm"); // Show confirmation modal
      } else {
        setModalType("wrong")
        Notiflix.Notify.failure(result.data.message);
        setOpenModal(true);
        setModalType("wrong"); // Show confirmation modal
      }
      
    } else {
      Notiflix.Notify.warning("Incorrect verification code. Please try again.");
    }
  };

  return (
    <>
      <section id="waitlist_section" className={S.body}>
    
        <div className={S.wrapper}>

          <div className={S.position}>
            <div className={S.info}>
              <span className="xl base grey">Secure Your Position</span>
              <h3 className="black xxl semi-bold">
                Join Our Waitlist 
                {/* <span className="base">for</span> VaultONE */}
              </h3>
              <p className="grey base">
                VaultONE is our maiden voyage, granting vault members a host of
                benefits coming from the COVAULT ECOSYSTEM!
                <br />
                <br />
                By joining our waitlist, you'll{" "}
                <span className="medium black">
                  unlock exclusive benefits
                </span>{" "}
                and be at the forefront of the future of intellectual property
                management.
              </p>
            </div>

            <div className={S.inputs}>

              <label htmlFor="name" className={userInfo["name"] ? "" : S.error}>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={userInfo["name"] === "~" ? "" : userInfo["name"]}
                  onChange={(e) => handleSetChangeData("name", e.target.value)}
                />
                <p className="red">This field is required.</p>
              </label>
              <label
                htmlFor="email"
                className={userInfo["email"] ? "" : S.error}
              >
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={userInfo["email"] === "~" ? "" : userInfo["email"]}
                  onChange={(e) => handleSetChangeData("email", e.target.value)}
                />
                <p className="red">This field is required.</p>
              </label>
              <label
                htmlFor="twitter"
                className={userInfo["twitter"] ? "" : S.error}
              >
                <span>Twitter</span>
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Twitter"
                  value={userInfo["twitter"] === "~" ? "" : userInfo["twitter"]}
                  onChange={(e) =>
                    handleSetChangeData("twitter", e.target.value)
                  }
                />
                <p className="red">This field is required.</p>
              </label>
              <label
                htmlFor="telegram"
                className={userInfo["tel"] ? "" : S.error}
              >
                <span>Telegram</span>
                <input
                  type="text"
                  name="telegram"
                  id="telegram"
                  placeholder="Telegram"
                  value={userInfo["tel"] === "~" ? "" : userInfo["tel"]}
                  onChange={(e) => handleSetChangeData("tel", e.target.value)}
                />
                <p className="red">This field is required.</p>
              </label>
              <div className={S.checks}>
                <div className={S.list}>
                  <p className="black medium">
                    I'm looking to use Covault Protocol as a:
                  </p>
                  <div className={S.select}>
                    <label htmlFor="builder">
                      <div className={S.cheker}>
                        <FaCheck size={12} color="var(--black)" />
                      </div>
                      <input type="checkbox" name="builder" id="builder" />
                      <span>Builder</span>
                    </label>
                    <label htmlFor="investor">
                      <div className={S.cheker}>
                        <FaCheck size={12} color="var(--black)" />
                      </div>
                      <input type="checkbox" name="investor" id="investor" />
                      <span>Investor</span>
                    </label>
                    <label htmlFor="follower">
                      <div className={S.cheker}>
                        <FaCheck size={12} color="var(--black)" />
                      </div>
                      <input type="checkbox" name="follower" id="follower" />
                      <span>Follower</span>
                    </label>
                  </div>
                </div>
                <div>
                  <Button
                    title="Join the Waitlist"
                    mode="dark"
                    type="primary"
                    onClick={handleClick}
                  />
                </div>
              </div>
            </div>

          </div>

          <div className={S.content}>
            <div className={clsx(S.card, S.active)}>
              <HiMiniArrowRightStartOnRectangle
                size={24}
                color="var(--white)"
              />
              <p className="base">
                <span className="bold">Exclusive Early Access</span>
                <br />
                <br />
                Be among the first vault members ever in the history of the
                Bitcoin Blockchain. We journey together, and together we win.
              </p>
            </div>

            <div className={clsx(S.card)}>
              <HiArrowPath size={24} color="var(--black)" />
              <p className="base">
                <span className="bold">Direct Updates</span>
                <br />
                <br />
                Receive timely updates on the progress of "Vault One" and stay
                informed about our launch activities.
              </p>
            </div>

            <div className={clsx(S.card)}>
              <HiOutlineTicket size={24} color="var(--black)" />
              <p className="base">
                <span className="bold">Exclusive Offers</span>
                <br />
                <br />
                Enjoy special offers and incentives available only to our
                waitlist members.
              </p>
            </div>

            <div className={clsx(S.card)}>
              <HiOutlineUserGroup size={24} color="var(--black)" />
              <p className="base">
                <span className="bold">Community Access</span>
                <br />
                <br />
                Join a community of forward-thinking creators, investors, and
                builders who are shaping the future of intellectual property.
              </p>
            </div>
          </div>
          
        </div>

      </section>

      {openModal && <Modal
        close={close}
        type={modalType}
        verificationCode={verificationCodeInput}
        setVerificationCode={setVerificationCodeInput}
        onVerifyCode={handleVerifyCode}
      />}
    </>
  );
};
