import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from "styled-components";
import logo from "../../assets/img/logo-min.png"
import smartUFS from "../../assets/img/smartufs.png"
import DAU from "../../assets/img/dau.png"
import DCOMP from "../../assets/img/dcomp.png"


const FooterPage = () => {
  return (
    <div>
   
   <div className="row fixed-bottom bg-primary">
     <div className="col">
     <div className="row justify-content-center ">
      <div className="col-10">
        <div className="row text-white justify-content-center">
        <div className="col-4 col-sm-4 col-md-2 col-lg-1 align-self-center">
          <Image className="img-fluid" src={logo} alt="UFS" />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center align-self-center">
          <h5>Projeto Fala UFS</h5>          
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <div className="row">
            <div className="col text-center">
              <h6>Colaboradores</h6> 
            </div>
          </div>
          <div className="row">       
            <div className="col ">
              <Image className="img-fluid" src={smartUFS} alt="smartUFS" />        
            </div>
            <div className="col">
              <Image className="img-fluid" src={DAU} alt="DAU"/>          
            </div>
            <div className="col">
              <Image className="img-fluid" src={DCOMP} alt="DCOMP" />
            </div>
          </div>
        </div>
        <div className="col text-center align-self-center">
          <span> &copy; {new Date().getFullYear()} Universidade Federal de Sergipe</span>        
        </div>
        </div>  
      </div>
    </div>
     </div>
    
   </div>
   
    
    </div>
  );
}

const Image = styled.img`
  // height: 50px;
  // width: 130px;
  // margin-top: 0px;
  // margin-left: 50px;
`;

export default FooterPage;