import type { Metadata } from "next";
import {DM_Sans} from "next/font/google";
import { ThemeProvider } from "../providers/theme-provider";
import "./globals.css";


const font = DM_Sans({subsets : ['latin']})

export const metadata: Metadata = {
  title: "FlowForge",
  description: "Automate Your Work With FlowForge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${font.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
