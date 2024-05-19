export interface Product {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
}

export interface MarketItem extends Product {
    quantity: number
    totalValue: number
}
