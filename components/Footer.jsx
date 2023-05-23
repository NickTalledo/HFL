import React from "react";
import Image from "next/image";

const Footer = ({ className }) => {
  return (
    <footer className={`${className} barge mb-10 flex flex-col items-center`}>
      <div className="mb-4">
        <br />
        <p className="h2">
          Social:
          <a
            href="https://www.instagram.com/hfl_flagfootball/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            @HFL
          </a>
        </p>
      </div>

      <div className="flex justify-between items-center w-full">
        <p className="h2">Copyright @HFL</p>
        <Image
          src="/images/HFLlogo.jpeg"
          width={150}
          height={100}
          alt="HFL Logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
