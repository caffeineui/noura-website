import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "../styles/css-reveal.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Noura - Webflow HTML website template",
  description:
    "Noura is a playful Webflow template with smooth animations, bold visuals, and flexible layouts for agencies and designers.",
  generator: "Webflow",
  openGraph: {
    title: "Noura - Webflow HTML website template",
    description:
      "Noura is a playful Webflow template with smooth animations, bold visuals, and flexible layouts for agencies and designers.",
    images: ["https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/68656c83ce7b8d7ed3886a9b_Open%20graph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noura - Webflow HTML website template",
    description:
      "Noura is a playful Webflow template with smooth animations, bold visuals, and flexible layouts for agencies and designers.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-wf-domain="noura-template-supply.webflow.io"
      data-wf-page="684a11845c7dd0b4b7745d39"
      data-wf-site="684a11845c7dd0b4b7745cd9"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/css/noura-template-supply.webflow.shared.ca770ec91.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/684f248346f43abece14cc78_favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/684f2486d0b3b34f083a6d5c_webclip.png"
          rel="apple-touch-icon"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`,
          }}
        />
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-inter: ${inter.variable};
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
        `}</style>
      </head>
      <body suppressHydrationWarning>
        {children}
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=684a11845c7dd0b4b7745cd9"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/js/webflow.schunk.ec7d6d8664310c86.js"
          type="text/javascript"
        ></script>
        <script
          src="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/js/webflow.schunk.2fe51e48bd28313c.js"
          type="text/javascript"
        ></script>
        <script
          src="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/js/webflow.schunk.c3449baaa8874918.js"
          type="text/javascript"
        ></script>
        <script
          src="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/js/webflow.91704644.a19ebbea0f0b3bbb.js"
          type="text/javascript"
        ></script>
        <script src="https://cdn.prod.website-files.com/gsap/3.13.0/gsap.min.js" type="text/javascript"></script>
        <script src="https://cdn.prod.website-files.com/gsap/3.13.0/SplitText.min.js" type="text/javascript"></script>
        <script
          src="https://cdn.prod.website-files.com/gsap/3.13.0/ScrollTrigger.min.js"
          type="text/javascript"
        ></script>
      </body>
    </html>
  )
}
