import { useEffect } from 'react'
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import mushroomModel from './models/mushroom.glb?url'
import pikachuModel from './models/pikachu.glb?url'
import sunflowerModel from './models/sunflower.glb?url'

function App() {
  useEffect(() => {
    console.log('A-Frame version:', AFRAME.version)
  }, [])

  return (
    <Scene fog="type: linear; color: #e8f4f8; near: 40; far: 80">
      {/* Cielo de fondo */}
      <a-sky color="#87CEEB"></a-sky>
      
      {/* Iluminación */}
      <Entity 
        primitive="a-light" 
        type="ambient" 
        color="#FFF8E7" 
        intensity="0.7"
      />
      
      <Entity 
        primitive="a-light" 
        type="directional" 
        color="#FFFAF0" 
        intensity="1.0"
        position={{ x: 5, y: 8, z: 5 }}
      />
      
      {/* Luz hemisférica para ambiente natural */}
      <Entity 
        primitive="a-light" 
        type="hemisphere" 
        color="#87CEEB" 
        groundColor="#90EE90"
        intensity="0.6"
      />
      
      {/* Modelo Mushroom GLB */}
      <Entity
        gltf-model={mushroomModel}
        position={{ x: 0, y: 2, z: -10 }}
        rotation={{ x: -70, y: 20, z: 10 }}
        scale={{ x: 30, y: 30, z: 30 }}
        class="clickable"
        animation__scale={{
          property: 'scale',
          to: '32 32 32',
          dir: 'alternate',
          loop: true,
          dur: 1200,
          easing: 'easeInOutQuad',
          autoplay: false,
          startEvents: 'mouseenter',
          pauseEvents: 'mouseleave'
        }}
        animation__wiggle={{
          property: 'rotation',
          to: '-70 30 10',
          dir: 'alternate',
          loop: true,
          dur: 800,
          easing: 'easeInOutQuad',
          autoplay: false,
          startEvents: 'mouseenter',
          pauseEvents: 'mouseleave'
        }}
      />

      {/* Modelo Sunflower GLB */}
      <Entity
        gltf-model={sunflowerModel}
        position={{ x: 10, y: 2.5, z: -15 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={{ x: 1.5, y: 1.5, z: 1.5 }}
        class="clickable"
        animation__swing={{
          property: 'rotation',
          to: '0 0 15',
          dir: 'alternate',
          loop: true,
          dur: 2000,
          easing: 'easeInOutQuad',
          autoplay: false,
          startEvents: 'mouseenter',
          pauseEvents: 'mouseleave'
        }}
        animation__float={{
          property: 'position',
          to: { x: 10, y: 3, z: -15 },
          dir: 'alternate',
          loop: true,
          dur: 1500,
          easing: 'easeInOutSine',
          autoplay: false,
          startEvents: 'mouseenter',
          pauseEvents: 'mouseleave'
        }}
      />
      
      {/* Modelo Pikachu GBL */}
      <Entity
        gltf-model={pikachuModel}
        position={{ x: -15, y: -1, z: -20 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        scale={{ x: 1, y: 1, z: 1 }}
        class="clickable"
        animation__bounce={{
          property: 'position',
          to: '-15 0.8 -20',
          dir: 'alternate',
          loop: true,
          dur: 600,
          easing: 'easeOutQuad',
          autoplay: false,
          startEvents: 'mouseenter',
          pauseEvents: 'mouseleave'
        }}
        animation__tilt={{
          property: 'rotation',
          to: '0 0 -10',
          dir: 'alternate',
          loop: true,
          dur: 1000,
          easing: 'easeInOutQuad',
          autoplay: false,
          startEvents: 'mouseenter',
          pauseEvents: 'mouseleave'
        }}
        animation__squash={{
          property: 'scale',
          to: '1.1 0.9 1.1',
          dir: 'alternate',
          loop: true,
          dur: 600,
          easing: 'easeInOutQuad',
          autoplay: false,
          startEvents: 'mouseenter',
          pauseEvents: 'mouseleave'
        }}
      />

      {/* Pasto bonito con textura */}
      <a-plane 
        rotation="-90 0 0" 
        width="100" 
        height="100" 
        color="#8FBC8F"
        position="0 -1 0"
        material="shader: flat; roughness: 0.9"
      ></a-plane>
      
      {/* Árboles decorativos */}
      {/* Árbol 1 - Izquierda adelante */}
      <Entity position={{ x: -20, y: 0, z: -10 }}>
        <a-cylinder radius="0.6" height="8" color="#8B4513" position="0 4 0"></a-cylinder>
        <a-sphere radius="3.5" color="#228B22" position="0 8.5 0"></a-sphere>
        <a-sphere radius="3" color="#32CD32" position="0 10.5 0"></a-sphere>
        <a-sphere radius="2.5" color="#2E8B57" position="1.5 9 0"></a-sphere>
        <a-sphere radius="2.5" color="#2E8B57" position="-1.5 9 0"></a-sphere>
      </Entity>
      
      {/* Árbol 2 - Derecha adelante */}
      <Entity position={{ x: 20, y: 0, z: -12 }}>
        <a-cylinder radius="0.7" height="9" color="#8B4513" position="0 4.5 0"></a-cylinder>
        <a-sphere radius="4" color="#228B22" position="0 9.5 0"></a-sphere>
        <a-sphere radius="3.5" color="#32CD32" position="0 11.5 0"></a-sphere>
        <a-sphere radius="3" color="#2E8B57" position="2 10 0"></a-sphere>
        <a-sphere radius="3" color="#2E8B57" position="-2 10 0"></a-sphere>
      </Entity>
      
      {/* Árbol 3 - Izquierda atrás */}
      <Entity position={{ x: -25, y: 0, z: -30 }}>
        <a-cylinder radius="0.5" height="7" color="#8B4513" position="0 3.5 0"></a-cylinder>
        <a-sphere radius="3" color="#228B22" position="0 7.5 0"></a-sphere>
        <a-sphere radius="2.5" color="#32CD32" position="0 9 0"></a-sphere>
      </Entity>
      
      {/* Árbol 4 - Derecha atrás */}
      <Entity position={{ x: 25, y: 0, z: -32 }}>
        <a-cylinder radius="0.5" height="7" color="#8B4513" position="0 3.5 0"></a-cylinder>
        <a-sphere radius="3" color="#228B22" position="0 7.5 0"></a-sphere>
        <a-sphere radius="2.5" color="#32CD32" position="0 9 0"></a-sphere>
      </Entity>
      
      {/* Flores decorativas en el pasto */}
      <a-circle rotation="-90 0 0" radius="0.3" color="#FF69B4" position="5 -0.95 -5"></a-circle>
      <a-circle rotation="-90 0 0" radius="0.2" color="#FFD700" position="5 -0.94 -5"></a-circle>
      
      <a-circle rotation="-90 0 0" radius="0.3" color="#FF1493" position="-8 -0.95 -8"></a-circle>
      <a-circle rotation="-90 0 0" radius="0.2" color="#FFFF00" position="-8 -0.94 -8"></a-circle>
      
      <a-circle rotation="-90 0 0" radius="0.3" color="#FF69B4" position="7 -0.95 -12"></a-circle>
      <a-circle rotation="-90 0 0" radius="0.2" color="#FFD700" position="7 -0.94 -12"></a-circle>
      
      <a-circle rotation="-90 0 0" radius="0.3" color="#FF1493" position="-10 -0.95 -15"></a-circle>
      <a-circle rotation="-90 0 0" radius="0.2" color="#FFFF00" position="-10 -0.94 -15"></a-circle>
      
      {/* Cámara */}
      <a-entity position="0 1.6 6">
        <a-camera look-controls wasd-controls="acceleration: 80">
          <a-cursor
            fuse="true"           
            fuse-timeout="1500"   
            raycaster="objects: .clickable"
            color="#FF4081"  
          ></a-cursor>
        </a-camera>
      </a-entity>

    </Scene>
  )
}

export default App
