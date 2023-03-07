import { ReactNode } from "react";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="backdrop-blur-3xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 shadow-black shadow-2xl pb-10">
      <Header />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
