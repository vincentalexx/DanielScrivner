import $ from 'jquery'
import '../css/Slick.css'
import { Button, Card } from 'react-bootstrap';
import { SlickList } from './SlickList';
import fire from '../../assets/images/fire.svg'
import time from '../../assets/images/time.svg'
import archive from '../../assets/images/archive.svg'



const Slick = () => {
    $(document).ready(function(){
        $('.slick').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });
      });

    return (
        <div className='d-flex flex-column justify-content-center mw-50 align-items-center py-5' style={{}}>
            <div className="slick text-light d-flex justify-content-center align-items-center pl-5" style={{maxWidth: '80vw'}}>
              {SlickList.map((slick) => {
                return (
                  <a href="#" className='d-flex flex-column justify-content-center align-items-center bg-transparent px-2 text-decoration-none'>
                    <Card style={{ maxWidth: '400px', backgroundColor: 'transparent'}} className='slick-hover rounded pb-2 d-flex justify-content-center align-items-center'>
                      
                      <Card.Img variant="top" src={slick.img} />
                      <Card.Body style={{height: '50vh'}} className='border rounded bg-light'>
                        <Card.Title className='bg-transparent title'>{slick.title}</Card.Title>
                        <Card.Text className='text-black bg-transparent'>{slick.text}</Card.Text>
                        <a href="#" className='text-decoration-none bg-transparent text-warning fw-bold h5'>Show Notes > </a>
                      </Card.Body>
                    </Card>
                  </a>
                );
              })}
            </div><br />
            <div className='d-flex px-5 flex-column flex-lg-row justify-content-center align-items-center gap-5 gap-lg-0'>
            <a href="#" className='text-decoration-none d-flex justify-content-center align-items-center'>
              <Card style={{ width: '80%' }} className='card-topic bg-light text-center d-flex justify-content-center align-items-center'>
                <Card.Body className='bg-transparent px-5' style={{maxWidth: '400px'}}>
                  <img src={fire} alt="fire" className='text-white logo rounded-circle mb-3' style={{width: '40px', padding: '11px'}}/>
                  <Card.Title className='bg-transparent fw-bold'>TRENDING NOW</Card.Title>
                  <Card.Text className='bg-transparent'>
                    Find the interviews and articles that are trending now.
                  </Card.Text>
                </Card.Body>
              </Card>
              </a>
              <a href="#" className='text-decoration-none  d-flex justify-content-center align-items-center'>
              <Card style={{ width: '80%' }} className='card-topic bg-light text-center d-flex justify-content-center align-items-center'>
                <Card.Body className='bg-transparent px-5' style={{maxWidth: '400px'}}>
                  <img src={time} alt="fire" className='logo text-white rounded-circle mb-3' style={{width: '40px', padding: '10px'}}/>
                  <Card.Title className='bg-transparent fw-bold'>NEW RELEASE</Card.Title>
                  <Card.Text className='bg-transparent'>
                    Catch up on all of the latest interviews and articles
                  </Card.Text>
                </Card.Body>
              </Card>
              </a>
              <a href="#" className='text-decoration-none d-flex justify-content-center align-items-center'>
                <Card style={{ width: '80%' }} className='card-topic bg-light text-center d-flex justify-content-center align-items-center'>
                  <Card.Body className='bg-transparent px-5 d-flex flex-column justify-content-center align-items-center' style={{maxWidth: '400px'}}>
                    <div style={{width: '40px'}} className='logo images/d-flex justify-content-center align-items-center rounded-circle mb-3'>
                     <img src={archive} alt="archive" className=' text-white bg-transparent' style={{width: '37px', padding: '10px'}}/>
                    </div>
                    <Card.Title className='bg-transparent fw-bold'>THE ARCHIVES</Card.Title>
                    <Card.Text className='bg-transparent'>
                      Explore the archives by browsing categories and tags
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
        </div>
    );
}

export default Slick
