import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // ReactNode
  backgroundImage: string; // Tipagem para backgroundImage
}

const Layout: React.FC<LayoutProps> = ({ children, backgroundImage }) => {
  return (
    <div
      className="h-full w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-36 w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
