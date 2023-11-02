import { Stack, Typography } from '@mui/material'
import logo from '../img/ExpendiaLogo.png'
import wave from '../img/wave.png'
import googleStore from '../img/Google.png'

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
          // overflow: 'hidden'
        }}
        alignItems="center"
        justifyContent="center"
        gap={5}
      >
        <Typography variant="h1" fontSize={35} color="white">
          Está esperando o que? Instale agora!
        </Typography>
        <img src={googleStore} alt="" width={200} />
        <Stack direction="row" gap={10} alignItems="center">
          <Stack>
            <img src={logo} title="Expendia" alt="Expendia logo" width={150} />
            <Typography color="white">₢ Expendia - 2023</Typography>
          </Stack>
          <Stack gap={2}>
            <Typography fontSize={20} color="white">
              Legal
            </Typography>
            <Typography color="white">Política de privacidade</Typography>
            <Typography color="white">Termos de uso</Typography>
          </Stack>
          <Stack gap={2}>
            <Typography fontSize={20} color="white">
              Contato
            </Typography>
            <Typography color="white">help@expendia.luigiraynel.com</Typography>
          </Stack>
        </Stack>
      </Stack>
    </footer>
  )
}
