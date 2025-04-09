import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-80 text-center text-sm py-4 text-gray-700">
      <p>&copy; {new Date().getFullYear()} EddyOut. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
