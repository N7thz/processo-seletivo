"use client"

import { styled } from "styled-components"

export const ProductCardStyle = styled.div`
    min-height: 280px;
    width: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 2px 8px 0px #00000022;
    border-radius: 8px;
    overflow: hidden;

    &:hover {
        transform: scale(105%);
        transition: .3s;
    }
    
    .image {
        width: 100%;
        min-height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
    }

    .item-container {
        display: flex;
        flex-direction: column;
        padding: 0px 12px;
        
        div {
            display: flex;
            justify-content: space-between;

            h2 {
                font-size: 16px;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            h3 {
                background-color: var(--dark-gray);
                color: #fff;
                font-size: 15px;
                font-weight: 700;
                height: 26px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4px;
            }
        }

        p {
            font-size: 10px;
            font-weight: 300;
            text-align: justify;
            margin: 9px 0px 12px 0px;
        }
    }

    button {
        min-height: 31.91px;
        background-color: var(--primary);
        color: #fff;
        border: none;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        text-transform: uppercase;
        cursor: pointer;
    }
`