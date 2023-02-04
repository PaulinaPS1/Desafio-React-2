import Login from "./Components/Login"
import Alert from "./Components/Alert"
import { useState } from "react"


const App = () => {
  const [alerta, setAlerta] = useState({msg: '', color: ''})
  return (
    <div className="container">
      <Login setAlerta={setAlerta}/>
      <Alert alerta={alerta}/>
    </div>
  )
}

export default App
