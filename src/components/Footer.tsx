import { Stack, Typography } from '@mui/material'
import logo from '../img/ExpendiaLogo.png'
import wave from '../img/wave.png'
import googleStore from '../img/Google.png'
import { Link } from 'react-router-dom'
import GooglePlayButton from './GooglePlayButton'

export default function Footer() {
  return (
    <footer>
      <Stack
        sx={{
          backgroundImage: `url(${wave})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100vh'
        }}
        alignItems="center"
        justifyContent="center"
        gap={5}
      >
        <Typography variant="h1" fontSize={35} color="white">
          Está esperando o quê? Instale agora!
        </Typography>
        <GooglePlayButton />
        <Stack direction="row" gap={10} alignItems="center">
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
              <Typography color="white"> Política de privacidade</Typography>
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
              to="mailto:help@expendia.luigiraynel.com.br"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Typography color="white">
                help@expendia.luigiraynel.com.br
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </footer>
  )
}
