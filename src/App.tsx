import { useEffect, useState } from "react"
import "./App.css"
import { Navbar } from "./Navbar"


/**
 * This is the main component of our application. It consists of a Navbar, an input field
 * and a button. The input field is used to set the name of the user and the button is used
 * to clear the input field. The component also maintains a counter that increments every time
 * the button is clicked.
 */
function App() {
  // State variables
  const [name, setName] = useState<string>("") // Name of the user
  const [buttonClick, setButtonClick] = useState(false) // Flag to track button click

  /**
   * This useEffect hook is triggered whenever the buttonClick state changes. It increments
   * the counter and resets the name and buttonClick states if buttonClick is true.
   */
  useEffect(() => {
    if (buttonClick) {
      setName("")
      setButtonClick(false)
    }
  }, [buttonClick])

  return (
    <div>
      {/* Render the Navbar component with the name "pow" */}
      <Navbar name={name} />
      <div>
        {/* Render an input field that updates the name state when the value changes */}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {/* Render a button that triggers the buttonClick state when clicked */}
        <button onClick={() => setButtonClick(true)}>Clear</button>
      </div>
    </div>
  )
}

export default App
