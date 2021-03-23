import {useState} from "react"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./components/Box"
import { Wrapper } from "./components/Wrapper"
import { data } from "./data";
import { Expand } from "./components/Expand"
import { Button } from "./components/Button"
import { Layout } from "./components/Layout"

function App() {
    const [isLight, setIsLight ] = useState(true)
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
          <Layout spacing="large">
          <Button
              darkMode={() => setIsLight(false)}
              lightMode={() => setIsLight(true)}
              isLight={isLight}
          >
              Themechanger
          </Button>
            <Box>
                {data.map((item, index) =>
                    <Expand index={index} title={item.title} key={item.title}>
                        {item.content}
                    </Expand>
                )}
            </Box>
          </Layout>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
