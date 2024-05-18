import { Background, } from "@/styles"
import { Header } from "@/components/header"
import { Main } from "@/components/main"
import { Footer } from "@/components/footer"
import { MarketCart } from "@/components/market-cart"

export default function Home() {

  return (
    <Background>
      <Header />
      <Main />
      <Footer />
      <MarketCart />
    </Background>
  )
}
