import { ScrollView } from "@gluestack-ui/themed"
import { ReactNode } from "react"

interface WithScrollViewProps {
  children: ReactNode
  sv?: boolean
}

export const WithScrollView = ({ children, sv }: WithScrollViewProps) => {
  if (sv) {
    return <ScrollView>{children}</ScrollView>
  } else {
    return <>{children}</>
  }
}
