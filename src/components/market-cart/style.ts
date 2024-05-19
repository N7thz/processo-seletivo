"use client"

import { styled } from "styled-components"

export const MarketCartStyle = styled.div`
    display: flex;
    background-color: #00000040;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;

    .background {
        width: calc(100vw - 486px);
    }

    .container {
        width: 486px;
        display: flex;
        flex-direction: column;
        gap: 70px;
        background-color: var(--primary);
        box-shadow: -5px 0px 6px 0px #00000021;
        padding: 40px 22px 0 22px;
        position: relative;

        section:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 27px;
            font-weight: 700;
            color: #fff;

            button {
                background-color: #000;
                border: none;
                border-radius: 100%;
                padding: 4px;
                display: flex;
                align-items: center;
            }
        }

        section:nth-child(2) {
            width: 100%;
            max-height: 560px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 22px;
            text-align: center;
            font-style: italic;
            font-size: 24px;
            font-weight: 300;
            background-color: transparent;
            border-radius: 4px;
        }

        section:last-child {
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: auto;

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
                cursor: pointer;
            }
        }
    }   
`

export const MarketCartItemStyle = styled.div`
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #fff;
    padding: 19px 23px;
    font-style: normal;

    img {
        height: 100%;
    }

    h2 {
        min-width: 140px;
        font-size: 13px;
        font-weight: 400;
        margin: 0 9px 0 21px;
    }

    .buttons {
        width: 80px;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        font-style: normal;
        font-size: 16px;
        font-weight: 400;
        border: 1px solid var(--gray);
        border-radius: 4px;
        margin: 4px;
        padding: 4px;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    div > button {
        border: none;  
        background-color: transparent;
        padding: 4px;
        cursor: pointer;
    }

    button:first-child {
        border-radius: 4px 0 0 4px;
        border-right: 1px solid var(--gray);
    }

    button:last-child {
        border-radius: 0 4px 4px 0;
        border-left: 1px solid var(--gray);
    }

    div:last-child {
        width: 30%;
        font-size: 14px;
        font-weight: 700;
        white-space: nowrap;
    }
`