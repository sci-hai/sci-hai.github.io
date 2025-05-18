import { Manrope, Roboto } from 'next/font/google'

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  applicationName: "LLM for Scientific Discovery: Reasoning, Assistance, and Collaboration",
  description:
    "Bridge the gap between AI researchers and domain scientists by fostering interdisciplinary dialogue on foundation models can enhance scientific reasoning, assist human researchers, and transform scientific workflows",
  title: {
    template: "%s | LM4SCI Workshop",
    absolute: "LM4SCI: LLM for Scientific Discovery",
  },
  openGraph: {
    siteName: "LM4SCI Workshop",
    locale: "en_US",
    type: "website",
  },
  //   icons: {
  //     icon: [
  //       {
  //         url: '/favicon.svg',
  //         type: 'image/svg+xml'
  //       }
  //     ]
  //   },
};

const manrope = Manrope({
weight: '500',
subsets: ['latin'],
display: 'swap',
})

  
const navbar = (
  <Navbar
    logo={<b>LM4Sci Workshop</b>}
    logoLink="/"   
    projectLink="https://github.com/sci-hai/lm4sci.github.io"
  />
);
const footer = (
  <Footer className="flex-col items-center md:items-start !py-4">
    <p className="text-sm">
      © {new Date().getFullYear()} LLM for Scientific Discovery
    </p>
  </Footer>
);
// const banner = (
//   <Banner dismissible={true}>🎨 Welcome to the Lit Canvas documentation</Banner>
// );

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={manrope.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/lm4sci/lm4sci.github.io"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
