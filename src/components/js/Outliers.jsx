import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpg'
import img6 from '../../assets/images/6.jpg'
import img7 from '../../assets/images/7.jpg'
import img8 from '../../assets/images/8.jpg'
import img9 from '../../assets/images/9.jpg'
import img10 from '../../assets/images/10.jpg'
import img11 from '../../assets/images/11.jpg'
import img12 from '../../assets/images/12.jpg'
import '../css/OSF.css'

const Outliers = () => {
    return (
        <div className='w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center p-4 gap-4'>
            <div className="text-center d-flex flex-column justify-content-center align-items-center ">
                <p className="text-warning fw-bold">LISTEN NOW</p>
                <p className="text-light h2">Outliers Podcast</p>
                <p className="text-light h5" style={{maxWidth: '540px'}}>Every week, I sit down with someone in the Top 1% of their field to decode what they've mastered and what they've learned along the way.</p>
                <button style={{paddingInline: '30px', letterSpacing: '1px'}} className='btnout py-3 rounded-end-5 border-0 rounded-start-5'>Explore Episodes</button>
                <div className='d-flex  gap-7 justify-content-center align-items-center gap-3' style={{height: '400px', overflow: 'hidden', borderEndStartRadius: '15px', borderEndEndRadius: '15px'}}>
                    <div className='d-flex flex-column gap-3' style={{width: '28%'}}>
                        <img src={img1} alt="img1" className='w-100 position-relative' style={{borderStartEndRadius: '15px', borderEndEndRadius: '15px'}} />
                        <img src={img2} alt="img2" className='position w-100' style={{borderStartEndRadius: '15px'}} />
                    </div>
                    <div className='d-flex flex-column gap-3 pt-5' style={{width: '35%'}}>
                        <img src={img3} alt="img3" className='w-100 position-relative' style={{borderRadius: '15px'}} />
                        <img src={img4} alt="img4" className='position w-100' style={{borderRadius: '15px'}} />
                    </div>
                    <div className='d-flex flex-column gap-3' style={{width: '28%'}}>
                        <img src={img5} alt="img5" className='w-100 position-relative' style={{borderStartEndRadius: '15px', borderEndEndRadius: '15px'}} />
                        <img src={img6} alt="img6" className='position w-100' style={{borderStartStartRadius: '15px'}} />
                    </div>
                </div>
            </div>
            <div className="text-center d-flex flex-column justify-content-center align-items-center ">
                <p className="text-warning fw-bold">SUBSCRIBE NOW</p>
                <p className="text-light h2">Friday 5 Email</p>
                <p className="text-light h5" style={{maxWidth: '540px'}}>Every Friday, I share five things I've been reading, using, and loving—including articles, biohacks, gadgets, and more.</p>
                <button style={{paddingInline: '30px', letterSpacing: '1px'}} className='btnout py-3 rounded-end-5 border-0 rounded-start-5'>Explore Episodes</button>
                <div className='d-flex  gap-7 justify-content-center align-items-center gap-3' style={{height: '400px', overflow: 'hidden', borderEndStartRadius: '15px', borderEndEndRadius: '15px'}}>
                    <div className='d-flex flex-column gap-3' style={{width: '28%'}}>
                        <img src={img7} alt="img7" className='w-100 position-relative' style={{borderStartEndRadius: '15px', borderEndEndRadius: '15px'}} />
                        <img src={img8} alt="img8" className='position w-100' style={{borderStartEndRadius: '15px'}} />
                    </div>
                    <div className='d-flex flex-column gap-3 pt-5' style={{width: '35%'}}>
                        <img src={img9} alt="img9" className='w-100 position-relative' style={{borderRadius: '15px'}} />
                        <img src={img10} alt="img10" className='position w-100' style={{borderRadius: '15px'}} />
                    </div>
                    <div className='d-flex flex-column gap-3' style={{width: '28%'}}>
                        <img src={img11} alt="img11" className='w-100 position-relative' style={{borderStartEndRadius: '15px', borderEndEndRadius: '15px'}} />
                        <img src={img12} alt="img12" className='position w-100' style={{borderStartStartRadius: '15px'}} />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Outliers