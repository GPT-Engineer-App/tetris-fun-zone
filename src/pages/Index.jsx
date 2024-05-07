import { Box, Button, Container, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaRedo } from "react-icons/fa";

// Constants for the game
const ROWS = 20;
const COLS = 10;
const TETROMINOS = {
  I: { shape: [[1, 1, 1, 1]], color: "teal" },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: "blue",
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: "orange",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "yellow",
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "lime",
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "purple",
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "red",
  },
};

// Initialize empty grid
const createGrid = () => Array.from({ length: ROWS }, () => Array(COLS).fill(0));

// Random tetromino
const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino = TETROMINOS[tetrominos[Math.floor(Math.random() * tetrominos.length)]];
  return { ...randTetromino, pos: { x: 0, y: 0 } }; // Start position
};

const Index = () => {
  const [grid, setGrid] = useState(createGrid());
  const [activeTetromino, setActiveTetromino] = useState(randomTetromino());

  // Place tetromino on the grid
  const updateGrid = (tetromino, reset = false) => {
    const newGrid = reset ? createGrid() : grid.map((row) => [...row]);
    tetromino.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          newGrid[y + tetromino.pos.y][x + tetromino.pos.x] = tetromino.color;
        }
      });
    });
    setGrid(newGrid);
  };

  // Handle tetromino movement
  const moveTetromino = (dir) => {
    const newPos = { ...activeTetromino.pos };
    if (dir === "left") newPos.x--;
    if (dir === "right") newPos.x++;
    if (dir === "down") newPos.y++;
    setActiveTetromino({ ...activeTetromino, pos: newPos });
    updateGrid({ ...activeTetromino, pos: newPos });
  };

  // Rotate tetromino
  const rotateTetromino = () => {
    // Simple rotation algorithm (transpose + reverse)
    const newShape = activeTetromino.shape.map((_, index) => activeTetromino.shape.map((column) => column[index])).map((row) => row.reverse());
    setActiveTetromino({ ...activeTetromino, shape: newShape });
    updateGrid({ ...activeTetromino, shape: newShape }, true);
  };

  useEffect(() => {
    updateGrid(activeTetromino);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Grid templateColumns={`repeat(${COLS}, 1fr)`} gap={1}>
          {grid.map((row, y) => row.map((cell, x) => <Box key={`${y}-${x}`} w="20px" h="20px" bg={cell || "white"} border="1px" borderColor="gray.200"></Box>))}
        </Grid>
        <HStack>
          <Button onClick={() => moveTetromino("left")} leftIcon={<FaArrowLeft />}>
            Left
          </Button>
          <Button onClick={() => moveTetromino("right")} leftIcon={<FaArrowRight />}>
            Right
          </Button>
          <Button onClick={() => moveTetromino("down")} leftIcon={<FaArrowDown />}>
            Down
          </Button>
          <Button onClick={() => rotateTetromino()} leftIcon={<FaRedo />}>
            Rotate
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
