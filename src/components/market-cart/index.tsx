"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useMarket } from "@/context/market-context"
import { MarketCartItemStyle, MarketCartStyle } from "./style"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "../button"
import Image from "next/image"
import { MarketItem } from "@/@types"
import { motion } from "framer-motion"

export const MarketCart = () => {

  const { isMarketCartOpen, setIsMarketCartOpen, marketCard } = useMarket()

  const [totalValue, setTotalValue] = useState<number>(0)

  useEffect(() => {
    marketCard.map(item => {
      setTotalValue(totalValue => totalValue + item.totalValue)
    })
  }, [marketCard])

  if (!isMarketCartOpen) return null

  return (
    <MarketCartStyle>
      <div
        className="background"
        onClick={() => setIsMarketCartOpen(!isMarketCartOpen)}
      />
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="container"
      >
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
              : marketCard.map(product =>
                <MarketCardItem
                  key={product.id}
                  setTotalValue={setTotalValue}
                  product={product}
                />
              )
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
      </motion.div>
    </MarketCartStyle>
  )
}

const MarketCardItem = (
  {
    product: { id, photo, quantity, name, price },
    setTotalValue
  }: { product: MarketItem, setTotalValue: Dispatch<SetStateAction<number>> }
) => {

  const { marketCard } = useMarket()

  let itemExist = marketCard.find(item => item.id === id)

  const [
    newQuantity, setNewQuantity
  ] = useState<number>(itemExist?.quantity ?? quantity)

  function increaseQuantity() {

    if (!itemExist) return

    itemExist.quantity++
    setNewQuantity(newQuantity + 1)

    itemExist.totalValue = Number(price) * quantity

    marketCard.map(item => {
      setTotalValue(totalValue => totalValue + item.totalValue)
    })
  }

  function decreaseQuantity() {

    if (!itemExist) return

    if (itemExist.quantity > 1) {
      itemExist.quantity--
      setNewQuantity(newQuantity - 1)
      itemExist.totalValue = Number(price) * quantity
    }
  }

  return (
    <MarketCartItemStyle
      key={id}
      className="market-cart-item"
    >
      <Image
        src={photo}
        width={46}
        height={57}
        quality={100}
        alt="image"
      />
      <h2>{name}</h2>
      <div className="buttons">
        <button
          onClick={decreaseQuantity}
        >
          <Minus size={12} />
        </button>
        <span>
          {newQuantity}
        </span>
        <button
          onClick={increaseQuantity}
        >
          <Plus size={12} />
        </button>
      </div>
      <div>
        {`R$ ${Number(price) * newQuantity}`}
      </div>
    </MarketCartItemStyle>

  )
}

