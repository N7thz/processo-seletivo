"use client"

import { styled } from "styled-components"

export const MainStyle = styled.main`
    width: 100%;
    min-height: calc(100vh - 114px);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 58px 126px 85px 126px;
    position: relative;

    @media (min-width: 1536px) {
        padding: 116px 251px 170px 251px;
    }
`