import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 250px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: white;
`;

const Btn = styled(motion.button)`
  border: none;
  background-color: white;
  padding: 10px;
  border-radius: 7px;
  font-weight: 600;
  font-size: 18px;
`;

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayVar = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: { backgroundColor: "rgba(0,0,0,0.5)" },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};

export default function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <Wrapper>
      <Grid>
        <Box
          whileHover={{ scale: 1.05 }}
          onClick={() => setId("1")}
          key={"1"}
          layoutId={"1"}
          style={{ transformOrigin: "100% 100%" }}
        />
        <Box
          whileHover={{ scale: 1.05 }}
          onClick={() => setId("2")}
          key={"2"}
          layoutId={"2"}
          style={{ transformOrigin: "0% 100%" }}
        >
          {!clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          whileHover={{ scale: 1.05 }}
          onClick={() => setId("3")}
          key={"3"}
          layoutId={"3"}
          style={{ transformOrigin: "100% 0%" }}
        >
          {clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          whileHover={{ scale: 1.05 }}
          onClick={() => setId("4")}
          key={"4"}
          layoutId={"4"}
          style={{ transformOrigin: "0% 0%" }}
        />
      </Grid>
      <Btn onClick={toggleClick}>Switch</Btn>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlayVar}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Box
              key={id}
              layoutId={id}
              style={{
                width: "250px",
                height: "200px",
                backgroundColor: "white",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
