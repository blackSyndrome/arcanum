import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="bg-zinc-900 text-white py-4 px-10 flex flex-wrap justify-between items-center text-sm">
      <div className="flex flex-col items-start">
        <p className="font-semibold">Developed by corruptedFile</p>
        <p>Students of 3BSCS-1, BS Computer Science</p>
        <p>New Era University, Quezon City</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="mt-2">
          Contact us:{" "}
          <a
            href="mailto:corruptedFile@gmail.com"
            className="text-white hover:underline"
          >
            corruptedFile@gmail.com
          </a>
        </p>
        <p className="mt-2 text-xs">
          © 2024 corruptedFile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
