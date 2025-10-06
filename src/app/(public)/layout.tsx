import { getUserSession } from "@/components/halper/getUserSession";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { User } from "../../../types";

const PublicLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await getUserSession();
  const user: User | undefined = session?.user;
  return (
    <>
      <Navbar user={user} />
      <main className="min-h-dvh">{children}</main>
    </>
  );
};

export default PublicLayout;
