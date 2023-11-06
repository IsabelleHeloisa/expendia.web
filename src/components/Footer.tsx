import { Container, Stack, Typography } from '@mui/material'
import logo from '../img/ExpendiaLogo.png'
import wave from '../img/wave.png'
import { Link } from 'react-router-dom'
import GooglePlayButton from './GooglePlayButton'

export default function Footer() {
  const email = process.env.REACT_APP_CONTACT_EMAIL || 'help@expendia.app'
  return (
    <footer>
      <Stack
        sx={{
          backgroundImage: `url(${wave})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: {
            xs: '100%',
            md: '150vh',
            lg: '100vh'
          }
        }}
        alignItems="center"
        pt={{ xs: 25, md: 30, lg: 30 }}
        pb={2}
        gap={4}
        px={2}
      >
        <Typography variant="h1" fontSize={35} color="white">
          Está esperando o quê? Instale agora!
        </Typography>
        <GooglePlayButton />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          gap={10}
          alignItems={{ xs: 'start', md: 'center' }}
        >
          <Stack>
            <Link to="/">
              <img
                src={logo}
                title="Expendia"
                alt="Expendia logo"
                width={150}
              />
            </Link>
            <Typography color="white">© Expendia - 2023</Typography>
          </Stack>
          <Stack gap={2}>
            <Typography fontSize={20} color="white">
              Legal
            </Typography>
            <Link
              style={{ textDecoration: 'none' }}
              to="/privacy-policy"
              title="Política de privacidade"
            >
              <Typography color="white">Política de privacidade</Typography>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to="/terms-of-use"
              title="Termos de uso"
            >
              <Typography color="white">Termos de uso</Typography>
            </Link>
          </Stack>
          <Stack gap={2}>
            <Typography fontSize={20} color="white">
              Contato
            </Typography>
            <Link
              to={`mailto:${email}`}
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Typography color="white">{email}</Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </footer>
  )
}
