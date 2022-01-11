import React, { FC } from "react";
import NavBar from "./NavBar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  )
}

export default Layout