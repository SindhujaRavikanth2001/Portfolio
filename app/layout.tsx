import React from 'react';
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Sindhuja Ravikanth",
  description: "Full Stack Developer Portfolio showcasing my projects and skills",
  keywords: ["Full Stack Developer", "Web Development", "Java", "Python", ,"MySQL", "JavaScript", "Portfolio"],
  icons: {
    icon: '/sr.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} bg-primary min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 