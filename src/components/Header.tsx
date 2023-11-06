import { AppBar, Toolbar, Container, Stack, IconButton } from '@mui/material'
import logo from '../img/ExpendiaLogo.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FiMenu } from 'react-icons/fi'
import { HiMenu } from 'react-icons/hi'
import { useState } from 'react'
import MenuMobile from './MenuMobile'

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 'none', marginBottom: '10px', background: 'white' }}
    >
      <Container>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            justifyContent={{ xs: 'space-between', md: 'flex-start' }}
            alignItems="center"
            width="100%"
            py={2}
            gap={10}
          >
            <Link to="/">
              <img
                src={logo}
                title="Expendia"
                alt="Expendia logo"
                width={200}
              />
            </Link>
            <Navbar />

            <Stack>
              <IconButton
                sx={{
                  display: { xs: 'flex', md: 'none' }
                }}
                onClick={handleDrawerOpen}
              >
                <FiMenu size={30} />
              </IconButton>
            </Stack>
            <MenuMobile open={open} onClose={() => setOpen(false)} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
