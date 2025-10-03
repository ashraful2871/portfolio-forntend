import Navbar from "@/components/shared/Navbar";
import React from "react";

const PublicLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh">{children}</main>
    </>
  );
};

export default PublicLayout;
