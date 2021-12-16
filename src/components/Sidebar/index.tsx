import { Box, useBreakpointValue, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

import { SidebarNav } from './SidebarNav'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDraerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={true} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}