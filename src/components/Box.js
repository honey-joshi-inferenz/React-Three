function Box() {
  return (
    <mesh position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  )
}

export default Box
