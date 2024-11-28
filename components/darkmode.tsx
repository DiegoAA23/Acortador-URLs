"use client";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "@/app/themecontext";

export const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={24}
    />
  );
};
