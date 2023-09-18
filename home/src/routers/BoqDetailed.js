
import {Container,Button,Image,Form ,Col,Row,Card,Carousel,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from 'react';

import { serverurl } from './serverurl.js';
import { Profile } from './NavBar.js';

import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';

export  function BoqDetailed() {
	let {id} = useParams();
  const tempImgUrl = `${serverurl}/images/tempHomeDetiled.jpg`;
	const [boq,setBoq] = useState('');
  const [reviews, setReviews] = useState([{content:'시설이 조아요!',writer:'김**',time:'2023.03.31'}])

  

  useEffect(()=>{
    axios.get(serverurl+`/boq/detailinfo/${id}`)
    .then((result)=>{
        if (result.data.isSuccess){
          setBoq(result.data.boq);
        }else{
          throw "err";
        }
    }).catch((err)=>{
        alert("에러 입니다"+err);
    })
  },[])


  return (
    <>	
      <Container className="mt-5">
      <div className="row d-flex justify-content-center">
      <div className='col-md-6' >
      <Carousel style={{padding:'20px'}}>
	   <Carousel.Item>
        <Image src={tempImgUrl}
			height={300}
			
			alt={"프로필이미지 없음"}/>
        <Carousel.Caption>
          <h3>예시 사진</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={tempImgUrl}
			height={300}
			
			alt={"프로필이미지 없음"}/>
        <Carousel.Caption>
          <h3>예시 사진</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={tempImgUrl}
      height={300}
			
			alt={"프로필이미지 없음"}/>
        <Carousel.Caption>
        <h3>예시 사진</h3>
          
        </Carousel.Caption>
      </Carousel.Item> 
	  
	  
	 </Carousel>

    {(boq) ? (<BoqContent boq={boq}></BoqContent>) : (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)}
    

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


export function BoqContent(props){
    return (
      <>
      <Container className='mt-2' >
      
        <h1>{props.boq.build_nm}</h1>
        <h3>관리부대:{props.boq.a_dvs} {props.boq.mng_unit}</h3>
        <h4>위치:{props.boq.sido} {props.boq.sigun} {props.boq.eupmyeon}</h4>

        <div>공급세대:{props.boq.sply}</div>
        <div>준공년도:{props.boq.build_year}</div>
        {(props.boq.und20) ? (<div>20평미만 세대수:{props.boq.und20}</div>) : null}
        {(props.boq.up20und30) ? (<div>20~30평 세대수:{props.boq.up20und30}</div>) : null}
        {(props.boq.up30und40) ? (<div>30~40평 세대수:{props.boq.up30und40}</div>) : null}
        {(props.boq.up40) ? (<div>40평이상 세대수:{props.boq.up40}</div>) : null}
    </Container>
      
      </>
    );
}




