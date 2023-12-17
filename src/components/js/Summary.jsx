import { Button } from "react-bootstrap";
import '../css/OSF.css'

const Summary = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center text-light p-5 gap-3">
            <p className="fw-bold font-italic h2">GET THE WEEKLY SUMMARY</p>
            <div>
                <p className="h6" style={{maxWidth: '480px'}}>Join 7,500+ including Fortune 500 CEOs, championship coaches, and bestselling authors who get my free weekly summary.</p>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <input type="text" className="text-light p-2 px-4 border rounded-start-3" style={{ maxWidth: '300px', width: '50%'}} placeholder="Enter your email..."/>
                <button style={{paddingInline: '30px', letterSpacing: '1px'}} className='btnout py-3 rounded-end-3 border-0 fw-bold'>Try It</button>
            </div>
            <div>
                <p className="" style={{color: 'gray'}}>By subscribing, you agree to our <a href="#" className="pp" >privacy policy</a> .</p>
            </div>
        </div>
    );
}

export default Summary