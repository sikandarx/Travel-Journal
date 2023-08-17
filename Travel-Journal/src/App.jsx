import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
        />
    )
}) 

  return (
    <>
    <Navbar/>
    <div className='cont'>
      {cards}
    </div>
    </>
  )
}

export default App
