import { Outlet } from "react-router-dom";
import S from "./index.module.scss";
import { Leading } from "@features/ui";
import Header from "../header";
import Footer from "../footer";

let fullfilled = false;
let promise: Promise<void> | null = null;

const useTimeout = (ms: number) => {
  if (!fullfilled) {
    throw (promise ||= new Promise((res: any) => {
      setTimeout(() => {
        fullfilled = true;
        res();
      }, ms);
    }));
  }
};

const MainLayout = () => {
  useTimeout(3000);
  return (
    <>
      <Leading effect="-100vh" />
      <div className={S.body}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
