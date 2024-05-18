"use client"

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from "react"
import { Product } from "@/@types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface MarketContextProps {
    marketCard: Product[]
    setMarketCard: Dispatch<SetStateAction<Product[]>>
    isMarketCartOpen: boolean
    setIsMarketCartOpen: Dispatch<SetStateAction<boolean>>
}

const MarketContext = createContext({} as MarketContextProps)

export function MarketProvider({ children }: { children: ReactNode }) {

    const queryClient = new QueryClient()

    const [marketCard, setMarketCard] = useState<Product[]>([])
    const [isMarketCartOpen, setIsMarketCartOpen] = useState<boolean>(false)

    const value: MarketContextProps = {
        marketCard, setMarketCard,
        isMarketCartOpen, setIsMarketCartOpen
    }

    return (
        <QueryClientProvider client={queryClient}>
            <MarketContext.Provider value={value}>
                {children}
            </MarketContext.Provider>
        </QueryClientProvider>
    )
}

export const useMarket = () => useContext(MarketContext)