import { LoadingStyle } from "./style"

export const Loading = () => {

    const array = Array.from({ length: 8 })

    return (

        <LoadingStyle>
            { array.map((_, index) => <div className="card__skeleton" key={index}/>) }
        </LoadingStyle>
    )
}
