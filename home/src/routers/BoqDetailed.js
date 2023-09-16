
import {Container,Button,Image,Form ,Col,Row,Card,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';

import { serverurl } from './serverurl.js';
import { Profile } from './NavBar.js';

import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';

export default function BoqDetailed() {
	let {id} = useParams();
	const [boq,setBoq] = useState({name:'햇님달님동',
                                    description:'햇남달님동입니다',
                                    imgurl:`${serverurl}/images/tempHomeDetiled.jpg`});
    const [reviews, setReviews] = useState([{content:'시설이 조아요!',writer:'김**',time:'2023.03.31'}])

  return (
    <>	
      <Container className="mt-5">
      <div className="row d-flex justify-content-center">
      <div className='col-md-6' >
      <Carousel style={{padding:'20px'}}>
	   <Carousel.Item>
        <Image src={boq.imgurl}
			height={200}
			
			alt={"프로필이미지 없음"}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={boq.imgurl}
			height={200}
			
			alt={"프로필이미지 없음"}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={boq.imgurl}
			height={200}
			
			alt={"프로필이미지 없음"}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> 
	  
	  
	 </Carousel>


    <Container className='mt-2' >
        <h1>{id}</h1>
        <h3>{boq.description}~~</h3>
    </Container>

    <div style={{    background: '#F8F9FA',
                padding: '5px'}}></div>

    <Container className='mt-2'>
        <h2>후기</h2>
        {reviews.map((review)=>{
            if (!reviews){
                return(
                    <>
                    <div>리뷰없음</div>
                    </>
                )
            }else{
                return(
                    <Card style={{ width: '100%' ,display:'flex', flexDirection:'row', justifyContent:'center'}}>
                
                    <Card.Body>
               
                    <Card.Text>{review.content}</Card.Text>
                    <span style={{opacity:0.5}}>{review.writer} : {review.time}</span>
                    </Card.Body>
                    </Card>
    
                )
            }
            
            
        })}
        


    </Container>



      </div>
      </div>
      </Container>
	 			
		
	
    </>
  );
}




