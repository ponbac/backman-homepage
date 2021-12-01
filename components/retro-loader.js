import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const RetroSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

// eslint-disable-next-line react/display-name
export const RetroContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-retro"
    m="auto"
    mt={['-26px', '-80px', '-160px']}
    mb={['-32px', '-115px', '-160px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <RetroContainer>
      <RetroSpinner />
    </RetroContainer>
  );
};

export default Loader;
