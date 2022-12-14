import { Container, List, ListItem, Link, AspectRatio } from '@chakra-ui/react';
import { Title, PortfolioImage } from '../../components/port';

const chinatown = () => {
  return (
    <Container>
      <Title>
        Chinatown AR
      </Title>
      <List>
        <PortfolioImage src="/thumbAR.png" alt="Chinatown"/>
        <ListItem fontFamily="Gill Sans" fontSize={18} fontWeight="bold" mt={6}>
          This is a team project in a graduate-level course at NYU (Mobile Augmented Reality Studio, DMGY-6133). We built this mobile application using RealityKit, Swift, and Spark AR.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Team members
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18}>
          Ruiyang Dai (3D Designer) <br /> Jackie Sabillon (Designer) <br /> Xin Tian (Designer) <br /> Cleo Xiao (Developer) <br /> Jeongin Yoon (Developer)
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Presentation Document
        </ListItem>
        <Link fontFamily="Gill Sans" fontSize={20} color="purple.300" href='https://www.youtube.com/watch?v=Uh9wZnQqJOk' isExternal>
          Link to Presentation Video
        </Link>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          High Fidelity Wireframe
        </ListItem>
        <PortfolioImage src="/AR_Wireframe.png" alt="ARWireframe"/>
        <ListItem fontFamily="Courier" fontSize={22} mt={6}>
          We are inspired by NYC Chinatown culture and history. 
          We want to tell the stories of generational businesses that bring joy to the Asian-American community with the use of Augmented Reality.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          About Project
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          When users arrive at the pinned location on the map, users can start scanning the object or landmark by using our mobile app.
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
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          However, RealityKit and Reality Composer are not as advanced as we expected and have many limitations.
          RealityKit and Reality Composer can only detect an object and show AR effects around that object when nothing has changed around the object.
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
        <AspectRatio maxW="580" ratio={1} mt={6}>
          <iframe 
            title='chinatown'
            src="/chinatown.mp4"
            allowFullScreen
            allow="autoplay"
          />
        </AspectRatio>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          We only had 5 weeks to build this application so it was too late to change the platform like Unity with Vuforia or Lens Studio. 
          So, we just build the RealityKit AR effect without object detection function for this location.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          Future Improvement
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          The next step of this project will be adding more locations and using different technologies 
          so that the object/landmark detection function works as it is supposed to.
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={24} fontWeight="bold" mt={6}>
          What I learned from this project
        </ListItem>
        <ListItem fontFamily="Gill Sans" fontSize={18} mt={6}>
          The most important lesson I learned is how to collaborate with designers and developers.
          In real-world business settings, I will face similar situations when different team members need to collaborate to implement business needs.
          This project was a good practice on how to effectively communicate and collaborate between designers and developers within a limited time.
          Also, I learned not to rely too much on the technology side since some of the technologies are not as advanced as we imagine.
          I love technology. However, I believe that people need to rely on humans more than technology so that we can solve problems together as a team.
        </ListItem>
      </List>
    </Container>
  )
}

export default chinatown