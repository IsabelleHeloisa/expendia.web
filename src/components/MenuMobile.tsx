import { Stack, Typography, Drawer } from '@mui/material'
import { Link as LinkScroll } from 'react-scroll'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MenuMobile({ open, onClose }: Props) {
  return (
    <>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          overflow: 'hidden',
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box'
          },
          display: {
            xs: 'flex',
            md: 'none'
          }
        }}
        anchor="left"
        open={open}
        onClose={onClose}
      >
        <Stack padding={2} gap={4}>
          <LinkScroll
            onClick={onClose}
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
          <LinkScroll
            onClick={onClose}
            to="screenshots"
            style={{ textDecoration: 'none' }}
          >
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
          <LinkScroll
            onClick={onClose}
            to="faq"
            style={{ textDecoration: 'none' }}
          >
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
      </Drawer>
    </>
  )
}
