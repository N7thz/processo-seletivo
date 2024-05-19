"use client"

import { styled } from "styled-components"

export const LoadingStyle = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    @media (min-width: 1536px) {
        width: 80%;
        gap: 24px;
    }

    div {
        min-height: 280px;
        width: 230px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 2px 8px 0px #00000022;
        border-radius: 8px;
        overflow: hidden;
        background-image: 
            linear-gradient(90deg,#ccc 0px,#e5e5e5e6 40px,#ccc 80px);
        background-size: 300%;
        background-position: 100% 0;
        animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
        to {
            background-position: -100% 0;
        }
    }
`