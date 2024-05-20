"use client"

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from "react"
import { MarketItem } from "@/@types"

interface MarketContextProps {
    marketCard: MarketItem[]
    setMarketCard: Dispatch<SetStateAction<MarketItem[]>>
    isMarketCartOpen: boolean
    setIsMarketCartOpen: Dispatch<SetStateAction<boolean>>
}

const MarketContext = createContext({} as MarketContextProps)

export function MarketProvider({ children }: { children: ReactNode }) {

    const [marketCard, setMarketCard] = useState<MarketItem[]>([])
    const [isMarketCartOpen, setIsMarketCartOpen] = useState<boolean>(false)

    const value: MarketContextProps = {
        marketCard, setMarketCard,
        isMarketCartOpen, setIsMarketCartOpen
    }

    return (
        <MarketContext.Provider value={value}>
            {children}
        </MarketContext.Provider>
    )
}

export const useMarket = () => useContext(MarketContext)