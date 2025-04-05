import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Layout({ preview, children }) {
  return (
    <>
      <Canvas className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00f3ff" />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
      
      <div className="relative z-10 min-h-screen">
        <Meta />
        <Alert preview={preview} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
