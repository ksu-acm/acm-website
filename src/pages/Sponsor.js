import { Container, Navbar } from "react-bootstrap";
import Navigation from "../components/Navigation";
import partners from "../Sponsors.json";
import Footer from "../components/Footer";
import "../stylesheets/Sponsor.css"



function Sponsor(){


    return(
        <div style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #2d0060 50%, #6d2f8f 100%)', minHeight: '100vh' }}>
            <Navigation />
            <div style={{padding: '100px 0 80px 0',textAlign: 'center'}}>
                <Container>
                    <h1 className="fw-bold text-white" style={{ fontSize: '3.5rem', margin: 0, marginBottom: '20px' }}>
                        K-State ACM Partners
                    </h1>

                    <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem',maxWidth: '600px',margin: '0 auto'}}>
                        These are the companies that continue to provide support for ACM. Each company hosts events, provides financial support, and connects with students for future opportunities.
                    </p>
                </Container>
            </div>

            <div style={{ padding: '40px 0 80px 0' }}>
                <Container>
                    
                    <div style={{display: 'grid',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',gap: '24px'}}>
                        {partners.map((partner, index) => (
                            <div className="logo-card" style={{width: "220px",height: "120px",display: "flex",justifyContent: "center",alignItems: "center" ,animationDelay: `${index * 0.15}s`}}>
                                <img src={partner.logo} alt={partner.name} style={{maxWidth: "100%",maxHeight: "100%",objectFit: "contain"}} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <Footer />
        </div>
    );
}



export default Sponsor;


