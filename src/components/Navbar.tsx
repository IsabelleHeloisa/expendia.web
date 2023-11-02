import { Stack, Typography } from '@mui/material'
import { Link as LinkScroll } from 'react-scroll'

export default function Navbar() {
  return (
    <>
      <Stack direction="row" gap={3}>
        <LinkScroll
          to="recursos"
          smooth={true}
          duration={500}
          style={{ textDecoration: 'none' }}
        >
          <Typography
            color="black"
            fontSize={24}
            sx={{
              ':hover': { cursor: 'pointer' }
            }}
          >
            Recursos
          </Typography>
        </LinkScroll>
        <LinkScroll to="screenshots" style={{ textDecoration: 'none' }}>
          <Typography
            color="black"
            fontSize={24}
            sx={{
              ':hover': { cursor: 'pointer' }
            }}
          >
            Screenshots
          </Typography>
        </LinkScroll>
        <LinkScroll to="faq" style={{ textDecoration: 'none' }}>
          <Typography
            color="black"
            fontSize={24}
            sx={{
              ':hover': { cursor: 'pointer' }
            }}
          >
            Faq
          </Typography>
        </LinkScroll>
      </Stack>
    </>
  )
}
