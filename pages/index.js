import { Container, Box, Heading } from '@chakra-ui/layout';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Sweden!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pontus Backman
          </Heading>
          <p>Digital Craftsman (Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
