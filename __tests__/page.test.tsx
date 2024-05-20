import { render } from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MarketProvider } from "@/context/market-context"

describe("Home", () => {

    it("header", () => {

        const { getByText } = render(
            <MarketProvider>
                <Header />
            </MarketProvider>
        )

        const text = "MKS"

        expect(getByText(text)).toBeInTheDocument()
    })

    it("button header", () => {

        const { getByText } = render(
            <MarketProvider>
                <Header />
            </MarketProvider>
        )

        const openModal = getByText(0)

        fireEvent.click(openModal)

        expect(getByText("Carrinho de compras")).toBeInTheDocument()
    })

    it("footer", () => {

        const { getByText } = render(<Footer />)

        const text = "MKS sistemas © Todos os direitos reservados"

        expect(getByText(text)).toBeInTheDocument()
    })
})
