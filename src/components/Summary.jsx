import { Button } from "react-bootstrap";

const Summary = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center text-light p-5 gap-3">
            <p className="fw-bold font-italic h2">GET THE WEEKLY SUMMARY</p>
            <div>
                <p className="h6" style={{maxWidth: '480px'}}>Join 7,500+ including Fortune 500 CEOs, championship coaches, and bestselling authors who get my free weekly summary.</p>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <input type="text" className="text-light p-2 border rounded-start" style={{ maxWidth: '300px', width: '50%'}} placeholder="Enter your email..."/>
                <input type="button" value="Try it" className="bg-light border rounded-end text-black py-2 fw-bold px-4 border-0" />
            </div>
            <div>
                <p className="text-secondary">By subscribing, you agree to our <a href="#" className="text-secondary">privacy policy</a> .</p>
            </div>
        </div>
    );
}

export default Summary