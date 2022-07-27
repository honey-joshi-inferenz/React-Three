import './App.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import Plane from './components/Plane'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

function App() {
  return (
    <div className="App">
      <Canvas>
        <Stars />
        <OrbitControls />
        <ambientLight intensity={0.5} color="purple" />
        <spotLight position={[10, 15, 10]} angel={0.3} />

        <Box />
        <Plane />
      </Canvas>
    </div>
  )
}

export default App
