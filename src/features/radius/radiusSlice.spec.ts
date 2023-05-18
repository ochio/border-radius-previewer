import radiusReducer, { BorderRadiusState, adjustment } from "./radiusSlice"

describe("counter reducer", () => {
  const initialState: BorderRadiusState = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  }
  it("should handle initial state", () => {
    expect(radiusReducer(undefined, { type: "unknown" })).toEqual({
      topLeft: 0,
      topRight: 0,
      bottomLeft: 0,
      bottomRight: 0,
    })
  })

  it("should handle increment", () => {
    const actual = radiusReducer(
      initialState,
      adjustment({
        topLeft: 10,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
      }),
    )
    expect(actual).toEqual({
      topLeft: 10,
      topRight: 0,
      bottomLeft: 0,
      bottomRight: 0,
    })
  })
})
