import { useState, createContext } from "react";

export const countDownContext = createContext(null);

export const CountDownProvider = ({ children }) => {
  const [time, setTime] = useState({
    seconds: 10,
    minutes: 0,
  });
  return (
    <countDownContext.Provider value={{ time, setTime }}>
      {children}
    </countDownContext.Provider>
  );
};
