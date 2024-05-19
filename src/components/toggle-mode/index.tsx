import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export const ToogleMode = () => {

    const { setTheme, theme } = useTheme()

    function changeTheme() {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <button onClick={changeTheme}>
            {theme === "light" ? <Sun /> : <Moon />}
        </button>
    )
}
