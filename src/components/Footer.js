import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";

function Footer() {
    return(
        <Container fluid className="custom-container-height bg-dark justify-content-center">
            <div className='row mx-auto top-padding fw-bold text-white text-center'>
                <h3 className="d-inline-block pb-4 text-white text-center">Let's Get In Touch!</h3>
                <h6 className="d-inline-block lh-base pb-5 text-white text-center">Ready to get involved, have an event idea you'd like to see, or want to be a partner? Awesome! <br></br> Send us an email or reach out on social media and we'll get back with you soon.</h6>
            </div>
            <Container className='d-flex fw-bold text-white text-center'>
                <div className="row mx-auto">
                    <div className="col">
                        <a className="text-decoration-none" href="mailto:ksuacm@ksu.edu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
                        </a>
                    </div>
                    <div className="col">
                        <a className="text-decoration-none" href="https://www.facebook.com/kstateacm" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
                        </a>
                    </div>
                    <div className="col">
                        <a className="text-decoration-none" href="https://twitter.com/ksuacm" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16">
                                {/* Specific logo path below */}
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>
                    </div>
                    <div className="col">
                        <a className="text-decoration-none" href="http://acm.cs.ksu.edu/discord" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-discord" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/></svg>
                        </a>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default Footer;