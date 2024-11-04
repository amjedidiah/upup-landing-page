import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FaGithub, FaBook } from "react-icons/fa"; // For GitHub icon and a more standard book icon

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
export const metadata: Metadata = {
  title: "Upup",
  description: "Open source file uploader for your react projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className + " min-h-screen bg-white text-gray-700"}
      >
        <Navbar />
        {children}

        {/* Revised Footer */}
        <footer className="w-full border-t bg-white p-4 flex justify-between items-center">
          <a
            href="https://devino.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600"
          >
            Devino Solutions Inc.
          </a>

          <div className="flex items-center">
            <a
              href="/docs/index.html"
              target="_self"
              className="text-gray-800 hover:text-blue-600 flex items-center mr-4"
            >
              <FaBook size={20} className="mr-1" />
              Docs
            </a>

            <a
              href="https://github.com/DevinoSolutions/upup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
