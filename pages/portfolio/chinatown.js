import { Container, List, ListItem, AspectRatio } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const chinatown = () => {
  return (
    <Container>
      <Title>
        Chinatown AR
      </Title>
      <List>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6}>
          This is a team project in a graduate-level course at NYU. We built this mobile application using RealityKit, Swift, and Spark AR.
        </ListItem>
        <PortfolioImage src="/thumbAR.png" alt="Chinatown"/>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Team members:
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18}>
          Ruiyang Dai (3D Modeler), Jackie Sabillon (Designer), Xin Tian (Designer), Cleo Xiao (Developer), Jeongin Yoon (Developer)
        </ListItem>
        <ListItem fontFamily="Courier" fontSize={22} mt={6}>
          We are inspired by NYC Chinatown culture and history. 
          We want to tell the stories of generational businesses that bring joy to the Asian-American community with the use of Augmented Reality.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          How to use:
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          Users can locate the designated area on the map and start scanning the object or landmark by using our mobile app.
          It will detect the object or landmark and show the AR effect around that object or landmark.
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='AR video'
            src="/ballroom.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          As you can see above, this AR effect (Spark AR) works well with object detection and image detection. 
          However, the challenge we had was with RealityKit and Reality Composer.
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='object detection'
            src="/object_detection.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          Like the video above, RealityKit and Reality Composer can detect an object and show AR effects around that object.
          However, Apple AR developer tools are not as advanced as we expected and have many limitations. 
          It only detects objects when nothing has changed around the object. 
          If we slightly move the object, it does not recognize the object anymore because it also detects the background patterns.
        </ListItem>
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='wow'
            src="/WOW.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          We only had 5 weeks to build this application so it was too late to change the platform like Unity or Lens Studio. 
          So, we just build the RealityKit AR effect without object detection function for the Wing On Wo location.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          The next step of this project will be adding more locations and using different technologies 
          so that the object/landmark detection function works as it is supposed to.
        </ListItem>
      </List>
    </Container>
  )
}

export default chinatown