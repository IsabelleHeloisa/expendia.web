import { AppBar, Toolbar, Container, Stack, Typography } from '@mui/material'
import logo from '../img/ExpendiaLogo.png'

export default function Header() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ boxShadow: 'none', marginBottom: '10px' }}
    >
      <Container>
        <Toolbar disableGutters>
          <Stack direction="row" alignItems="center" py={2} gap={10}>
            <img src={logo} title="Expendia" alt="Expendia logo" width={100} />
            <Stack direction="row" gap={3}>
              <Typography>Recursos</Typography>
              <Typography>Screenshots</Typography>
              <Typography>Faq</Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
