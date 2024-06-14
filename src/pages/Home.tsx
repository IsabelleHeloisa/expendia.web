import { Box, Container, Stack, Typography } from '@mui/material'
import Banner from '../img/Banner.png'
import coin from '../img/coin_expendia.png'
import coin2 from '../img/coin_expendia2.png'
import screenshots from '../img/screenshots.png'
import faq from '../img/faq.png'
import GooglePlayButton from '../components/GooglePlayButton'
import FeatureBox from '../components/FeatureBox'

export default function Home() {
  return (
    <Box component="main" maxWidth="100vw" width="100%">
      <Stack
        direction={{
          xs: 'column',
          md: 'row'
        }}
        py={10}
        gap={{ xs: 4, md: 0 }}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Container sx={{ width: { xs: '100%', md: '50%' } }}>
          <Stack gap={3}>
            <Typography fontSize={{ xs: 40, md: 50 }}>
              Descomplique o{' '}
              <Typography variant="inherit" color="#A34FD8">
                controle de despesas
              </Typography>{' '}
              em grupos, famílias e casais.
            </Typography>
            <GooglePlayButton />
          </Stack>
        </Container>
        <Stack>
          <Stack alignItems="center">
            <Box width={{ xs: '100%', md: 800 }} padding={2}>
              <img
                src={Banner}
                alt="Mobile banner"
                title="Mobile banner"
                width="100%"
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <section id="recursos">
        <Container>
          <Stack gap={4}>
            <Stack alignItems="center" justifyContent="center">
              <Typography variant="h1" fontSize={35}>
                Recursos
              </Typography>
            </Stack>
            <FeatureBox>
              <Box width={{ xs: '100%', md: 400 }}>
                <img src={coin} alt="" width="100%" />
              </Box>
              <Stack gap={2}>
                <Typography variant="h3" fontSize={30} fontWeight="bold">
                  Vivamus sit amet interdum
                </Typography>
                <Typography fontSize={20}>
                  Nam sollicitudin dignissim nunc, cursus <br /> ullamcorper
                  eros vulptate sed. Vestibulum sit <br /> amet tortor sit amet
                  libero lobortis.
                </Typography>
              </Stack>
            </FeatureBox>
            <FeatureBox>
              <Stack gap={2}>
                <Typography variant="h3" fontSize={30} fontWeight="bold">
                  Vivamus sit amet interdum
                </Typography>
                <Typography fontSize={20}>
                  Maecenas nisl libero, tincidunt id odio id, feugiat <br />{' '}
                  vulputate quam vestibulum feugiat.
                </Typography>
              </Stack>
              <Box width={{ xs: '100%', md: 400 }}>
                <img src={coin2} alt="" width="100%" />
              </Box>
            </FeatureBox>
          </Stack>
        </Container>
      </section>
      <section id="screenshots">
        <Stack
          sx={{
            backgroundImage: `url(${screenshots})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '100%',
            height: { xs: '50vh', md: '200vh' },
            overflow: 'hidden'
          }}
          alignItems="center"
        >
          <Typography
            variant="h1"
            fontSize={35}
            color="white"
            mt={{ xs: 10, md: 25, lg: 50 }}
          >
            Screenshots
          </Typography>
        </Stack>
      </section>
      <section id="faq">
        <Stack>
          <Stack alignItems="center" justifyContent="center">
            <Typography variant="h1" fontSize={35}>
              FAQ
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-around"
            gap={2}
            paddingTop={10}
          >
            <img src={faq} alt="" width={500} />
            <Stack>
              <Typography variant="h3" fontSize={30} fontWeight="bold">
                EM BREVE...
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </section>
    </Box>
  )
}
