import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })
  
  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })

  const handleZeroClick = () => {
    const newClicks = {
      left: clicks.left = 0,
      right: clicks.right = 0
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleZeroClick}>reset</button>
      <button onClick={handleRightClick}>right</button>
      
      {clicks.right}
    </div>
  )
}
export default App;
