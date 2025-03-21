import Navbar from "@/components/navbar"
import { useState } from "react"

import reactLogo from "/react.svg"
import wxtLogo from "/wxt.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="flex items-center gap-4">
        <a href="https://wxt.dev" target="_blank">
          <img src={wxtLogo} className="logo" alt="WXT logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WXT + React</h1>
      <div>
        <button
          className="px-4 py-2"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the WXT and React logos to learn more</p>
    </>
  )
}

export default App
