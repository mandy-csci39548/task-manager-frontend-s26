import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuCheck, LuMoveRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Container centerContent py={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
        <Stack align='start'>
          <Heading size='2xl'>Welcome to Task Manager</Heading>
          <Text color='gray.600' fontSize='lg'>
            Stay organized, track your progress, and manage your tasks with
            ease.
          </Text>

          <ButtonGroup colorPalette='purple' my={8}>
            <Button variant='surface' as={Link} to='/tasks'>
              Go to my tasks
            </Button>
            <Button as={Link} to='/login'>
              Login <LuMoveRight />
            </Button>
          </ButtonGroup>

          <HStack>
            <Icon as={LuCheck} color='green.600' />
            <Text>Create and manage tasks</Text>
          </HStack>
          <HStack>
            <Icon as={LuCheck} color='green.600' />
            <Text>Track completion status</Text>
          </HStack>
          <HStack>
            <Icon as={LuCheck} color='green.600' />
            <Text>Stay focused</Text>
          </HStack>
        </Stack>

        <Box>
          <Image
            src='https://images.unsplash.com/photo-1668714742426-c47d8a0e6ae4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Journal and coffee'
            shadow='lg'
            borderRadius='2xl'
            objectFit='cover'
            h={{ base: '250px', md: '400px' }}
          />
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default HomePage
