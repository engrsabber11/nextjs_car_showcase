"use client";

import React from "react";
import { CustomButtonInterface } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyle,
  textStyles,
  isDisabled,
  rightIcon,
  handleClick,
}: CustomButtonInterface) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Right Icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
