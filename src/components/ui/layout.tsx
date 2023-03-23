import { ReactNode } from "react";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-black">
      <Header />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
