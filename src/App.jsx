import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment, AccumulativeShadows, RandomizedLight, OrbitControls, Backdrop } from "@react-three/drei";
import Iphone15black from "./component/Iphone15black";
import CanvasLoading from "./component/CanvasLoading";
import Iphone15deepblue from "./component/Iphone15deepblue";
import Iphone15lightblue from "./component/Iphone15lightblue";
import Herocamera from "./component/Herocamera";
function App() {
  const [selectedColor, setSelectedColor] = useState("midnight");

  const colors = [
    { id: "black", name: "Midnight", hex: "#000000" },
    { id: "deepblue", name: "DeepBlue", hex: "#2980B9" },
    { id: "lightblue", name: "Lightblue", hex: "#3498DB" },
  ];

  const phoneImages = {
    black: <Iphone15black  />,
    deepblue: <Iphone15deepblue  />,
    lightblue: <Iphone15lightblue  />,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <span className="text-xl font-semibold">iPhone</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-500 transition-colors">
                Home
              </a>
              <a
                href="#features"
                className="hover:text-blue-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#colors"
                className="hover:text-blue-500 transition-colors"
              >
                Colors
              </a>
              <a
                href="#specs"
                className="hover:text-blue-500 transition-colors"
              >
                Specs
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-20">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              iPhone 15 Pro Max
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Titanium. So strong. So light. So Pro.
            </p>
          </motion.div>

          {/* Phone Display */}
          <div className="relative w-full max-w-2xl mx-auto my-12">
            <Canvas className="w-full mx-auto" style={{ height: "500px" }} camera={{ position: [0, 0, 10], fov: 45 }}>
              <color attach="background" args={['#000000']} />
              <Suspense fallback={<CanvasLoading />}>
                <Herocamera>
                  {phoneImages[selectedColor] || phoneImages.black}
                </Herocamera>
                
                {/* Custom environment with backdrop */}
                <Environment
                  preset="night"
                  // resolution={256}
                  // background={false} // Set to false to use custom background
                />
                
                {/* Custom backdrop for the scene */}
                {/* <Backdrop
                  // receiveShadow
                  position={[0, -1, -5]} // Adjust the position
                >
                  <meshStandardMaterial color="#101010" metalness={0} roughness={1} />
                </Backdrop> */}

              </Suspense>


              {/* <OrbitControls 
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2.2}
                maxPolarAngle={Math.PI / 2.2}
              /> */}

              <ambientLight intensity={0.5} />
              <directionalLight
                color="#ffffff"
                intensity={1.2}
                position={[5, 5, 5]}
              />
              <directionalLight
                color="#ffffff"
                intensity={0.8}
                position={[-5, -5, -5]}
              />
             
            </Canvas>
          </div>

          {/* Color Selection */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Chọn màu
            </h2>
            <div className="flex space-x-4 justify-center">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                    selectedColor === color.id
                      ? "border-blue-500"
                      : "border-gray-400"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Features Section */}
          <section
            id="features"
            className="mt-32 w-full max-w-6xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-3">A17 Pro Chip</h3>
                <p className="text-gray-400">
                  The fastest chip ever in a smartphone, delivering incredible
                  performance.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-3">Pro Camera</h3>
                <p className="text-gray-400">
                  48MP main camera with advanced features for stunning
                  professional photos.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-3">All-Day Battery</h3>
                <p className="text-gray-400">
                  Up to 29 hours of video playback on a single charge.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-16 mb-32 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Pre-order Now
            </motion.button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Trần thanh phong</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
