import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme'

export const ThemeWraper = props => 
   (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {props.children}
    </ThemeProvider>)
  


