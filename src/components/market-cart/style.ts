"use client"

import { styled } from "styled-components"

export const MarketCartStyle = styled.div`
    display: flex;
    background-color: #00000080;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;

    div:first-child {
        width: calc(100vw - 486px);
    }

    .container {
        width: 486px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--primary);
        box-shadow: -5px 0px 6px 0px #00000021;

        section:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 27px;
            font-weight: 700;
            color: #fff;
            padding: 40px 22px 0 22px;

            button {
                background-color: #000;
                border: none;
                border-radius: 100%;
                padding: 4px;
                display: flex;
                align-items: center;
                align-items: center;
            }
        }

        section:nth-child(2) {
            text-align: center;
            font-style: italic;
            font-size: 24px;
            font-weight: 300;
            color: #fff;
        }

        section:last-child {
            display: flex;
            flex-direction: column;

            p {
                display: flex;
                justify-content: space-between;
                color: #fff;
                font-size: 28px;
                font-weight: 700;
                padding: 0 48px;
            }

            button {
                height: 97px;
                font-size: 28px;
                font-weight: 700;
                background-color: #000;
                color: #fff;
                border: none;
                margin-top: 40px;
            }
        }
    }   
`