"use client"

import { styled } from "styled-components"

export const HeaderStyle = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary);
    padding: 28px 65px;
    color: #fff;

    section {
        display: flex;
        align-items: baseline;
        gap: 8px;

        span:first-child {
            font-size: 40px;
            font-weight: 600;
        }

        span:last-child {
            font-size: 20px;
            font-weight: 300;
        }
    }

    button {
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: 14px 15px;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            transform: scale(110%);
            transition: .3s;
        }
    }
`