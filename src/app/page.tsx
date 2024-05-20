import { Header } from "@/components/header"
import { Main } from "@/components/main"
import { Footer } from "@/components/footer"
import { MarketCart } from "@/components/market-cart"

export default function Home() {

  return (

    <div className="min-h-screen bg-background text-primary-foreground">
      <Header />
      <Main />
      <Footer />
      <MarketCart />
    </div>
  )
}
