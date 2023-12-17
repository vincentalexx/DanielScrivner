import daniel from '../assets/daniel.png'
import jessica from '../assets/jessica.jpeg'
import billboard from '../assets/billboard.svg'
import bloomberg from '../assets/bloomberg.svg'
import theNYtimes from '../assets/theNYtimes.svg'
import theWTpost from '../assets/theWTpost.svg'
import espn from '../assets/espn.svg'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="text-light d-flex flex-column flex-lg-row-reverse px-5 justify-content-center align-items-center py-5" style={{marginTop: "20px", paddingLeft: "10px"}}>
            <div className='100 d-flex justify-content-center col col-5 col-md-6'>
                <img src={daniel} alt="daniel" className='img-fluid w-100'/>
            </div>
            <div style={{maxWidth: "650px"}} className='mt-5 d-flex flex-column align-items-center align-items-md-start'>
                <p className='h1 text-light'>Timeless insights for business and life.</p>
                <p style={{maxWidth: "540px"}}>Every week, I sit down with someone in the Top 1% of their field — from NYT bestselling authors to Oscar winners — to decode what they've mastered. Listen as I uncover the tactics, routines, and habits that will propel you to the top of your field.</p>
                <a href="#" className='d-flex gap-3 cards text-decoration-none p-3 align-items-center w-75 rounded my-2'>
                    <img src={jessica} alt="jessica" style={{maxWidth: "100px"}} className='rounded'/>
                    <div className='bg-transparent p-2 d-flex flex-column justify-content-center'>
                        <p className='bg-transparent fw-bold mb-0' style={{fontSize: '13px', color: '#ff9900'}}>LATEST EPISODES</p>
                        <p className='bg-transparent mb-0'>20 Minute Playbook - Jessica Schaefer of Beveland Acorns</p>
                    </div>
                </a>
                <div className='d-flex gap-2 text-decoration-none w-75'>
                    <a href="#" className='cards text-decoration-none py-2 px-4 text-light fw-bold h6 rounded'>Starts Here</a>
                    <a href="#" className='cards text-decoration-none py-2 px-4 text-light fwbold h6 rounded'>Listen to the Podcast</a>
                </div>
            </div>
            <div className='position-absolute d-flex align-items-end' style={{marginTop: '550px'}}>
                <div className='d-flex justify-content-between d-none d-lg-block align-items-center'>
                    <img src={billboard} alt="" style={{width: "17vw"}}/>
                    <img src={theNYtimes} alt="" style={{width: "17vw"}}/>
                    <img src={bloomberg} alt="bloomberg" style={{width: "17vw"}}/>
                    <img src={theWTpost} alt="" style={{width: "17vw"}}/>
                    <img src={espn} alt="" style={{width: "17vw"}}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard