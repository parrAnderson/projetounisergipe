import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from "styled-components";
import logo from "../../assets/img/logo-min.png"
import smartUFS from "../../assets/img/smartufs.png"
import DAU from "../../assets/img/dau.png"
import DCOMP from "../../assets/img/dcomp.png"


const FooterPage = () => {
  return (
    <MDBFooter style={{ backgroundColor: "#004694"}}color="blue" className="font-small pt-4 mt-4">
      
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <Image src={logo} alt="UFS" /><h5 style={{ color: 'white'}} className="title">Projeto Fala UFS</h5>
            <p style={{ color: 'white'}}>
            </p>
            
          </MDBCol>
          <MDBCol md="6">
            <h5 style={{ color: 'white', marginTop: 0}} className="title">Colaboradores</h5>
            <Image src={smartUFS} alt="smartUFS" />
            <Image src={DAU} alt="DAU" />
            <Image src={DCOMP} alt="DCOMP" />
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer style={{ color: 'white'}} fluid>
          &copy; {new Date().getFullYear()} <a style={{ color: 'white'}} href="/"> Universidade Federal de Sergipe </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

const Image = styled.img`
  height: 50px;
  width: 130px;
  margin-top: 0px;
  margin-left: 50px;
`;

export default FooterPage;