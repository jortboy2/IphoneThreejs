import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { easing } from 'maath';
function Herocamera({children}) {
    const groupref = useRef();
    useFrame((state,delta) => {
        easing.damp3(groupref.current.rotation, [state.pointer.y / 3,-state.pointer.x / 5, 0], 0.25, delta)
    })
    return (
        <group ref={groupref}>
            {children}
        </group>
    );
}

export default Herocamera;