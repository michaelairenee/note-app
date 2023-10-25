import { Pressable, Text, Textarea, TextareaInput } from "@gluestack-ui/themed"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useCallback, useLayoutEffect, useState } from "react"
import withTemplate from "src/components/withTemplate"
import { useAppDispatch } from "src/redux/hooks"
import { saveNotes } from "src/redux/reducers/notesSlice"
import { AppStackParams } from "src/routers/types"
import { encrypt } from "src/utils/encryption"

type Props = NativeStackScreenProps<AppStackParams, "New">

const New = ({ navigation }: Props) => {
  const [notes, setNotes] = useState("")
  const dispatch = useAppDispatch()

  const save = useCallback(() => {
    if (!notes) {
      navigation.navigate("List")
    } else {
      const payload = {
        notes: encrypt(notes),
        date: new Date().toString()
      }
      dispatch(saveNotes(payload))
      navigation.navigate("List")
    }
  }, [notes])

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

export default withTemplate(New, { sv: true })
