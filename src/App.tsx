import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  hover: { scale: 1, rotateZ: 90 },
  click: { borderRadius: "100px", scale: 1 },
  drag: { backgroundColor: "rgb(46,24, 123)", transition: { duration: 10 } },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      {/* biggerBoxRef를 참조해서 Box의 움직임 제한 */}
      <BiggerBox ref={biggerBoxRef}>
        {/* 자식 요소에 props가 자동으로 상속됨 */}
        <Box
          drag
          // 요소를 원위치로 돌리기
          dragSnapToOrigin
          // 요소를 벗어나서 당기는 탄력
          dragElastic={0.5}
          // 드래그 제약(움직이는 거리 제한 및 원위치 시킴)
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileDrag="drag"
          whileHover="hover"
          whileTap="click"
        ></Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
