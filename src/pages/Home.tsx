import { Stack, Typography } from '@mui/material'
import Header from '../components/Header'
import mobileBanner from '../img/mobile_banner.png'
import googleStore from '../img/Google.png'
import feature from '../img/Feature 1.png'
import feature2 from '../img/Feature 2.png'
import screenshots from '../img/screenshots.png'
import logo from '../img/ExpendiaLogo.png'
import wave from '../img/wave.png'

export default function Home() {
  return (
    <>
      <Header />
      <Stack
        direction="row"
        py={10}
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack gap={2}>
          <Typography fontSize={50}>
            Descomplique o{' '}
            <Typography variant="inherit" color="#673AB7">
              controle de despesas
            </Typography>{' '}
            em grupos, famílias e <br /> casais
          </Typography>
          <img src={googleStore} alt="" width={150} />
        </Stack>
        <Stack>
          <img
            src={mobileBanner}
            alt="Mobile banner"
            title="Mobile banner"
            width={500}
          />
        </Stack>
      </Stack>
      <Stack alignItems="center" justifyContent="center">
        <Typography variant="h1" fontSize={35}>
          Recursos
        </Typography>
      </Stack>
      <Stack
        direction="row"
        py={10}
        justifyContent="space-around"
        alignItems="center"
      >
        <img src={feature} alt="" width={400} />
        <Stack gap={2}>
          <Typography variant="h3" fontSize={30} fontWeight="bold">
            Vivamus sit amet interdum
          </Typography>
          <Typography fontSize={20}>
            Nam sollicitudin dignissim nunc, cursus <br /> ullamcorper eros
            vulptate sed. Vestibulum sit <br /> amet tortor sit amet libero
            lobortis.
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <Stack gap={2}>
          <Typography variant="h3" fontSize={30} fontWeight="bold">
            Vivamus sit amet interdum
          </Typography>
          <Typography fontSize={20}>
            Maecenas nisl libero, tincidunt id odio id, feugiat <br /> vulputate
            quam vestibulum feugiat.
          </Typography>
        </Stack>
        <img src={feature2} alt="" width={400} />
      </Stack>
      <Stack paddingY={15}>
        <Stack
          sx={{
            backgroundImage: `url(${screenshots})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '100%',
            height: '200vh',
            overflow: 'hidden'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h1" fontSize={35} color="white" mb={50}>
            Screenshots
          </Typography>
        </Stack>
      </Stack>
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
    </>
  )
}