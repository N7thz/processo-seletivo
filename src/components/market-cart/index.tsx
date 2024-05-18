"use client"

import { useMarket } from "@/context/market-context"
import { MarketCartStyle } from "./style"
import { X } from "lucide-react"
import { Button } from "../button"

export const MarketCart = () => {

  const { isMarketCartOpen, setIsMarketCartOpen, marketCard } = useMarket()

  if (!isMarketCartOpen) return null

  const totalValue = 798

  console.log(marketCard)

  return (
    <MarketCartStyle>
      <div onClick={() => setIsMarketCartOpen(!isMarketCartOpen)} />
      <div className="container">
        <section>
          Carrinho de compras
          <Button tabIndex={isMarketCartOpen ? 1 : undefined}>
            <X
              size={15}
              color="white"
            />
          </Button>
        </section>
        <section>
          {
            marketCard.length === 0
              ? <span>
                Carrinho vazio. Adicione itens para continuar.
              </span>
              : marketCard.map(product => {
                return (
                  <div key={product.id}>
                    {product.name}
                  </div>
                )
              })
          }
        </section>
        <section>
          <p>
            Total:
            <span>{`R$ ${totalValue}`}</span>
          </p>
          <button>
            Finalizar Compra
          </button>
        </section>
      </div>
    </MarketCartStyle>
  )
}
