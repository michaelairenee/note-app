import { env } from "@config"

export const encrypt = (text: any) => {
  return [...text]
    .map((x, i) =>
      (x.codePointAt() ^ env.key.charCodeAt(i % env.key.length) % 255)
        .toString(16)
        .padStart(2, "0")
    )
    .join("")
}

export const decrypt = (text: any) => {
  return String.fromCharCode(
    ...text
      .match(/.{1,2}/g)
      .map(
        (e: any, i: any) =>
          parseInt(e, 16) ^ env.key.charCodeAt(i % env.key.length) % 255
      )
  )
}
