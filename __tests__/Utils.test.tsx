import { it, expect } from "@jest/globals"
import { decrypt, encrypt } from "src/utils/encryption"

it("should encrypted correctly", () => {
  const text = "hello"
  const encryptText = encrypt(text)
  const decryptText = decrypt(encryptText)

  expect(decryptText).toBe(decryptText)
})
