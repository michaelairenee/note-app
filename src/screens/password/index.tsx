import {
  VStack,
  Text,
  Pressable,
  Input,
  InputField,
  FormControl,
  FormControlLabel,
  FormControlLabelText
} from "@gluestack-ui/themed"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useState } from "react"
import { Alert } from "react-native"
import withTemplate from "src/components/withTemplate"
import { AppStackParams } from "src/routers/types"
import { env } from "@config"

type Props = NativeStackScreenProps<AppStackParams, "Password">

const Password = ({ navigation }: Props) => {
  const [password, setPassword] = useState<string>("")

  const login = () => {
    if (password !== env.key) {
      Alert.alert("Password salah!")
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "List" }]
      })
    }
  }

  return (
    <VStack>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input mt="$2">
          <InputField
            type="password"
            borderColor="#FF7133"
            placeholder={`password: ${env.key}`}
            onChangeText={val => setPassword(val)}
          />
        </Input>
        <Pressable
          mt="$4"
          p="$2"
          borderRadius="$md"
          bgColor="#FF7133"
          onPress={login}
          disabled={!password}
          sx={{ ":disabled": { bg: "$coolGray300" } }}>
          <Text textAlign="center" fontWeight="$semibold" color="$white">
            Login
          </Text>
        </Pressable>
      </FormControl>
    </VStack>
  )
}

export default withTemplate(Password, {})
