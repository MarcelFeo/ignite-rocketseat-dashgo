import { Box, Button, Flex, Heading, Icon, Table, Thead, Tbody, Tr, Th, Td, Text, Checkbox, Spinner, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Pagination } from "../../components/Pagination"

import { useQuery } from 'react-query'
import { api } from '../../services/api'

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const { data } = await api.get('/users')
    //const data = await response.json()

    return data;
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  /*
  useEffect(() => {
    fetch('http://localhost:3000/api/user')
      .then(response => response.json())
      .then(data => console.log(data))
  })
  */

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button 
              as="a" size="sm" 
              fontSize="sm" 
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          { isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]}color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuários</Th>
                      { isWideVersion && <Th>Data de cadastro</Th> }
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.users.map(user => {
                      return (
                        <Tr key={user.id}>
                          <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">{user.email}</Text>
                            </Box>
                          </Td>
                          { isWideVersion && <Td>{user.createdAt}</Td>}
                        </Tr>
                      )
                    })}
                  </Tbody>
              </Table>

              <Pagination 
                totalCountOfRegisters={200}
                currentPage={5}
                onPageChange={() => {}}
              />
            <>
          )}

        </Box>
      </Flex>
    </Box>
  )
}