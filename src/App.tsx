import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
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

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 800], [-360, 360]);
  // x의 좌표에 따라 색깔이 변함
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgba(24, 151, 147, 0.55), rgb(23, 101, 161))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221,0,238))",
      "linear-gradient(135deg, rgba(159, 199, 48, 0.55), rgb(224, 224, 35))",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x: x, rotate: scale, scale: scrollScale }}
        drag="x"
        dragSnapToOrigin
      ></Box>
    </Wrapper>
  );
}

export default App;
