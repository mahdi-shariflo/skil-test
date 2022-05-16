import { useState, useContext } from "react";
import styled from "styled-components";
import { countDownContext } from "../contexts/CountDown";
import MenuIcon from "./../assets/icons/menu.svg";
import { Sidebar } from "./Sidebar";
export const Header = () => {
  const { time } = useContext(countDownContext);
  const [toggle, setToggle] = useState(false);
  console.log(time)

  return (
    <>
      <Container>
        <p>Header</p>
        {time.minutes === 0 && time.seconds === 0 ? (
          <h1>زمان تمام شد !!!!!</h1>
        ) : null}
        <Icon
          onClick={() => setToggle(!toggle)}
          src={MenuIcon}
        />
      </Container>
      <Sidebar setToggle={setToggle} toggle={toggle} />
    </>
  );
};

const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const Icon = styled.img`
  object-fit: contain;
  cursor: pointer;
`;
