import { Container, List, Link, ListItem, AspectRatio } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const stress = () => {
  return (
    <Container>
      <Title>
        Island - Stress Relief VR Experience
      </Title>
      <List>
        <PortfolioImage src="/stressrelief.png" alt="stress"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6}>
          This VR experience was created using Unreal Engine 5.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Stress Relief VR Experience
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          This is my graduation showcase project at NYU.
        </ListItem>
        <Link fontFamily="Gill Sans" fontSize={20} color="purple.300" href='http://idm.show/F2022/' isExternal>
          Link to NYU IDM Showcase
        </Link>
        <ListItem fontFamily="Courier" fontSize={22} mt={6}>
          This project is about a stress relief VR experience where users can virtually travel to a tropical island. 
          This experience is designed to help people reduce stress. 
          In VR, users can relax by the beach or do some activities. 
          This experience is for everyone who stresses out easily.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Research
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          A research article from the National Library of Medicine concluded that “VR relaxation was effective in reducing subjectively reported stress in individuals with high stress”. 
          The article also mentioned that “stress level was reduced in a `cost-effective` and `accessible` manner by VR”
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Multisensory VR Experience
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          I used olfactory sense and wind to create more immersive experience.
          There is an area where users can smell the object. 
          I prepared real-world objects that have the same scent as virtual objects.
          So, when users interact with those objects in the virtual world, they can smell them in the real world.
          Also, there is a fan that generates wind. Users can feel the breeze from the virtual ocean in the real world.
        </ListItem>
        <PortfolioImage src="/sensoryinvr.png" alt="sensoryvr"/>
        <PortfolioImage src="/sensoryitems.png" alt="sensoryitems"/>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Showcase Video
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='vrshowcase'
            src="/multisensory.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6} mb={6}>
          VR Screen Recording
        </ListItem>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KGOgk1Xs69w" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </List>
    </Container>
  )
}

export default stress