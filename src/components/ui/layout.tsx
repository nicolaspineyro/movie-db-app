import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-black">
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
