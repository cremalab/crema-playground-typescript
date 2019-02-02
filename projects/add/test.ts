import { add } from "."

describe("add", () => {
  it("takes 1️⃣  and 2️⃣  then gives back 3️⃣ ", () => {
    // Arrange
    const valA = 1
    const valB = 2

    // Act
    const received = add(valA, valB)

    // Assert
    const expected = 3
    expect(received).toEqual(expected)
  })
})

// These tests follows the AAA methodology (Arrange-Act-Assert). For more info:
// https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/
