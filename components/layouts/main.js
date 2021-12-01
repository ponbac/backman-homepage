import Head from 'next/head';
import Navbar from '../navbar';
import NoSsr from '../no-ssr';
import { Box, Container } from '@chakra-ui/react';
import VoxelRetro from '../voxel-retro';

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pontus Backman - Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelRetro />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
