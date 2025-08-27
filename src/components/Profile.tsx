import React from "react";
import { Picture } from "@/src/components";
import "@/src/styles/text.css";

function Profile() {
  return (
    <div className="container-one-light flex flex-col justify-center items-center p-6">
      <div className="md:w-96">
        <Picture
          alt="profile"
          src="https://res.cloudinary.com/dqgcyonb9/image/upload/v1756093211/adviser/k60zvdp1dnx0hnqsanp4.jpg"
          width="auto"
        />
      </div>
      <h1 className="text-family color-text-light font-bold text-[33px] md:text-[50px] italic pt-2">
        Stephani Bustillos
      </h1>
      <p className="text-family color-text-light font-semibold text-[23px] md:text-[40px] mt-1 italic">
        Asesor Financiero
      </p>
    </div>
  );
}

export default Profile;
