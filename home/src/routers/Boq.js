
import {Container,Button,Image,Form ,Col,Row,Card,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from 'react';

import { serverurl } from './serverurl.js';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

export default function Boq() {
	const navigate = useNavigate();
  
	const [boqs,setBoqs] = useState('');
  

  useEffect(()=>{
    axios.get(serverurl+'/boq/info').then((result)=>{
        console.log(result);
        
        if (result.data.isSuccess){
          setBoqs(result.data.boqs);
        }else{
          throw result.data.isSuccess;
        }
        
    }).catch((err)=>{
      alert('boq정보를 받아올 수 없습니다.');
    })
  },[])
                                         

  return (
    <>	
      <Container className="mt-5">
      <div className="row d-flex justify-content-center">
      <div className='col-md-6' >
      <Row className='mb-2'>
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="검색"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search
            </Button>
          </Form>
     
      </Row>

      {(boqs) ? (<BoqList boqs={boqs}></BoqList>) :((<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>))}

      
      
      
      
      
      
      </div>
      </div>
      
    </Container>
	 			
    </>
  );
}


function BoqList(props){
  const navigate = useNavigate();

    return(
    <>
      {props.boqs.map((boq)=>{
        return(
        <>
        <Card style={{ width: '100%' ,display:'flex', flexDirection:'row', justifyContent:'center'}}
              onClick={()=>{navigate(`/boq/${boq._id}`)}}
              key={boq._id}>
        
        <Card.Body>
        <Card.Title>{boq.build_nm}</Card.Title>
        <Card.Text>{boq.a_dvs} {boq.mng_unit}</Card.Text>
        <Card.Text>{boq.sido} {boq.sigun} {boq.eupmyeon}</Card.Text>
        </Card.Body>
        </Card>

        </>
        )
      })}
    
    </>

    )
}




