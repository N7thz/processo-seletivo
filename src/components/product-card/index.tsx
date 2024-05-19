import { MarketItem, Product } from "@/@types"
import { useMarket } from "@/context/market-context"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import { ProductCardStyle } from "./style"

interface ProductCardProps {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {

    const { setMarketCard, marketCard, setIsMarketCartOpen } = useMarket()

    const {
        photo,
        name,
        description,
        price
    } = product

    function addMarketCart(product: Product) {

        let itemExist = marketCard.find(item => item.name === product.name)

        if (!itemExist) {

            const marketItem: MarketItem = {
                ...product,
                quantity: 1,
                totalValue: Number(price)
            }

            setMarketCard(oldValue => [...oldValue, marketItem])
        } else {

            itemExist.quantity++
            itemExist.totalValue = Number(price) * itemExist.quantity
        }

        setIsMarketCartOpen(true)
    }

    return (
        <ProductCardStyle
            title={name}
            className="item"
        >
            <div className="image">
                <Image
                    src={photo}
                    width={171.62}
                    height={115}
                    quality={100}
                    alt={`${name} image`}
                />
            </div>
            <div className="item-container">
                <div>
                    <h2>
                        {name}
                    </h2>
                    <h3>
                        R${price}
                    </h3>
                </div>
                <p>
                    {description}
                </p>
            </div>
            <button onClick={() => addMarketCart(product)}>
                <ShoppingBag size={14} />
                comprar
            </button>
        </ProductCardStyle>
    )
}
