import React from "react";
import { FaHamburger } from "react-icons/fa";

type Props = {};

const Link = (props: Props) => {
  return (
    <li className="mx-auto flex h-[228px] w-[295px] flex-col gap-y-3 rounded-xl bg-lightGrey">
      <div className="flex flex-row items-center justify-between">
        <span className="flex items-center gap-x-2 font-bold text-grey">
          Link #1
          <FaHamburger />
        </span>
        <span className="text-grey">Remove</span>
      </div>
      <div className="flex flex-col justify-center gap-y-3">
        <div className="flex flex-col gap-y-3">
          <label htmlFor="platform">Platform</label>
          <select name="" id="platform" value="github">
            <option value="">Github and githublogo</option>
            <option value="">facebook and githublogo</option>
            <option value="">instagram and githublogo</option>
            <option value="">Twitter and githublogo</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-3">
          <label htmlFor="link">Link</label>
          <input type="text" id="link" placeholder="your name is eminem" />
        </div>
      </div>
    </li>
  );
};

export default Link;
