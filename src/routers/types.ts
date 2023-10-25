import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppStackParams = {
  Home: undefined
  Password: undefined
  List: undefined
  New: undefined
  Edit: undefined
}

export type AppStackScreenProps<Screen extends keyof AppStackParams> =
  NativeStackNavigationProp<AppStackParams, Screen>
