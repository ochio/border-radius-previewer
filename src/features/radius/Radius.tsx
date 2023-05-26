import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { adjustment, selectRadius } from "./radiusSlice"
import styles from "./Radius.module.css"

const Radius = () => {
  const dispatch = useDispatch()
  const { bottomLeft, bottomRight, topLeft, topRight } =
    useSelector(selectRadius)
  const borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`

  return (
    <div className={styles.container}>
      <div>
        <div
          style={{
            border: "1px solid #000",
            width: "100px",
            height: "100px",
            borderRadius: borderRadius,
          }}
        ></div>
        <div className={styles.stats}>
          bottomLeft:
          <label>
            <input
              type="number"
              onChange={(e) =>
                dispatch(adjustment({ bottomLeft: e.target.value }))
              }
              value={bottomLeft}
              min={0}
            />
          </label>
        </div>
        <div>
          bottomRight:
          <label>
            <input
              type="number"
              onChange={(e) =>
                dispatch(adjustment({ bottomRight: e.target.value }))
              }
              value={bottomRight}
              min={0}
            />
          </label>
        </div>
        <div>
          topLeft:
          <label>
            <input
              type="number"
              onChange={(e) =>
                dispatch(adjustment({ topLeft: e.target.value }))
              }
              value={topLeft}
              min={0}
            />
          </label>
        </div>
        <div>
          topRight:
          <label>
            <input
              type="number"
              onChange={(e) =>
                dispatch(adjustment({ topRight: e.target.value }))
              }
              value={topRight}
              min={0}
            />
          </label>
        </div>
      </div>
      <div>
        border-radius:
        {`${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`}
      </div>
    </div>
  )
}

export default Radius
