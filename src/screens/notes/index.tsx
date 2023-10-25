import {
  VStack,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
  Heading
} from "@gluestack-ui/themed"
import withTemplate from "@components/withTemplate"
import NoteList from "@components/notes/list"
import { useAppSelector } from "src/redux/hooks"
import { NotesInitalState, notesSelector } from "src/redux/reducers/notesSlice"
import { useCallback, useEffect, useMemo, useState } from "react"
import { decrypt } from "src/utils/encryption"

const List = () => {
  const data = useAppSelector(notesSelector)

  const [list, setList] = useState<NotesInitalState[]>([])

  const dataList = useMemo(() => {
    const newData = [...data]
    newData.sort((a, b) => {
      return b.date.localeCompare(a.date)
    })
    return newData
  }, [data])

  const search = useCallback(
    (val: string) => {
      if (!val) {
        setList(dataList)
      } else {
        const newList = list.filter(l =>
          decrypt(l.notes).toLocaleLowerCase().includes(val.toLocaleLowerCase())
        )
        setList(newList)
      }
    },
    [dataList, list]
  )

  useEffect(() => {
    setList(dataList)
  }, [dataList])

  return (
    <VStack space="md">
      <Heading>Notes</Heading>
      <Input>
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search..." onChangeText={search} />
      </Input>
      <NoteList list={list} />
    </VStack>
  )
}

export default withTemplate(List, { menu: true })
