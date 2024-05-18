"use client"

import { useMarket } from "@/context/market-context"
import { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {

    const { setIsMarketCartOpen } = useMarket()

    return (
        <button
            onClick={() => 
                setIsMarketCartOpen((isMarketCartOpen) => !isMarketCartOpen)
            }
            {...props}
        >
            {children}
        </button>
    )
}
