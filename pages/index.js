import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Sweden!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Pontus Backman
            </Heading>
            <p>King of the Interwebs (Gigahacker/Developer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/pontus.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet semper sodales. Sed non risus turpis. Integer venenatis
            sollicitudin nisl, sit amet accumsan quam eleifend vel. Aenean at
            luctus mi. Nunc sem massa, dictum eget sem sit amet, fringilla
            laoreet nisl. Vestibulum lectus ex,{' '}
            <NextLink href="/works">
              <Link>efficitur</Link>
            </NextLink>{' '}
            id condimentum et, semper ac risus. Aliquam a elementum tellus. Cras
            id fermentum nunc, vel porttitor sapien. Nullam in ornare dolor,
            vitae aliquam augue. Aliquam consectetur pellentesque efficitur. Sed
            facilisis ac diam non consequat. Vestibulum at velit lorem.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Sundsvall, Sweden.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Began studies in Software Engineering at Chalmers University of
            Technology
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Finished my Bachelor&apos;s in Software Engineering
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Finished my Master&apos;s in Software Engineering, thesis on TODO
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interested in
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet semper sodales. Sed non risus turpis. Integer venenatis
            sollicitudin nisl, sit amet accumsan quam eleifend vel. Aenean at
            luctus mi. Nunc sem massa, dictum eget sem sit amet, fringilla
            laoreet nisl. Vestibulum lectus ex, efficitur id condimentum et,
            semper ac risus. Aliquam a elementum tellus.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
