import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from '@firebase/firestore';
import firebaseConfig from '../components/FirebaseConfig';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addDoc(collection(db, "contactInfo"), {
      name,
      phone,
      email,
      msg,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setName("")
    setPhone("")
    setEmail("")
    setMsg("")
  }

  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex direction="column" p={5} rounded={6}>
        <Heading fontFamily="Gill Sans" fontSize={30} mb={6} align="center">Contact Me</Heading>
        <Input placeholder='Name' variant="filled" mb={3} size="lg" type="name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputGroup>
          <Input placeholder='###-###-####' variant="filled" mb={3} size="lg" type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <InputLeftElement>
            <PhoneIcon />
          </InputLeftElement>
        </InputGroup>
        <InputGroup>
          <Input placeholder='email@email.com' variant="filled" mb={3} size="lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputLeftElement>
            <EmailIcon />
          </InputLeftElement>
        </InputGroup>
        <Input placeholder='Message' variant="filled" mb={3} boxSize="xs" type="message" value={msg} onChange={(e) => setMsg(e.target.value)}/>
        <Button colorScheme="orange" type="submit" onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Flex>
  )
}

export default Contact;