import { EditIcon, Fab, FabIcon } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import { AppStackScreenProps } from "src/routers/types"

export const Menu = () => {
  const { navigate } = useNavigation<AppStackScreenProps<"List">>()

  return (
    <Fab
      mx="$4"
      my="$8"
      bg="$emerald600"
      size="lg"
      placement="bottom right"
      onPress={() => navigate("New")}>
      <FabIcon as={EditIcon} />
    </Fab>
  )
}
