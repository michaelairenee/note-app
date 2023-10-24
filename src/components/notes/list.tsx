import {
  Box,
  FlatList,
  HStack,
  Pressable,
  Text,
  VStack
} from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import { memo, useCallback } from "react"
import { useAppDispatch } from "src/redux/hooks"
import { setDetail } from "src/redux/reducers/detailSlice"
import { NotesInitalState } from "src/redux/reducers/notesSlice"
import { AppStackScreenProps } from "src/routers/types"
import { decrypt } from "src/utils/encryption"

type NoteListProps = {
  list: NotesInitalState[]
}

const NoteList = ({ list }: NoteListProps) => {
  const { navigate } = useNavigation<AppStackScreenProps<"List">>()

  const dispatch = useAppDispatch()

  const getTitle = useCallback((notes: string) => {
    const decryptText = decrypt(notes)
    const title = decryptText.split("\n")[0]
    return title
      ? title.length > 28
        ? `${title.substring(0, 28)}...`
        : title.substring(0, 28)
      : "No Additional Text"
  }, [])

  const getDesc = useCallback((notes: string) => {
    const decryptText = decrypt(notes)
    const desc = decryptText.split("\n")[1]
    return desc
      ? desc.length > 40
        ? `${desc.substring(0, 40)}...`
        : desc.substring(0, 40)
      : "No Additional Text"
  }, [])

  const goDetail = (val: NotesInitalState) => {
    dispatch(setDetail(val))
    navigate("Edit")
  }

  return (
    <FlatList
      data={list}
      renderItem={({ item }: any) => (
        <Pressable onPress={() => goDetail(item)}>
          <Box borderBottomWidth="$1" borderColor="$trueGray800" py="$2">
            <HStack space="md" justifyContent="space-between">
              <VStack>
                <Text color="$coolGray800" fontWeight="$bold">
                  {getTitle(item.notes)}
                </Text>
                <Text color="$coolGray600">{getDesc(item.notes)}</Text>
              </VStack>
              <Text fontSize="$xs" color="$coolGray800" alignSelf="flex-start">
                {new Date(item.date).toLocaleDateString()}
              </Text>
            </HStack>
          </Box>
        </Pressable>
      )}
      keyExtractor={(item: any) => item.id}
    />
  )
}

export default memo(NoteList)
