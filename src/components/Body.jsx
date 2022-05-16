import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { countDownContext } from "../contexts/CountDown";
export const Body = () => {
  const { time, setTime } = useContext(countDownContext);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (time.seconds > 0) {
        setTime({ ...time, seconds: time.seconds - 1 });
      }
      if (time.seconds === 0) {
        if (time.minutes === 0) {
          clearInterval(myInterval);
        } else {
          setTime({ ...time, minutes: time.minutes - 1 });
          setTime({ ...time, seconds: 59 });
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <ContainerCountDown>
      <CountDown>
        {time.minutes < 10
          ? `0${time.minutes}`
          : time.minutes}
        :
        {time.seconds < 10
          ? `0${time.seconds}`
          : time.seconds}
      </CountDown>
    </ContainerCountDown>
  );
};

const ContainerCountDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CountDown = styled.h1`
  background: #0095f5;
  width: 500px;
  text-align: center;
  color: #fff;
  padding: 25px;
  border-radius: 50px;
`;
