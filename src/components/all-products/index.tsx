"use client"

import { Product } from "@/@types"
import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "../product-card"
import { AllProductsStyle } from "./style"
import { motion } from "framer-motion"
import { Loading } from "../loading"

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

    if (!products || isLoading) return <Loading />

    return (
        <AllProductsStyle>
            {
                products.map((product, index) => {

                    const { id } = product

                    return (
                        <motion.div
                            key={id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    )
                })
            }

        </AllProductsStyle>
    )
}
