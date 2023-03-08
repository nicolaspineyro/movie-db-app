import { ReactNode } from "react";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
