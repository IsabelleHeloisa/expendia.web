import { AppBar, Toolbar, Container, Stack } from '@mui/material'
import logo from '../img/ExpendiaLogo.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 'none', marginBottom: '10px', background: 'white' }}
    >
      <Container>
        <Toolbar disableGutters>
          <Stack direction="row" justifyContent="center" py={2} gap={10}>
            <Link to="/">
              <img
                src={logo}
                title="Expendia"
                alt="Expendia logo"
                width={200}
              />
            </Link>
            <Navbar />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
