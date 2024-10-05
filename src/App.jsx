import {BrowserRouter} from 'react-router-dom'
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import { AppRoutes } from './routes/AppRoutes';




export function App() {
  return (
    <>
    <ThemeProvider theme={dark}>
    <GlobalStyles/>
    <BrowserRouter>
     <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}



