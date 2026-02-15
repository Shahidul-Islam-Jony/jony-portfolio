import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Shahidul Islam Jony – Owner of Sijma BD | Web Developer & Digital Marketer",
  description:
    "Shahidul Islam Jony is the owner and creator of Sijma BD, a modern Bangladeshi e-commerce platform. He holds a BSc degree in Physics. Shahidul Islam is also a Web Developer and Digital Marketer.",
  keywords: [
    "Shahidul Islam Jony",
    "Shahidul Islam",
    "Shohidul Islam",
    "Shohidul Islam Jony",
    "শহিদুল ইসলাম জনি",
    "জনি",
    "শহিদুল ইসলাম",
    "Jony",
    "JON",
    "Jon the Don",
    "si Jony",
    "si jony",
    "SI Jony",
    "JONY",
    "SHAHIDUL",
    "SHAHIDUL ISLAM JONY",
    "Sijma BD owner",
    "Sijma BD founder",
    "Owner of Sijma BD",
    "SIJMA",
    "Owner of Sijma",
    "SIJMA BD",
    "Web developer Bangladesh",
    "Next.js developer BD",
    "E-commerce developer Bangladesh",
    "Full-stack developer BD",
    "Sijma e-commerce website",
    "Bangladesh online super shop",
    "Village products e-commerce BD",
    "Programmer BD",
  ],
  authors: [
    {
      name: "Shahidul Islam | Shahidul Islam Jony | SIJMA BD | sijmabd | Shohidul Islam | Shohidul Islam Jony | জনি । শহিদুল ইসলাম । শহিদুল ইসলাম জনি ",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Google Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shahidul Islam Jony",
              image: "https://i.ibb.co.com/M5jS9zyX/Shahidul-Islam-Jony-1.jpg",
              jobTitle: "Owner",
              worksFor: {
                "@type": "Organization",
                name: "SijmaBD",
                url: "https://sijmabd.com",
              },
              sameAs: [
                "https://www.linkedin.com/in/shahidul-islam-jony",
                "https://web.facebook.com/shahidul.islam.jony13",
                "https://web.facebook.com/shahidul.islam.jonny",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
