import React from 'react'
import styled from "styled-components";
import { useSpring, animated} from "react-spring";
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import Brand from "./Brand";


const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  return (
    <header className="row">
      <div className="col">
        <NavBar style={barAnimation}>
          <FlexContainer>
            <Brand />
            <div>
              <Button circular color='blue' style={{ width: 110, top: 15, backgroundColor: "#004694" }} animated='vertical'>
                <Button.Content visible>Audiências</Button.Content>
                <Button.Content hidden>
                  <Icon name='discussions' />
                </Button.Content>
              </Button>

              <Button circular color='blue' style={{ width: 110, top: 15, backgroundColor: "#004694" }} animated='vertical'>
                <Button.Content visible>Calendário</Button.Content>
                <Button.Content hidden>
                  <Icon name='calendar check' />
                </Button.Content>
              </Button>

              <Button circular color='blue' style={{ width: 100, top: 15, backgroundColor: "#004694" }} animated='vertical'>
                <Button.Content visible>Ajuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='question circle' />
                </Button.Content>
              </Button>

              <Button circular color='blue' style={{ width: 100, top: 15, backgroundColor: "#004694" }} animated='vertical'>
                <Button.Content visible>Perfil</Button.Content>
                <Button.Content hidden>
                  <Icon name='user circle' />
                </Button.Content>
              </Button>

              <Button circular color='red' style={{ width: 100, top: 15, }} animated>
                <Button.Content visible>Sair</Button.Content>
                <Button.Content hidden>
                  <Icon name='log out' />
                </Button.Content>
              </Button>
            </div>

          </FlexContainer>
        </NavBar>

      </div>
    </header>
  )
}

export default withRouter(Navbar)

const NavBar = styled(animated.nav)`
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  background: #004694;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;
