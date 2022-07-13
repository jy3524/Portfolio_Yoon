import { Heading, Container, SimpleGrid} from '@chakra-ui/react';
import { PortGridItem } from '../components/grid';
import Section from '../components/section';

import thumbAR from '../public/thumbAR.png';
import thumbSustain from '../public/sustainable.png';
import thumbScope from '../public/scope.png';

const Portfolio = () => {
  return (
    <Container>
      <Heading fontFamily="Gill Sans" fontSize={30} p={5} mb={4} align="center">
        Portfolio
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6} fontFamily="Gill Sans">
        <Section>
          <PortGridItem id="chinatown" title="Chinatown AR" thumbnail={thumbAR}>
            Augmented Reality Mobile Application Development
          </PortGridItem>
        </Section>
        <Section>
          <PortGridItem id="sustainable" title="ReStore" thumbnail={thumbSustain}>
            Sustainable Fashion Brand Mobile Application Development
          </PortGridItem>
        </Section>
        <Section>
          <PortGridItem id="scope" title="3D Model - Scope" thumbnail={thumbScope}>
            Web, WebVR, and Physical Computing
          </PortGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;