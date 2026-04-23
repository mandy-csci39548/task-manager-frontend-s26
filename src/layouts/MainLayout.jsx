import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuCheck, LuListTodo, LuMoveRight } from 'react-icons/lu'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const MainLayout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  return (
    <Box bg='gray.50' display='flex' minH='100vh' flexDirection='column'>
      {/* Navbar */}
      <Box bg='white' shadow='sm'>
        <Container py={3}>
          <Flex align='center'>
            <HStack gap={2} as={Link} to='/'>
              <LuListTodo />
              <Heading>Task Manager</Heading>
            </HStack>
            <Spacer />
            <HStack gap={4}>
              <Link to='/tasks'>Tasks</Link>
              {token ? (
                <Button
                  onClick={() => {
                    localStorage.removeItem('token')
                    navigate('/')
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button size='sm' colorPalette='purple' as={Link} to='/login'>
                  Login
                </Button>
              )}
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box flex='1' as='main' p={4}>
        {/* Placeholder for the content we want to render on every page */}
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
