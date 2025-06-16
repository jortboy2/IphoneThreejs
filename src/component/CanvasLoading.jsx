import { Html, useProgress } from '@react-three/drei';
import React from 'react';

function CanvasLoading(props) {
    const {process} = useProgress();
    return (
        <Html as='div' center style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <span className='canvas-loader'>
                <p style={{fontSize: 14, color: "#F1F1F1", fontWeight: 800, marginTop: 40}}>
                    {process != 0 ? `Loading...` : 'Loading...'}
                </p>
            </span>
        </Html>
    );
}

export default CanvasLoading;