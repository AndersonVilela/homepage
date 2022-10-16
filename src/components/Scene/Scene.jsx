/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/fs0kEM6uFqTgGElF/scene.splinecode')

  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.005))




  return (
    <>
      <color attach="background" args={['#696969']} />
      <group {...props} dispose={null}>
        <OrthographicCamera
          name="Camera"
          makeDefault={true}
          zoom={0.13}
          far={100000}
          near={-100000}
          up={[0, 1, 0]}
          position={[-3513.37, 1789.85, 3284.4]}
          rotation={[-0.41, -0.1, -0.31]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[-13.16, 1548.81, 302.6]}
        />
        <group name="room" position={[33.31, 210.59, -2.77]} ref={mesh} >
          <group
            name="bed"
            position={[-651.75, -581.38, -493.09]}
            rotation={[Math.PI, -1.49, Math.PI]}
            scale={[1.17, 1.36, 1.58]}
          >
            <mesh
              name="Subdiv 2"
              geometry={nodes['Subdiv 2'].geometry}
              material={materials.blanket}
              castShadow
              receiveShadow
              position={[-123.07, 42.25, -10.02]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[1.85, 1.55, 1.91]}
            />
            <mesh
              name="blanket"
              geometry={nodes.blanket.geometry}
              material={materials.blanket}
              castShadow
              receiveShadow
              position={[-33.63, 39.43, -10.02]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[1.74, 1.53, 1.89]}
            />
            <mesh
              name="pillow"
              geometry={nodes.pillow.geometry}
              material={materials.pillow}
              castShadow
              receiveShadow
              position={[-186.19, 8.29, 0.29]}
              rotation={[Math.PI, -Math.PI / 2, 0]}
              scale={[1.98, 1.98, 0.65]}
            />
            <mesh
              name="Subdiv"
              geometry={nodes.Subdiv.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[258.71, 34.28, 0.29]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.98, 0.83, 1.98]}
            />
            <mesh
              name="headboard"
              geometry={nodes.headboard.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[-250.46, 34.28, 0.29]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.98, 0.83, 1.98]}
            />
            <mesh
              name="basebed"
              geometry={nodes.basebed.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[-8.76, -69.26, 0.29]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.98, 1.12, 1.53]}
            />
            <mesh
              name="matress"
              geometry={nodes.matress.geometry}
              material={materials.pillow}
              castShadow
              receiveShadow
              position={[-8.76, -24.23, 0.29]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.86, 1.98, 1.53]}
            />
          </group>
          <mesh
            name="Walls"
            geometry={nodes.Walls.geometry}
            material={materials['Walls Material']}
            castShadow
            receiveShadow
            position={[0, -734.35, -20.78]}
            rotation={[-Math.PI / 2, 0, -1.58]}
            scale={0.7}
          />
          <group name="books-1" position={[773.88, -175.23, -732.6]} rotation={[0, -0.01, 0]}>
            <mesh
              name="book-1"
              geometry={nodes['book-1'].geometry}
              material={materials.purple}
              castShadow
              receiveShadow
              position={[-42.13, -51.79, -35.07]}
              rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
            />
            <mesh
              name="book-2"
              geometry={nodes['book-2'].geometry}
              material={materials['blue-1-3']}
              castShadow
              receiveShadow
              position={[70.6, 0.51, 0]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
              name="book-3"
              geometry={nodes['book-3'].geometry}
              material={materials['blue-a-2']}
              castShadow
              receiveShadow
              position={[45.7, -33.99, -18.42]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
              name="book-4"
              geometry={nodes['book-4'].geometry}
              material={materials['blue-a-2']}
              castShadow
              receiveShadow
              position={[5.73, -27.49, -18.42]}
              rotation={[-Math.PI / 2, -1.48, -Math.PI / 2]}
            />
          </group>
          <group name="books-2" position={[486.32, -263, -541.32]} rotation={[0, -0.01, 0]}>
            <mesh
              name="paper 2"
              geometry={nodes['paper 2'].geometry}
              material={materials['paper 2 Material']}
              castShadow
              receiveShadow
              position={[-21.38, -15.18, 12.29]}
              rotation={[-Math.PI / 2, 0, -1.31]}
            />
            <mesh
              name="paper"
              geometry={nodes.paper.geometry}
              material={materials['paper Material']}
              castShadow
              receiveShadow
              position={[8.89, -14.38, 22.3]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <group
              name="book-5"
              position={[41.7, 0, -27.45]}
              rotation={[-0.01, -0.18, -1.57]}
              scale={[0.74, 1.35, 1.23]}
            >
              <mesh
                name="Rectangle"
                geometry={nodes.Rectangle.geometry}
                material={materials['Rectangle Material']}
                castShadow
                receiveShadow
                position={[-22.7, 32.77, 1.79]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="Cube 4"
                geometry={nodes['Cube 4'].geometry}
                material={materials['Cube 4 Material']}
                castShadow
                receiveShadow
                position={[-0.32, 0.86, 0.42]}
                scale={[0.99, 1.01, 1]}
              />
              <mesh
                name="Cube 41"
                geometry={nodes['Cube 41'].geometry}
                material={materials['Cube 41 Material']}
                castShadow
                receiveShadow
                position={[-16.68, -0.27, 9.75]}
                scale={[0.99, 1.01, 1]}
              />
            </group>
          </group>
          <group name="computer" position={[519.01, -252.55, -150.93]} rotation={[-1.43, -1.46, -1.43]}>
            <group name="Group" position={[-1.33, 89.68, -11.15]} rotation={[0, 0.67, 0]}>
              <mesh
                name="Rectangle 6"
                geometry={nodes['Rectangle 6'].geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[46.52, 45.59, -58.48]}
                rotation={[-0.22, -0.66, -1.71]}
                scale={0.84}
              />
              <mesh
                name="Rectangle 61"
                geometry={nodes['Rectangle 61'].geometry}
                material={materials.purple}
                castShadow
                receiveShadow
                position={[51.33, 45.04, -64.53]}
                rotation={[-0.22, -0.66, -1.71]}
                scale={0.84}
              />
              <mesh
                name="Rectangle 5"
                geometry={nodes['Rectangle 5'].geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[4.42, -66.89, -6.25]}
                rotation={[-1.22, -0.27, -2.19]}
                scale={0.84}
              />
              <mesh
                name="Rectangle 4"
                geometry={nodes['Rectangle 4'].geometry}
                material={materials.purple}
                castShadow
                receiveShadow
                position={[-9.76, -82.25, 11.61]}
                rotation={[-1.22, -0.27, -2.19]}
                scale={0.84}
              />
              <mesh
                name="Cube 7"
                geometry={nodes['Cube 7'].geometry}
                material={materials['main-3']}
                castShadow
                receiveShadow
                position={[-58.97, -92.67, -139.61]}
                rotation={[-Math.PI, 0.67, -Math.PI / 2]}
              />
            </group>
            <mesh
              name="Cube 71"
              geometry={nodes['Cube 71'].geometry}
              material={materials['main-3']}
              castShadow
              receiveShadow
              position={[-139.98, -2.99, -81.82]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube 6"
              geometry={nodes['Cube 6'].geometry}
              material={materials['main-3']}
              castShadow
              receiveShadow
              position={[139.49, -2.99, -83.54]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube 72"
              geometry={nodes['Cube 72'].geometry}
              material={materials['main-3']}
              castShadow
              receiveShadow
              position={[-139.92, -46.3, -3.35]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube 5"
              geometry={nodes['Cube 5'].geometry}
              material={materials['main-3']}
              castShadow
              receiveShadow
              position={[139.55, -46.3, -5.06]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube 42"
              geometry={nodes['Cube 42'].geometry}
              material={materials['blue-a-2']}
              castShadow
              receiveShadow
              position={[0, 2.04, 0]}
              rotation={[-1.13, 0, -Math.PI / 2]}
            />
          </group>
          <group name="plant 2" position={[655.89, -144.71, 435.09]} rotation={[0, -1.05, 0]} scale={1.52}>
            <mesh
              name="Cube 51"
              geometry={nodes['Cube 51'].geometry}
              material={materials['Cube 51 Material']}
              castShadow
              receiveShadow
              position={[-9.04, 12.19, 0.73]}
              rotation={[-Math.PI, 0, 2.71]}
            />
            <mesh
              name="Cube 43"
              geometry={nodes['Cube 43'].geometry}
              material={materials['Cube 43 Material']}
              castShadow
              receiveShadow
              position={[5.49, 46.53, -1.34]}
              rotation={[-0.05, 0.01, -0.13]}
            />
            <mesh
              name="Cube 3"
              geometry={nodes['Cube 3'].geometry}
              material={materials['Cube 3 Material']}
              castShadow
              receiveShadow
              position={[7.82, 68.33, -2.54]}
              rotation={[0, 0, 0.05]}
            />
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials['Cube 2 Material']}
              castShadow
              receiveShadow
              position={[-1.09, -85.49, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group name="earphone" position={[498.56, -297.32, 347.25]} rotation={[0.04, -0.01, -0.12]}>
            <mesh
              name="line"
              geometry={nodes.line.geometry}
              material={materials['line Material']}
              castShadow
              receiveShadow
              position={[-192.14, -93.05, -3.89]}
              rotation={[2.79, 1.36, -2.8]}
              scale={[-2.04, 2.04, 2.04]}
            />
            <group name="Group 50" position={[-38.67, 10.21, 105.47]} rotation={[-0.08, 0.47, -1.6]} scale={0.84}>
              <mesh
                name="Rectangle 3"
                geometry={nodes['Rectangle 3'].geometry}
                material={materials['Rectangle 3 Material']}
                castShadow
                receiveShadow
                position={[-1.2, -0.12, 15.36]}
              />
              <mesh
                name="Rectangle 2"
                geometry={nodes['Rectangle 2'].geometry}
                material={materials['Rectangle 2 Material']}
                castShadow
                receiveShadow
                position={[-1.2, -0.12, 8.51]}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials['Cube Material']}
                castShadow
                receiveShadow
                position={[0, 0, -7.36]}
              />
            </group>
            <group name="Group 51" position={[-111.24, 1.41, -9.91]} rotation={[3.07, -0.73, 1.6]} scale={0.84}>
              <mesh
                name="Rectangle 31"
                geometry={nodes['Rectangle 31'].geometry}
                material={materials['Rectangle 31 Material']}
                castShadow
                receiveShadow
                position={[-1.2, -0.12, 15.36]}
              />
              <mesh
                name="Rectangle 21"
                geometry={nodes['Rectangle 21'].geometry}
                material={materials['Rectangle 21 Material']}
                castShadow
                receiveShadow
                position={[-1.2, -0.12, 8.51]}
              />
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials['Cube1 Material']}
                castShadow
                receiveShadow
                position={[0, 0, -7.36]}
              />
            </group>
            <mesh
              name="Cylinder 2"
              geometry={nodes['Cylinder 2'].geometry}
              material={materials['Cylinder 2 Material']}
              castShadow
              receiveShadow
              position={[-108.14, 0.25, -37.35]}
              rotation={[-1.66, 0.02, -0.76]}
              scale={1.2}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials['Cylinder Material']}
              castShadow
              receiveShadow
              position={[-14.86, 11.43, 113.34]}
              rotation={[-1.66, 0.02, -1.19]}
              scale={1.2}
            />
            <mesh
              name="Torus"
              geometry={nodes.Torus.geometry}
              material={materials['Torus Material']}
              castShadow
              receiveShadow
              position={[-46.36, 3.62, 28.47]}
              rotation={[-1.66, 0.02, -2.59]}
              scale={[1.26, 1.2, 1.2]}
            />
          </group>
          <group
            name="plant1"
            position={[602.15, -363.43, 814.53]}
            rotation={[-Math.PI, 0.33, -Math.PI]}
            scale={[1.84, 1.83, 2.18]}
          >
            <mesh
              name="Cylinder 3"
              geometry={nodes['Cylinder 3'].geometry}
              material={materials['Cylinder 3 Material']}
              castShadow
              receiveShadow
              position={[29.75, 19.92, 9.98]}
              rotation={[0.1, -0.43, 0.04]}
            />
            <mesh
              name="Cylinder 21"
              geometry={nodes['Cylinder 21'].geometry}
              material={materials['Cylinder 21 Material']}
              castShadow
              receiveShadow
              position={[-2.93, -59.75, 3.72]}
            />
            <mesh
              name="Cylinder1"
              geometry={nodes.Cylinder1.geometry}
              material={materials['Cylinder1 Material']}
              castShadow
              receiveShadow
              position={[-0.96, -139, -2.72]}
            />
          </group>
          <group name="box 2" position={[569.24, -600.56, -492.62]} rotation={[0, -1.49, 0]} scale={[2.25, 2.26, 2.26]}>
            <mesh
              name="Rectangle 9"
              geometry={nodes['Rectangle 9'].geometry}
              material={materials['Rectangle 9 Material']}
              castShadow
              receiveShadow
              position={[57.6, -29.15, -12]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              name="Cube2"
              geometry={nodes.Cube2.geometry}
              material={materials['blue-1-3']}
              castShadow
              receiveShadow
              position={[-0.69, -0.53, -1.41]}
              scale={0.78}
            />
          </group>
          <group
            name="chair 2"
            position={[225.66, -553.54, -148.89]}
            rotation={[0, -0.53, 0]}
            scale={[1.34, 1.39, 1.39]}
          >
            <mesh
              name="Cube 9"
              geometry={nodes['Cube 9'].geometry}
              material={materials['bule-b-2']}
              castShadow
              receiveShadow
              position={[-2.31, 99.85, -2.38]}
              rotation={[Math.PI / 2, 0, Math.PI / 4]}
            />
            <mesh
              name="Cube 8"
              geometry={nodes['Cube 8'].geometry}
              material={materials['bule-b-2']}
              castShadow
              receiveShadow
              position={[-2.38, 98.17, 2.31]}
              rotation={[Math.PI / 2, 0, -Math.PI / 4]}
            />
            <mesh
              name="Cylinder 6"
              geometry={nodes['Cylinder 6'].geometry}
              material={materials['Cylinder 6 Material']}
              castShadow
              receiveShadow
              position={[67.32, -2.73, 67.27]}
              rotation={[1.4, -1.48, 1.48]}
              scale={1.24}
            />
            <mesh
              name="Cylinder 4"
              geometry={nodes['Cylinder 4'].geometry}
              material={materials['Cylinder 4 Material']}
              castShadow
              receiveShadow
              position={[67.27, -2.73, -67.32]}
              rotation={[0.09, 0.02, 0.09]}
              scale={1.24}
            />
            <mesh
              name="Cylinder 61"
              geometry={nodes['Cylinder 61'].geometry}
              material={materials['Cylinder 61 Material']}
              castShadow
              receiveShadow
              position={[-67.32, -2.73, -67.33]}
              rotation={[-Math.PI / 2, -1.48, -1.66]}
              scale={1.24}
            />
            <mesh
              name="Cylinder 5"
              geometry={nodes['Cylinder 5'].geometry}
              material={materials['Cylinder 5 Material']}
              castShadow
              receiveShadow
              position={[-67.33, -2.73, 67.32]}
              rotation={[-0.09, 0, -0.09]}
              scale={1.24}
            />
            <mesh
              name="Cylinder 22"
              geometry={nodes['Cylinder 22'].geometry}
              material={materials['bule-b-2']}
              castShadow
              receiveShadow
              position={[3.25, 118.41, 3.32]}
              scale={1.24}
            />
          </group>
          <mesh
            name="icon"
            geometry={nodes.icon.geometry}
            material={materials.purple}
            castShadow
            receiveShadow
            position={[729.44, -152.8, 811.58]}
            rotation={[-0.35, -1.14, -1.09]}
          />
          <group name="window" position={[-18.77, 206.91, -851.26]} rotation={[0, -0.01, 0]}>
            <mesh
              name="Cube 44"
              geometry={nodes['Cube 44'].geometry}
              material={materials['blue-a-2']}
              castShadow
              receiveShadow
              position={[0.63, 0.94, -10.81]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube 52"
              geometry={nodes['Cube 52'].geometry}
              material={materials['blue-a-2']}
              castShadow
              receiveShadow
              position={[1.69, 105.58, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="窗户"
              geometry={nodes.窗户.geometry}
              material={materials['窗户 Material']}
              castShadow
              receiveShadow
              position={[0, -198.5, 9.16]}
              rotation={[0, 0, -Math.PI / 2]}
            />
          </group>
          <group name="table" position={[587.06, -533.22, -235.6]} rotation={[0, -0.01, 0]} scale={[0.7, 0.75, 0.7]}>
            <mesh
              name="Cube 31"
              geometry={nodes['Cube 31'].geometry}
              material={materials['table-ao']}
              castShadow
              receiveShadow
              position={[231.35, -29.75, -676.32]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1.42}
            />
            <mesh
              name="Cube 32"
              geometry={nodes['Cube 32'].geometry}
              material={materials['table-ao']}
              castShadow
              receiveShadow
              position={[-249.64, -29.75, -676.32]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1.42}
            />
            <mesh
              name="Cube 21"
              geometry={nodes['Cube 21'].geometry}
              material={materials['table-ao']}
              castShadow
              receiveShadow
              position={[231.35, -29.75, 886.09]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1.42}
            />
            <mesh
              name="Cube3"
              geometry={nodes.Cube3.geometry}
              material={materials['table-ao']}
              castShadow
              receiveShadow
              position={[-249.64, -29.75, 886.09]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1.42}
            />
            <mesh
              name="Rectangle1"
              geometry={nodes.Rectangle1.geometry}
              material={materials['Rectangle1 Material']}
              castShadow
              receiveShadow
              position={[0, 230.16, 109]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
          </group>
          <group name="carpet " position={[-242.97, -737.64, 127.6]} rotation={[0, -0.01, 0]} scale={0.96}>
            <mesh
              name="Ellipse 3"
              geometry={nodes['Ellipse 3'].geometry}
              material={materials['Ellipse 3 Material']}
              castShadow
              receiveShadow
              position={[0, 10.56, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1.09, 1.09, 1.66]}
            />
            <mesh
              name="Ellipse 2"
              geometry={nodes['Ellipse 2'].geometry}
              material={materials['Ellipse 2 Material']}
              castShadow
              receiveShadow
              position={[0, 7.39, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1.09, 1.09, 1.66]}
            />
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials['Ellipse Material']}
              castShadow
              receiveShadow
              position={[0, -7.39, 0]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.09, 1.09, 1.66]}
            />
          </group>
        </group>
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" position={[0, 1, 0]} />
      </group>
    </>
  )
}
