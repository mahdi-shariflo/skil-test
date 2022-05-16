import styled from "styled-components";
import CloseIcon from "./../assets/icons/close.svg";
export const Sidebar = ({ toggle, setToggle }) => {
  return (
    <Container>
      <SidebarItem toggle={toggle}>
        <ContainerCloseIcon>
          <Image
            onClick={() => setToggle(!toggle)}
            src={CloseIcon}
          />
        </ContainerCloseIcon>
      </SidebarItem>
      <Overlay
        onClick={() => setToggle(!toggle)}
        toggle={toggle}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin: 0 auto;
`;

const SidebarItem = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  transform: ${(props) =>
    props.toggle ? "translateX(0)" : "translateX(100%)"};
  background: #0096f5;
  transition: transform 0.25s ease;
  z-index: 99;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  background: #00000075;
  width: ${(props) => (props.toggle ? "100%" : "0")};
  height: ${(props) => (props.toggle ? "100vh" : "0")};
  z-index: 1;
`;

const ContainerCloseIcon = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px;
`;

const Image = styled.img`
  cursor: pointer;
`;
