import { Drawer } from '@mui/material'
import Navbar from './Navbar'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MenuMobile({ open, onClose }: Props) {
  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 0,
        overflow: 'hidden',
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          background: '#A34FD8'
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
      <Navbar direction="column" p={2} gap={4} onClickLink={onClose} />
    </Drawer>
  )
}
