import daniel from '../assets/daniel.png'
import jessica from '../assets/jessica.jpeg'
import billboard from '../assets/billboard.svg'
import bloomberg from '../assets/bloomberg.svg'
import theNYtimes from '../assets/theNYtimes.svg'
import theWTpost from '../assets/theWTpost.svg'
import espn from '../assets/espn.svg'

const Dashboard = () => {
    return (
        <div className="text-light d-flex flex-column flex-md-row px-3 justify-content-center align-items-center mt-5" style={{marginTop: "20px", paddingLeft: "10px"}}>
            <div style={{maxWidth: "650px"}} className='mt-5 d-flex flex-column align-items-center align-items-md-start'>
                <p className='h1 text-light'>Timeless insights for business and life.</p>
                <p style={{maxWidth: "540px"}}>Every week, I sit down with someone in the Top 1% of their field — from NYT bestselling authors to Oscar winners — to decode what they've mastered. Listen as I uncover the tactics, routines, and habits that will propel you to the top of your field.</p>
                <a href="#" className='d-flex gap-3 bg-dark text-decoration-none p-3 align-items-center w-75 rounded my-2'>
                    <img src={jessica} alt="jessica" style={{maxWidth: "100px"}} className='rounded'/>
                    <div className='bg-dark p-2'>
                        <p className='bg-dark text-warning font-weight-bold h6'>LATEST EPISODES</p>
                        <p className='bg-dark text-light'>20 Minute Playbook - Jessica Schaefer of Beveland Acorns</p>
                    </div>
                </a>
                <div className='d-flex gap-2 text-decoration-none align-items-center w-75'>
                    <a href="#" className='bg-dark text-decoration-none py-2 px-4 text-light font-weight-bold h6 rounded'>Starts Here</a>
                    <a href="#" className='bg-dark text-decoration-none py-2 px-4 text-light font-weight-bold h6 rounded'>Listen to the Podcast</a>
                </div>
            </div>
            <div className='100'>
                <img src={daniel} alt="daniel" className='img-fluid' style={{maxWidth: "700px"}}/>
            </div>
            <div className='position-absolute d-flex align-items-end'>
                <div className='d-flex justify-content-between d-none d-lg-block align-items-center'>
                    <img src={billboard} alt="" style={{width: "220px"}}/>
                    <img src={theNYtimes} alt="" style={{width: "220px"}}/>
                    <img src={bloomberg} alt="bloomberg" style={{width: "220px"}}/>
                    <img src={theWTpost} alt="" style={{width: "220px"}}/>
                    <img src={espn} alt="" style={{width: "220px"}}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard