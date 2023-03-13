import { Container, List, ListItem } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const niagara = () => {
  return (
    <Container>
      <Title>
        Virtual Reality - Niagara Gallery Exhibition
      </Title>
      <List>
        <PortfolioImage src="/sakura_banner.png" alt="sakura"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6}>
          This VR exhibition was created using Unreal Engine 5.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          VR Gallery Exhibition
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          This is a team project from the virtual reality coursework at NYU.
          I was in charge of creating the scene in Unreal Engine as a Technical Director.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Team members
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18}>
          Ozi Chukwukeme (Project Manager) <br /> Liam Tsang (Creative Director) <br /> Jeongin Yoon (Technical Director)
        </ListItem>
        <ListItem fontFamily="Courier" fontSize={22} mt={6}>
          The Niagara Gallery brings the traditional art gallery experience to virtual reality, granting audiences of various abilities, locations, and interests access to a sensational new world.
          The Niagara Experience is the most interactive and immersive artistic escapade available, and promises to activate senses you never knew you had.
          All from the comfort of your own home.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6} mb={6}>
          VR Screen Recording
        </ListItem>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Gfhe8MeFIzw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </List>
    </Container>
  )
}

export default niagara