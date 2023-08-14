import styles from "./layout.module.css";
import Navbar from "../StyledNavBar/Navbar";

const name = "Gowdilya";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: any;
  home?: any;
}) {
  const NavStyle = {
    bgColor: "#646cff",
    textColor: "#fff",
  };

  return (
    <>
      <Navbar style={NavStyle}></Navbar>
      <main className="h-full">{children}</main>
    </>
  );
}
