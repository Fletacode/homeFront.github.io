
import {Container,Button,Image,Form ,Col,Row,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';

import { serverurl } from './serverurl.js';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

export default function Boq() {
	const navigate = useNavigate();
  
	const [boqs,setBoqs] = useState([{name:'햇님달님동',
                                    description:'햇남달님동입니다'}])
	

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

      {boqs.map((boq)=>{
        return(
        <>
        <Card style={{ width: '100%' ,display:'flex', flexDirection:'row', justifyContent:'center'}}
              onClick={()=>{navigate(`/boq/${boq.name}`)}}>
        <Card.Img className="m-2" variant="top" src="holder.js/100px180" style={{width:'10rem'}}/>
        <Card.Body>
        <Card.Title>{boq.name}</Card.Title>
        <Card.Text>{boq.description}</Card.Text>
        </Card.Body>
        </Card>

        </>
        )
      })}

      
      
      
      
      
      
      </div>
      </div>
      
    </Container>
	 			
		
	
    </>
  );
}




