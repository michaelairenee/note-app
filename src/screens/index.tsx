import { Center, Heading, Image, Pressable, VStack } from "@gluestack-ui/themed"
import withTemplate from "@components/withTemplate"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackParams } from "src/routers/types"
import TouchID from "react-native-touch-id"

type Props = NativeStackScreenProps<AppStackParams, "Home">

const Home = ({ navigation }: Props) => {
  const handleAuth = () => {
    TouchID.isSupported()
      .then((biometryType: any) => {
        if (biometryType === "FaceID") {
          TouchID.authenticate("")
            .then(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "List" }]
              })
            })
            .catch(() => {
              navigation.navigate("Password")
            })
        } else {
          TouchID.authenticate("")
            .then(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "List" }]
              })
            })
            .catch(() => {
              navigation.navigate("Password")
            })
        }
      })
      .catch(() => {
        navigation.navigate("Password")
      })
  }

  return (
    <VStack flex={1} space="3xl" justifyContent="center">
      <Center>
        <Heading>NoteApp</Heading>
      </Center>
      <Center h="$48">
        <Image
          source={require("@pngs/logo.png")}
          alt="logo"
          role="img"
          w="100%"
          h="100%"
          resizeMode="contain"
        />
      </Center>
      <Pressable
        mt="$32"
        p="$4"
        borderRadius="$md"
        bgColor="#FF7133"
        onPress={handleAuth}>
        <Heading textAlign="center" color="$white">
          Get Started
        </Heading>
      </Pressable>
    </VStack>
  )
}

export default withTemplate(Home, { bg: "#FFAC33" })
