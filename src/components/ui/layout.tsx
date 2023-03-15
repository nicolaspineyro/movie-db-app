import { ReactNode } from "react";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen w-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      <Header />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
