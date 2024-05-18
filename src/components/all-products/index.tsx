"use client"

import { Product } from "@/@types"
import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "../product-card/product-card"
import { AllProductsStyle } from "./style"

export const AllProducts = () => {

    const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"

    const { data: products, isLoading } = useQuery<Product[]>({
        queryKey: ["get-products"],
        queryFn: async () => {

            const response = await fetch(url)

            const data = await response.json()

            return data.products
        }
    })

    if (!products) return

    return (
        <AllProductsStyle>
            {
                products.map((product) => {

                    const { id } = product

                    return (
                        <ProductCard
                            key={id}
                            product={product}
                        />
                    )
                })
            }
        </AllProductsStyle>
    )
}
