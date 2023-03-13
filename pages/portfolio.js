import { Heading, Container, SimpleGrid} from '@chakra-ui/react';
import { PortGridItem } from '../components/grid';
import Section from '../components/section';

import thumbAR from '../public/thumbAR.png';
import thumbSustain from '../public/sustainable.png';
import thumbScope from '../public/scope.png';
import thumbCatwalk from '../public/catwalk.png';
import thumbVRniagara from '../public/sakura_banner.png';
import thumbStress from '../public/stressrelief.png';
import thumbAltruismAR from '../public/altruismAR.png';

const Portfolio = () => {
  return (
    <Container>
      <Heading fontFamily="Gill Sans" fontSize={30} p={5} mb={4} align="center">
        Portfolio
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6} fontFamily="Gill Sans">
        <Section>
          <PortGridItem id="stressrelief" title="Island" thumbnail={thumbStress}>
            Stress Relief Experience with Multisensory VR
          </PortGridItem>
        </Section>
        <Section>
          <PortGridItem id="niagaraVR" title="Niagara Gallery" thumbnail={thumbVRniagara}>
            Virtual Reality - Gallery Exhibition
          </PortGridItem>
        </Section>
        <Section>
          <PortGridItem id="chinatown" title="Chinatown AR" thumbnail={thumbAR}>
            Augmented Reality Landmark Application - Mobile
          </PortGridItem>
        </Section>
        <Section>
          <PortGridItem id="sustainable" title="ReStore" thumbnail={thumbSustain}>
            Sustainable Fashion Brand Application - Mobile
          </PortGridItem>
        </Section>
        <Section>
          <PortGridItem id="altruism" title="Altruism" thumbnail={thumbAltruismAR}>
            Augmented Reality Shopping Experience
          </PortGridItem>
        </Section>
        <Section>
          <PortGridItem id="scope" title="3D Model - Scope" thumbnail={thumbScope}>
            Web, WebVR, AR, and Physical Computing
          </PortGridItem>
        </Section>
        <Section>
          <PortGridItem id="catwalk" title="Virtual Fashion Show" thumbnail={thumbCatwalk}>
            Virtual Production Development - Fashion Show Catwalk Scene
          </PortGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;