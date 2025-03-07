import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to="/">
        <div className="text-white font-logoFont text-2xl">D-G HOTELS</div>
      </Link>
    </div>
  );
};

export default Logo;
