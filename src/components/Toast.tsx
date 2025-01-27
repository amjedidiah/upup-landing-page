import React from "react";
import { Toaster } from "sonner";
import { useColorMode } from "@docusaurus/theme-common";

export default function Toast() {
  const { colorMode } = useColorMode();

  return (
    <Toaster
      duration={3500}
      pauseWhenPageIsHidden
      position="top-right"
      toastOptions={{
        style: {
          right: "-0.75rem",
          top: "1.5rem",
          padding: "0.75rem 0.875rem",
        },
      }}
      richColors
      theme={colorMode === "dark" ? "dark" : "light"}
    />
  );
}
