"use client"

import { ShoppingCart } from "lucide-react"
import { HeaderStyle } from "./style"
import { Button } from "../button"
import { useMarket } from "@/context/market-context"
import { ModeToggle } from "../toggle-mode"

export const Header = () => {

    const { marketCard } = useMarket()

    return (
        <HeaderStyle>
            <section className="text-white dark:text-black">
                <span>MKS</span>
                <span>Sistemas</span>
            </section>
            <div>
                <ModeToggle />
                <Button>
                    <ShoppingCart color="black" />
                    {marketCard.length}
                </Button>
            </div>
        </HeaderStyle>
    )
}
