import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import { GlobalStyle } from "@/lib/GlobalStyle"
import { MarketProvider } from "@/context/market-context"
import { ThemeProvider } from "@/context/theme-context"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MKS | Home",
  description: "front-end for selection process",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <StyledComponentsRegistry>
            <MarketProvider>
              {children}
            </MarketProvider>
            <GlobalStyle />
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
