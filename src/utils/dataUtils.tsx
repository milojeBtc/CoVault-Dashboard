import { lazy } from "react";
import { IFaqType, IPotentialProps, IRouterType } from "./typeUtils";
import {
  HiAdjustments,
  HiChartBar,
  HiCheckCircle,
  HiCloud,
  HiCube,
  HiDatabase,
  HiEye,
  HiGlobeAlt,
  HiLockClosed,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineCloud,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineDatabase,
  HiOutlineEye,
  HiOutlineGlobeAlt,
  HiOutlineLockClosed,
  HiOutlineScale,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiScale,
  HiStar,
  HiUserGroup,  
  HiOutlineAdjustments 
} from "react-icons/hi";
import { IoIosCube } from "react-icons/io";
import { PiLightningLight } from "react-icons/pi";
import { HiOutlineWallet, HiWallet, HiOutlineGift } from "react-icons/hi2";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));
const LazyHomePage = lazy(() => import("@pages/home"));
const MultiSigPage = lazy(() => import("@pages/multisig"));
const SyndicateVaultPage = lazy(() => import("@pages/syndicate"));
const IntelligentPage=lazy(()=>import("@pages/intelligent"));

export const PAGE_DATA: IRouterType[] = [
  {
    title: "Page Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      {
        title: "Home Page",
        path: "",
        element: <IntelligentPage />,
      },
    ],
  },
  {
    title: "Page Layout",
    path: "/multi-sig",
    element: <LazyMainLayout />,
    children: [
      {
        title: "Multisig Page",
        path: "",
        element: <MultiSigPage />,
      },
    ],
  },
  {
    title: "Page Layout",
    path: "/syndicate-vault",
    element: <LazyMainLayout />,
    children: [
      {
        title: "Syndicate Vault Page",
        path: "",
        element: <SyndicateVaultPage />,
      },
    ],
  },
  {
    title: "Page Layout",
    path: "/covault-protocol",
    element: <LazyMainLayout />,
    children: [
      {
        title: "Covault Protocol",
        path: "",
        element: <LazyHomePage />,
      },
    ],
  },
];

export const POTENTIAL_DATA: IPotentialProps[] = [
  {
    icon: <HiOutlineLockClosed size={32} color="var(--grey)" />,
    hoverIcon: <HiLockClosed size={32} color="var(--black)" />,
    title: "Multisig Vaults",
    content:
      "Secure collaboration made simple. Our Multisig Vault requires multiple signatures for transactions, ensuring enhanced security and accountability for your assets.",
  },
  {
    icon: <HiOutlineCloud size={32} color="var(--grey)" />,
    hoverIcon: <HiCloud size={32} color="var(--black)" />,
    title: "AirDrop Vaults",
    content:
      "Maximize exposure with our Airdrop Vault. Seamlessly distribute tokens and rewards to your community, driving engagement and expanding your reach.",
  },
  {
    icon: <HiOutlineUserGroup size={32} color="var(--grey)" />,
    hoverIcon: <HiUserGroup size={32} color="var(--black)" />,
    title: "Syndicate Vaults",
    content:
      "Join forces with fellow investors in our Syndicate Vault. Pool resources, share opportunities, and leverage collective expertise for greater returns.",
  },
  {
    icon: <HiOutlineCube size={32} color="var(--grey)" />,
    hoverIcon: <HiCube size={32} color="var(--black)" />,
    title: "Structured Vaults",
    content:
      "Optimize your investments with our Structured Vault. Tailored to fit complex financial strategies, it provides flexible, structured solutions for diverse needs.",
  },
  {
    icon: <HiOutlineChartBar size={32} color="var(--grey)" />,
    hoverIcon: <HiChartBar size={32} color="var(--black)" />,
    title: "Staking Vaults",
    content:
      "Earn rewards while you hold. Our Staking Vault offers competitive yields on your staked assets, turning idle holdings into active investments.",
  },
  {
    icon: <HiOutlineScale size={32} color="var(--grey)" />,
    hoverIcon: <HiScale size={32} color="var(--black)" />,
    title: "Vault Exchange",
    content:
      "Trade vault positions with ease. Our Vault Exchange platform allows seamless buying, selling, and swapping of vaults, providing liquidity and flexibility for your investments.",
  },
];

export const ECOSYSTEM_DATA: IPotentialProps[] = [
  {
    icon: <HiOutlineLockClosed size={32} color="var(--yellow)" />,
    hoverIcon: <HiLockClosed size={32} color="var(--black)" />,
    title: "Compliance Support",
    content:
      "Trade crypto, forex, and commodities with up to 50x leverage and deep liquidity.",
  },
  {
    icon: <HiOutlineEye size={32} color="var(--yellow)" />,
    hoverIcon: <HiEye size={32} color="var(--black)" />,
    title: "Oracles",
    content:
      "Trade perps with Polynomial's smart wallet to access up to 50x leverage.",
  },
  {
    icon: <HiOutlineCheckCircle size={32} color="var(--yellow)" />,
    hoverIcon: <HiCheckCircle size={32} color="var(--black)" />,
    title: "Clearinghouse",
    content:
      "Facilitates secure settlement of financial transactions in crypto.",
  },
  {
    icon: <HiOutlineGlobeAlt size={32} color="var(--yellow)" />,
    hoverIcon: <HiGlobeAlt size={32} color="var(--black)" />,
    title: "Protocol",
    content: "Defines rules for data exchange among blockchain nodes.",
  },
  {
    icon: <HiOutlineStar size={32} color="var(--yellow)" />,
    hoverIcon: <HiStar size={32} color="var(--black)" />,
    title: "Venture Studio",
    content:
      "Invests in and supports crypto startups with resources and guidance.",
  },
  {
    icon: <HiOutlineWallet size={32} color="var(--yellow)" />,
    hoverIcon: <HiWallet size={32} color="var(--black)" />,
    title: "Fund",
    content:
      "Investment pool for digital assets or collective money for specific crypto purposes.",
  },
];

export const ECOSYSTEM: IPotentialProps[] = [
  {
    icon: <IoIosCube size={32} color="var(--yellow)" />,
    hoverIcon: <IoIosCube size={32} color="var(--black)" />,
    title: "Flexible Solutions",
    content:
      "Covault Protocol's modular design integrates seamlessly into your token economy, enhancing functionality.",
  },
  {
    icon: <PiLightningLight size={32} color="var(--yellow)" />,
    hoverIcon: <PiLightningLight size={32} color="var(--black)" />,
    title: "Streamlined Operations",
    content:
      "Our vaults simplify asset management, ensuring efficient and secure operations.",
  },
  {
    icon: <HiOutlineGift size={32} color="var(--yellow)" />,
    hoverIcon: <HiOutlineGift size={32} color="var(--black)" />,
    title: "Optimize Rewards",
    content:
      "Automate community rewards to save time and ensure fair distribution within your ecosystem",
  },
  {
    icon: <HiOutlineAdjustments size={32} color="var(--yellow)" />,
    hoverIcon: <HiOutlineAdjustments size={32} color="var(--black)" />,
    title: "Advanced Management",
    content: "Simplify implementation and boost functionality to meet the evolving needs of digital asset ecosystems.",
  },
];


export const BENEFIT_DATA: IPotentialProps[] = [
  {
    icon: <HiOutlineUserGroup size={32} color="var(--yellow)" />,
    hoverIcon: <HiUserGroup size={32} color="var(--black)" />,
    title: "Enhanced Collective Ownership",
    content:
      "Gain a stake in diversified assets and investments, sharing control and benefits with all participants.",
  },
  {
    icon: <HiOutlineChartBar size={32} color="var(--yellow)" />,
    hoverIcon: <HiChartBar size={32} color="var(--black)" />,
    title: "Transparent Management ",
    content:
      "Clear oversight of resource management with real-time updates and detailed reporting ensuring accountability.",
  },
  {
    icon: <HiOutlineDatabase size={32} color="var(--yellow)" />,
    hoverIcon: <HiDatabase size={32} color="var(--black)" />,
    title: "Collaborative Investments",
    content:
      "Pool resources to access larger opportunities and make joint decisions, leveraging combined expertise and capital.",
  },
  {
    icon: <HiAdjustments size={32} color="var(--yellow)" />,
    hoverIcon: <HiAdjustments size={32} color="var(--black)" />,
    title: "Diversified Risk",
    content:
      "Reduce individual risk by spreading investments across a range of assets and opportunities managed collectively.",
  },
  {
    icon: <HiOutlineCog  size={32} color="var(--yellow)" />,
    hoverIcon: <HiOutlineCog  size={32} color="var(--black)" />,
    title: "Streamlined Operations",
    content:
      "Simplify the complexities of group finance with a unified platform that integrates ownership, investment, and management.",
  },
];

export const FAQ_DATA: IFaqType[] = [
  {
    title: "What is Covault Smart Vault Protocol?",
    content:
      "Covault Smart Vault Protocol (SVP) is an innovative framework designed to revolutionize the management and investment of intellectual property (IP) and other revenue-generating assets. It facilitates the creation of structured vaults on the Bitcoin layer 1 blockchain, allowing users to bundle assets, set deal terms, and trade vault positions in a decentralized marketplace.",
  },
  {
    title: "How does Covault address the current limitations in IP investment?",
    content:
      "Covault addresses the lack of access to early capital and transparent markets for IP by enabling the securitization of IP into digital vaults. These vaults allow creators to monetize their IP assets while providing investors with opportunities to participate in future earnings.",
  },
  {
    title: "What are the key features of Covault's Smart Vault Protocol?",
    content:
      "Covault's SVP integrates financial structuring, contract execution, and storage on the blockchain. It enables precise customization of vault terms such as member positions, purchase price, payout periods, and governance rights. The protocol also includes KYC/AML compliance and a secondary marketplace for trading vault positions.",
  },
  {
    title: "How does Covault empower IP creators and investors?",
    content:
      "Creators benefit from access to capital through vault sales, while investors gain exposure to diversified IP portfolios. The protocol supports transparent transactions, timely royalty payments, and global market access, fostering a robust environment for IP monetization.",
  },
  {
    title: "What are Structured Vaults and how do they function?",
    content:
      "Structured Vaults are financial instruments created on Covault SVP, bundling assets like IP and setting specific terms for governance and earnings distribution. Investors purchase vault member positions represented by Rune tokens, which grant rights to governance and earnings from the vault's assets.",
  },
  {
    title: "How does Covault ensure market efficiency for IP transactions?",
    content:
      "The protocol enhances market efficiency by offering transparency through blockchain records, facilitating liquidity via continuous trading of vault positions, ensuring fair pricing with AI-driven analytics, minimizing transaction costs through smart contracts, and enabling global accessibility with user-friendly interfaces and regulatory compliance.",
  },
  {
    title:
      "What are the benefits of participating in Covault's IP marketplace?",
    content:
      "Participants benefit from enhanced transparency, liquidity, fair pricing, low transaction costs, and global accessibility. This ecosystem supports diverse investment strategies, fosters innovation, and maximizes the earning potential of intellectual properties.",
  },
  {
    title: "How can I get involved with Covault?",
    content:
      "Joining our waitlist is the first step to becoming part of the Covault community. By joining, you'll be among the first to receive updates, exclusive sneak peeks, and early access opportunities as we prepare to launch our Smart Vault Protocol.",
  },
];
