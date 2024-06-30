import Navbar from "./Navbar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="w-[1670px] max-md:w-full max-md:left-0 absolute top-20 left-56">
        {children}
      </div>
    </div>
  );
}
