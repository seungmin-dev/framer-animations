import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { SportsRugbySharp } from "@material-ui/icons";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.3, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  const x = useMotionValue(0); // react state가 아니라서 motionValue가 바뀌어도 컴포넌트 재렌더링은 이루어지지 않음
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);
  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>Click me</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
