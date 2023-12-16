import $ from 'jquery'
import './Slick.css'
import { Button, Card } from 'react-bootstrap';
import { SlickList } from './SlickList';


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
        <div className='d-flex flex-column justify-content-center mw-50 px-[80px]' style={{paddingLeft: '80px', paddingRight: '80px'}}>
            <div className="slick text-light d-flex justify-content-center">
              {SlickList.map((slick) => {
                return (
                  <a href="#">
                    <Card style={{ maxWidth: '390px', marginRight: '30px', backgroundColor: 'black'}} className='rounded pb-2 d-flex justify-content-center'>
                      <Card.Img variant="top" src={slick.img} />
                      <Card.Body style={{height: '390px'}} className='border rounded bg-light'>
                        <Card.Title className='text-black bg-light'>{slick.title}</Card.Title>
                        <Card.Text className='text-black bg-light'>{slick.text}</Card.Text>
                        <a href="#" className='text-decoration-none bg-light text-warning font-weight-bold h5'>Show Notes  </a>
                      </Card.Body>
                    </Card>
                  </a>
                );
                })}
            </div>
				
        </div>
    );
}

export default Slick
