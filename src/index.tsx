import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Provider } from "react-redux"
import Routers from "@routers/index"
import { store } from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <Routers />
      </GluestackUIProvider>
    </Provider>
  )
}

export default App
