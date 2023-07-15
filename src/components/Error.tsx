import React from "react";

interface DeafaultProps {
  error: any;
}

function Error({ error }: DeafaultProps) {
  return (
    <div className="w-full h-20 flex items-center justify-center">
      <div className="w-1/4 bg-black rounded-lg h-2/4 flex items-center  justify-center">
        <text className="text-red-500 font-bold font-sans text-base ">
          {error}
        </text>
      </div>
    </div>
  );
}

export default Error;
