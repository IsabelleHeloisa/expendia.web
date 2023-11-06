import { Box, Container, Stack, Typography } from '@mui/material'
import mobileBanner from '../img/mobile_banner.png'
import feature from '../img/Feature 1.png'
import feature2 from '../img/Feature 2.png'
import screenshots from '../img/screenshots.png'
import bitmap from '../img/Bitmap.png'
import rectangle from '../img/Rectangle.png'
import GooglePlayButton from '../components/GooglePlayButton'
import FeatureBox from '../components/FeatureBox'

export default function Home() {
  return (
    <Box component="main">
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
              <Typography variant="inherit" color="#673AB7">
                controle de despesas
              </Typography>{' '}
              em grupos, famílias e <br /> casais
            </Typography>
            <GooglePlayButton />
          </Stack>
        </Container>
        <Stack
          width={{ xs: '100%', md: '50%' }}
          justifyContent="center"
          sx={{
            backgroundImage: `url(${rectangle})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '500px'
          }}
        >
          <Stack alignItems="center">
            <img
              src={mobileBanner}
              alt="Mobile banner"
              title="Mobile banner"
              width={500}
            />
          </Stack>
        </Stack>
      </Stack>
      <section id="recursos">
        <Stack gap={4}>
          <Stack alignItems="center" justifyContent="center">
            <Typography variant="h1" fontSize={35}>
              Recursos
            </Typography>
          </Stack>
          <FeatureBox>
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
            <img src={feature2} alt="" width={400} />
          </FeatureBox>
        </Stack>
      </section>
      <section id="screenshots">
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
          >
            <img src={bitmap} alt="" width={400} />
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
