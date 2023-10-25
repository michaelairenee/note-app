import { VStack } from "@gluestack-ui/themed"
import { FC } from "react"
import { Platform, SafeAreaView } from "react-native"
import { WithScrollView } from "./withScrollView"
import { Menu } from "./notes/menu"

interface TemplateProps {
  sv?: boolean
  menu?: boolean
  bg?: string
}

const withTemplate =
  (Component: FC<any>, { sv, menu, bg }: TemplateProps) =>
  (props: any) => {
    if (Platform.OS === "ios") {
      return (
        <SafeAreaView
          style={{ flex: 1, backgroundColor: bg ? bg : "transparent" }}>
          <WithScrollView sv={sv}>
            <VStack p="$4" flex={1}>
              <Component {...props} />
            </VStack>
          </WithScrollView>
          {menu ? <Menu /> : null}
        </SafeAreaView>
      )
    } else {
      return (
        <VStack flex={1} bg={bg ? bg : "transparent"}>
          <WithScrollView sv={sv}>
            <VStack p="$4" flex={1}>
              <Component {...props} />
            </VStack>
          </WithScrollView>
          {menu ? <Menu /> : null}
        </VStack>
      )
    }
  }

export default withTemplate
