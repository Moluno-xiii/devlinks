// "use client"
import React, { useState } from "react";
import Link from "./Link";

type Props = {};

const UserLinks = (props: Props) => {
  const [link, setLink] = useState<any>(null)
  const [activeLink, setActiveLink] = useState<string>('')
  return <ul>
    <Link />
  </ul>
};

export default UserLinks;
