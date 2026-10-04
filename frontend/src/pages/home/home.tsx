import {
  HStack,
  VStack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import { useAuth } from '@/features/auth/hooks/use-auth'
import { Link } from 'react-router-dom'
import { Path } from '@/router/paths'

export default function HomePage() {
  const { user, isAuthenticated } = useAuth()

  return (
    <VStack spacing={10} align="stretch" className="pt-16 pb-12">
      <VStack spacing={4} align="center">
        <Heading as="h1" size="2xl" textAlign="center" className="sm:text-5xl">
          {isAuthenticated ? "You're signed in" : 'Clinic appointment booking'}
        </Heading>
        <Text fontSize="lg" color="gray.500" textAlign="center" className="max-w-md">
          {isAuthenticated
            ? `Signed in as ${user?.email}.`
            : 'Create an account to get started with your clinic appointments.'}
        </Text>
        {!isAuthenticated && (
          <HStack spacing={4} className="pt-2">
            <Button size="lg" as={Link} to={Path.Register}>
              Create account
            </Button>
            <Button variant="outline" size="lg" as={Link} to={Path.Login}>
              Sign in
            </Button>
          </HStack>
        )}
      </VStack>
    </VStack>
  )
}
