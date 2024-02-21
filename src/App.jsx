
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";



const App = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <main>
       <Routing/>
      </main>
    </div>
  )
}

export default App