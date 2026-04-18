import React from 'react';
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Sindhuja Ravikanth",
  description: "AI-focused software engineer portfolio: agentic AI, RAG, cloud-native AWS systems, and full-stack development.",
  keywords: ["AI Engineer", "Software Engineer", "RAG", "AWS", "Full Stack", "Java", "Python", "TypeScript", "React", "MySQL", "Portfolio"],
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