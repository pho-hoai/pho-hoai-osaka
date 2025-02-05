"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

interface SpeedialProps {
  direction: string;
  actionButtons: Array<{
    icon: React.ReactNode;
    label: string;
    key: string;
    href?: string;
  }>;
}

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      <div
        className={
          "absolute right-full top-1/2 z-10 mr-2 -translate-y-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-white"
        }
      >
        {text}
      </div>
      {children}
    </div>
  );
};

const SpeedDialButton: React.FC<{
  onClick?: () => void;
  icon: React.ReactNode;
  href?: string;
}> = ({ onClick, icon, href }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      onClick={handleClick}
      href={href}
      className={
        "backdrop-filter backdrop-blur-xl bg-white border border-white cursor-pointer rounded-full shadow-md shadow-gray-500/60 order-0 order-1 flex items-center p-3 md:p-4 text-gray-800 transition-all duration-300 hover:bg-slate-100"
      }
    >
      {icon}
    </a>
  );
};

export default function Speeddial({ direction, actionButtons }: SpeedialProps) {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => setIsHovered((prev) => !prev);

  return (
    <div
      // onMouseLeave={handleMouseLeave}
      className={`relative mb-3 flex w-fit items-center gap-3 ${
        direction === "up" || direction === "down" ? "flex-col" : "flex-row"
      }`}
    >
      <SpeedDialButton onClick={handleMouseEnter} icon={<Menu size={26} />} />

      {/* Speed Dial Actions */}
      <div
        className={`${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } flex items-center gap-3 transition-all duration-300 ease-in-out origin-bottom flex-col order-0`}
      >
        {actionButtons.map((action, index) => (
          <Tooltip text={action.label} key={index}>
            <SpeedDialButton
              key={index}
              href={action.href}
              icon={action.icon}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
