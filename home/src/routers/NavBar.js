import { Navbar,Container,Nav,Offcanvas,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { serverurl } from './serverurl.js';

export function NavBar() {
	const [profiles,setProfiles] = useState('');
	const navigate = useNavigate();
	console.log(profiles);
	const navLogourl = serverurl+'/images/navlogo.png';
	/*
	useEffect(()=>{

        axios.get(serverurl+"/auth/islogin").then((result)=>{
            if (result.data.isSuccess){
				setProfiles(result.data.user);
            }else{
                

            }
        }).catch((err)=>{
            
        })

    },[])
	*/

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
	 <Container>
	 	 <Navbar.Brand href="/"><Image src={navLogourl}
			roundedCircle
			height={55}
			style={{padding:'10px'}}
			alt={"프로필이미지 없음"}/></Navbar.Brand>			
		 <Navbar.Toggle aria-controls="basic-navbar-nav" />
		 <Navbar.Offcanvas
              aria-labelledby='basic-navbar-nav'
              placement="end"
            > 
			 <Offcanvas.Header closeButton>
				 {(profiles) ? (<Profile profiles={profiles}></Profile>) : (<Offcanvas.Title  
															onClick={()=>{navigate('/join')}}>
															로그인하세요
														</Offcanvas.Title>)}
				 
                
              </Offcanvas.Header>
		 
		 	   <Offcanvas.Body>
		 			<Navbar.Collapse id="basic-navbar-nav">
			 			 <Nav className="me-auto">
				  			<Nav.Link href="#home">Home</Nav.Link>
			  			</Nav>
		  			</Navbar.Collapse>
			   </Offcanvas.Body>
			 
		</Navbar.Offcanvas>	 	 
	 </Container>
	</Navbar>
    </>
  );
}


export function Profile(props){
	return(
	<>	
		<div style={{display:'flex',alignItems: 'center'}}>
		<Image src={props.imgurl}
			roundedCircle
			height={55}
			style={{padding:'10px'}}
			alt={"프로필이미지 없음"}/>
		<div>{props.profiles.name}님</div>
		</div>
		
	</>
	)
}


