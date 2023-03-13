import { Container, List, ListItem } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const altruism = () => {
  return (
    <Container>
      <Title>
        Augmented Reality Shopping Experience
      </Title>
      <List>
        <PortfolioImage src="/altruismAR.png" alt="altruismAR"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6}>
          This augmented reality application is created using Unity and Meta Quest Pro.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6} mb={6}>
          Augmented Reality with HMD Hand Tracking
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6} mb={6}>
          The goal of this AR application is to provide users more immersive shopping experience using both hands.
          Compared to a handheld device, an HMD device is more convenient in terms of using both hands freely since mobile AR applications require users to use at least one hand to hold a device. 
          Holding a device distracts users from fully immersing themselves in the shopping experience. Also, the view through the mobile display is not as immersive as HMDs.
          In this application, users can grab a product with their hands and interact with UI elements with their hands as well.
          I intentionally designed minimal UI elements so that users can focus on shopping itself, and not be distracted by other options such as the menu or buttons.
        </ListItem>
      </List>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/Djz2z1ep8bg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Container>
  )
}

export default altruism