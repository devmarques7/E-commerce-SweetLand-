import { useTheme } from "@mui/material";
import { useContext } from "react"
import { ColorModeContext, tokens} from "../../styles/theme"
import { Container } from "./Header.style";
import Logo from "../Logo/Logo"

const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Container>
            <Logo title="SweetLand"/>
            <div className="navCheckout">

            </div>
        </Container>
    )
}

export default Header