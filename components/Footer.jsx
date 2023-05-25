import React from "react";
import Image from "next/image";

const Footer = ({ className }) => {
  return (
    <footer className={`${className}  mb-10 flex flex-col items-center`}>
      <div className="mb-4">
        <br />
        <span>
          Social:
          <a
            href="https://www.instagram.com/hfl_flagfootball/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            @HFL
          </a>
        </span>
      </div>

      <Image
        src="/images/HFLlogo.jpeg"
        width={150}
        height={200}
        alt="HFL Logo"
      />
    </footer>
  );
};

export default Footer;
