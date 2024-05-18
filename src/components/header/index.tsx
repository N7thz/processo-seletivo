import { ShoppingCart } from "lucide-react"
import { HeaderStyle } from "./style"
import { Button } from "../button"

export const Header = () => {

    return (
        <HeaderStyle>
            <section>
                <span>MKS</span>
                <span>Sistemas</span>
            </section>
            <Button>
                <ShoppingCart />
                0
            </Button>
        </HeaderStyle>
    )
}
