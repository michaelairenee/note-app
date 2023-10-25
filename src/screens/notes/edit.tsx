import { Pressable, Text, Textarea, TextareaInput } from "@gluestack-ui/themed"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import withTemplate from "@components/withTemplate"
import { useAppDispatch, useAppSelector } from "src/redux/hooks"
import { detailSelector } from "src/redux/reducers/detailSlice"
import { editNotes } from "src/redux/reducers/notesSlice"
import { AppStackParams } from "@routers/types"
import { decrypt, encrypt } from "src/utils/encryption"

type Props = NativeStackScreenProps<AppStackParams, "Edit">

const Edit = ({ navigation }: Props) => {
  const data = useAppSelector(detailSelector)
  const dispatch = useAppDispatch()

  const [notes, setNotes] = useState<string>("")

  const save = useCallback(() => {
    if (!notes) {
      navigation.navigate("List")
    } else {
      const payload = {
        id: data.id,
        notes: encrypt(notes),
        date: new Date().toString()
      }
      dispatch(editNotes(payload))
      navigation.navigate("List")
    }
  }, [data, notes, dispatch, navigation])

  const renderButton = useCallback(() => {
    return (
      <Pressable onPress={save}>
        <Text color="#FF7133">Save</Text>
      </Pressable>
    )
  }, [save])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderButton()
    })
  }, [navigation, renderButton])

  useEffect(() => {
    setNotes(decrypt(data.notes))
  }, [data])

  return (
    <Textarea borderColor="transparent" h="100%">
      <TextareaInput
        autoFocus
        type="text"
        role="note"
        placeholder="Write your text here.."
        value={notes}
        onChangeText={val => setNotes(val)}
      />
    </Textarea>
  )
}

export default withTemplate(Edit, { sv: true })
