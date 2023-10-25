import { KEY } from "@env"

export const env: Env = {
  key: KEY
}

interface Env {
  key: string
}
