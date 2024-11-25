import S from "./index.module.scss";
import { HiXMark } from "react-icons/hi2";
import VerificationInput from 'react-verification-input'
import { Button } from "../button";
import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HiLink } from "react-icons/hi";

interface IProps {
  close: () => void;
  type: "first" | "confirm" | "wrong" | "list" | "email verification";
  verificationCode: string | null;  // New prop to validate the code
  setVerificationCode: (code: string) => void; // Method to set input value
  onVerifyCode: (e: string) => void; // New prop to handle verification
}

export const Modal: FC<IProps> = ({ close, type, verificationCode, setVerificationCode, onVerifyCode }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.style.transform = "translateY(0)";
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleGoWaitlist = () => {
    navigate(`#waitlist_section`);
    close();
  };

  const handleGoHero = () => {
    navigate(`#hero_section`);
    close();
  };

  const handleCheck = (e: string) => {
    console.log('Check', e)
  }

  return (
    <div className={S.body}>
      <div className={S.wrapper} ref={modalRef}>
        <div className={S.header}>
          <div />
          <HiXMark size={24} color="#F8F3C6" className="cursor" onClick={close} />
        </div>
        <div className={S.main}>
          <img src="/logo.png" alt="logo" />
          {type === "first" ? (
            <>
              <h3>VaultONE <span>is coming soon!</span></h3>
              <p>Secure your spot for Covault's "Vault One" launch this September.</p>
            </>
          ) : type === "confirm" ? (
            <>
              <h3><span>Registration</span> <span>confirmed!</span></h3>
              <p>Thank you for joining our waitlist. You'll soon receive updates and exclusive offers.</p>
            </>
          ) : type === "wrong" ? (
            <>
              <h3><span>Oops, something</span> <span>went wrong!</span></h3>
              <p>There was an issue with your registration. Please try again later.</p>
            </>
          ) : type === "email verification" ? (
            <>
              <p style={{ fontSize: '24px' }}>Enter <span>Verification Code</span> </p>
              {/* <input
              type="text"
              placeholder="Verification Code"
              value={verificationCode||''}
              onChange={(e) => setVerificationCode(e.target.value)} // Set input value
              style={{margin:"5px",padding:"5px"}}
            />
            <div style={{margin:"5px"}}>
            <Button
              title="Verify Code"
              mode="dark"
              type="primary"
              onClick={onVerifyCode} // Calls the verify function from props
            />
            </div> */}
              <VerificationInput
                value={verificationCode || ''}
                autoFocus={true}
                classNames={{
                  container: S.container,
                  character: S.character,
                  characterInactive: S.character_inactive,
                  characterSelected: S.character_selected,
                  characterFilled: S.character_filled,
                }}
                onChange={(e) => setVerificationCode(e)}
                onComplete={e => onVerifyCode(e)}
              />
            </>
          ) : (
            <>
              <h3><span>Oops, something</span> <span>went wrong!</span></h3>
              <p>It seems you've already signed up. Stay tuned for our updates!</p>
            </>
          )}

          <div className={S.btnGroup}>
            {type === "first" ? (
              <>
                <Button
                  onClick={handleGoHero}
                  title="Go to Home"
                  mode="dark"
                  type="secondary"
                />
                <Button
                  onClick={handleGoWaitlist}
                  title="Go to Waitlist"
                  mode="dark"
                  type="primary"
                />
              </>
            ) : type === "confirm" ? (
              <>
                <Button
                  onClick={handleGoWaitlist}
                  title="Close"
                  mode="dark"
                  type="secondary"
                />
                <Button
                  onClick={() => { /* Share link logic */ }}
                  title="Share with Link"
                  icon={<HiLink size={18} color="var(--black)" />}
                  mode="dark"
                  type="primary"
                />
              </>
            ) : type === "wrong" ? (
              <>
                <Button
                  onClick={handleGoWaitlist}
                  title="Try Again"
                  mode="dark"
                  type="secondary"
                />
              </>
            ) : (
              <>
                <Button
                  onClick={handleGoHero}
                  title="Return to Home"
                  mode="dark"
                  type="secondary"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};