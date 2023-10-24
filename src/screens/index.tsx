import { Button, Text, VStack } from "@gluestack-ui/themed"
import withTemplate from "@components/withTemplate"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackParams } from "src/routers/types"

type Props = NativeStackScreenProps<AppStackParams, "Home">

const Home = ({ navigation }: Props) => {
  return (
    <VStack>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("List")}>
        <Text>Next</Text>
      </Button>
    </VStack>
  )
}

export default withTemplate(Home, { sv: true })
