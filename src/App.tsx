import React from 'react';
import { ColorModeContext , useMode} from './styles/theme';
import {CssBaseline, ThemeProvider} from "@mui/material";

import Header from './components/Header/Hearder';

function App(){
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
 