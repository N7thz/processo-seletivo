import { Product } from "@/@types"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
    product: Product
}

export const ProductCard = ({
    product: {
        photo,
        name,
        description,
        price
    } }: ProductCardProps
) => {

    return (
        <div
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
            <button>
                <ShoppingBag size={14}/>
                comprar
            </button>
        </div>
    )
}
