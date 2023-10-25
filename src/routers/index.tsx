import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppStackParams } from "./types"
import { lazy, Suspense, useEffect } from "react"
import { Text } from "@gluestack-ui/themed"
import Home from "@screens/index"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAppDispatch } from "src/redux/hooks"
import { setNotes } from "src/redux/reducers/notesSlice"

const List = lazy(() => import("src/screens/notes/index"))
const New = lazy(() => import("src/screens/notes/create"))
const Edit = lazy(() => import("src/screens/notes/edit"))
const Password = lazy(() => import("src/screens/password/index"))

const AppStack = createNativeStackNavigator<AppStackParams>()

const Routers = () => {
  const dispatch = useAppDispatch()

  const getNotes = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("notes")
      if (jsonValue) {
        const value = JSON.parse(jsonValue)
        dispatch(setNotes(value))
      }
    } catch (e: any) {
      throw Error(e)
    }
  }

  useEffect(() => {
    getNotes()
  })

  return (
    <NavigationContainer>
      <Suspense fallback={<Text>Loading...</Text>}>
        <AppStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            headerBackTitleVisible: false
          }}>
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Password" component={Password} />
          <AppStack.Screen name="List" component={List} />
          <AppStack.Group
            screenOptions={{
              headerTitle: "",
              headerShown: true,
              headerTintColor: "#FF7133"
            }}>
            <AppStack.Screen name="New" component={New} />
            <AppStack.Screen name="Edit" component={Edit} />
          </AppStack.Group>
        </AppStack.Navigator>
      </Suspense>
    </NavigationContainer>
  )
}

export default Routers
