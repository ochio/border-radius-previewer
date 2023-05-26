import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { adjustment, selectRadius } from "./radiusSlice"

const Radius = () => {
  const dispatch = useDispatch()
  const { bottomLeft, bottomRight, topLeft, topRight } =
    useSelector(selectRadius)

  return (
    <>
      <div>
        bottomLeft: {bottomLeft}
        <label>
          <input
            type="number"
            onChange={(e) =>
              dispatch(adjustment({ bottomLeft: e.target.value }))
            }
            value={bottomLeft}
          />
        </label>
      </div>
      <div>
        bottomRight: {bottomRight}
        <label>
          <input
            type="number"
            onChange={(e) =>
              dispatch(adjustment({ bottomRight: e.target.value }))
            }
            value={bottomRight}
          />
        </label>
      </div>
      <div>
        topLeft: {topLeft}
        <label>
          <input
            type="number"
            onChange={(e) => dispatch(adjustment({ topLeft: e.target.value }))}
            value={topLeft}
          />
        </label>
      </div>
      <div>
        topRight: {topRight}
        <label>
          <input
            type="number"
            onChange={(e) => dispatch(adjustment({ topRight: e.target.value }))}
            value={topRight}
          />
        </label>
      </div>
    </>
  )
}

export default Radius
