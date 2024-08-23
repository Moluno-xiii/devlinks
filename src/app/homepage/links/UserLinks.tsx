// "use client"
import React, { useState } from "react";
import Link from "./Link";

type Props = {
  closeAddLinkSection : () => void;
};

const UserLinks = ({closeAddLinkSection}: Props) => {
  const [link, setLink] = useState<any>(null)
  const [activeLink, setActiveLink] = useState<string>('')
  return <ul>
    <Link onCloseAddLink = {closeAddLinkSection} />
  </ul>
};

export default UserLinks;
