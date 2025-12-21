import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Wini() {
    const { scene } = useGLTF('/models/wini/wini.gltf')
    return <primitive object={scene} position={[0, -0.6, 0]} scale={6} />
}

useGLTF.preload('/models/wini.gltf')

export default function WiniModel() {
    return (
        <Canvas
            camera={{ position: [0, 1.2, 3], fov: 40 }}
            className="h-full w-full"
        >
            <color attach="background" args={['#050505']} />
            <ambientLight intensity={0.1} />
            <directionalLight position={[3, 4, 2]} intensity={1.2} />

            <Suspense fallback={null}>
                <Wini />
            </Suspense>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1}
                enableRotate
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />

        </Canvas>
    )
}
