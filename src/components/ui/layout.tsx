import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-white-neutral">
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
