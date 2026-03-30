import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../img/KStateACM.png';

function Logo() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        const loadVanta = async () => {
            if (vantaEffect.current) return;
            if (!vantaRef.current) return;

            const THREE = await import('three');
            window.THREE = THREE;

            const WAVES = (await import('vanta/dist/vanta.waves.min')).default;

            vantaEffect.current = WAVES({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x6d2f8f,
                backgroundColor: 0x0a0a0a,
                shininess: 10.00,
                waveHeight: 15.00,
                waveSpeed: 1.00,
                zoom: 0.75,
            });
        };

        loadVanta();

        return () => {
            if (vantaEffect.current) vantaEffect.current.destroy();
        };
    }, []);

    return (
        // Plain div with the ref — Vanta needs a real DOM node
        <div ref={vantaRef} style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            {/* Logo */}
            <img
                src={logo}
                alt="KStateACMLogo"
                style={{
                    width: '500px',
                    height: '300px',
                    objectFit: 'contain',
                    //filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.6))',
                    marginBottom: '20px',  // space between logo and text
                }}/>

            {/* Text content */}
            <div style={{ textAlign: 'center' }}>
                <h1 className="fw-bold text-white">
                    ASSOCIATION FOR COMPUTING MACHINERY
                </h1>
                <h3 className="fw-bold text-white">
                    KANSAS STATE UNIVERSITY
                </h3>
            </div>

        </div>
    );
}

export default Logo;