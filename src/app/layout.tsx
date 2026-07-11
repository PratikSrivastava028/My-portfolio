import type { Metadata, Viewport } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});


const description =
  "Pratik Srivastava — Full Stack Developer portfolio showcasing projects, web applications, and software engineering experience.";

export const metadata: Metadata = {
  title: "Pratik Srivastava - Full Stack Developer",
  description,
  keywords: [
    "Pratik Srivastava",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    title: "Pratik Srivastava - Full Stack Developer",
    description,
    url: "https://github.com/PratikSrivastava028",
    siteName: "Pratik Srivastava Portfolio",
    images: [
      {
        url: "/img/preview.png",
        width: 1200,
        height: 630,
        alt: "Pratik Srivastava Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Srivastava - Full Stack Developer",
    description,
    images: ["/img/preview.png"],
  },
  robots: "index, follow",
  metadataBase: new URL("https://github.com/PratikSrivastava028"),
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Pratik Srivastava",
                url: "https://github.com/PratikSrivastava028",
                jobTitle: "Full Stack Developer",
                image: "https://github.com/PratikSrivastava028.png",
                description:
                  "Full Stack Developer specializing in modern web applications.",
                knowsAbout: ["React", "Next.js", "Node.js", "TypeScript"],
                sameAs: [
                  "https://github.com/PratikSrivastava028",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Pratik Srivastava Portfolio",
                url: "https://github.com/PratikSrivastava028",
                description: "Portfolio of Pratik Srivastava, Full Stack Developer.",
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://github.com/PratikSrivastava028",
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
