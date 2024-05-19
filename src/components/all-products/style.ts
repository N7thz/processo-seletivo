"use client"

import { styled } from "styled-components"

export const AllProductsStyle = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    @media (min-width: 1536px) {
        width: 80%;
        gap: 24px;
    }
`