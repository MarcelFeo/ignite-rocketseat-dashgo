import { Stack, Button, Box, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;;
}

const siblingCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerProps);

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
    :[]

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingCount, lastPage))
    : []

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingCount) && (
          <>
            <PaginationItem number={1} />
            { currentPage > (2 + siblingCount) && <Text>...</Text>}
          </>
        )}

        {previousPage.length > 0 && previousPage.map(page => {
          return <PaginationItem key={page} number={page} />
        })}

        <PaginationItem  number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} number={page} />
        })}
        
        {(currentPage + siblingCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingCount) < lastPage && <Text>...</Text> }
            <PaginationItem number={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  )
}