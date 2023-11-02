import { AppBar, Toolbar, Container, Stack, Typography } from '@mui/material'
import logo from '../img/ExpendiaLogo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 'none', marginBottom: '10px', background: 'white' }}
    >
      <Container>
        <Toolbar disableGutters>
          <Stack direction="row" alignItems="center" py={2} gap={10}>
            <Link to="/">
              <img
                src={logo}
                title="Expendia"
                alt="Expendia logo"
                width={200}
              />
            </Link>
            <Stack direction="row" gap={3}>
              <Typography color="black" fontSize={24}>
                Recursos
              </Typography>
              <Typography color="black" fontSize={24}>
                Screenshots
              </Typography>
              <Typography color="black" fontSize={24}>
                Faq
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
