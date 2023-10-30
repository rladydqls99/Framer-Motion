import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { borderRadius: "100px", scale: 1 },
  drag: { backgroundColor: "rgb(46,24, 123)", transition: { duration: 10 } },
};

function App() {
  return (
    <Wrapper>
      {/* 자식 요소에 props가 자동으로 상속됨 */}
      <Box
        drag
        variants={boxVariants}
        whileDrag="drag"
        whileHover="hover"
        whileTap="click"
      ></Box>
    </Wrapper>
  );
}

export default App;
