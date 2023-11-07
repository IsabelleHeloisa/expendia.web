import { Stack, StackProps, Typography } from '@mui/material'
import { Link as LinkScroll } from 'react-scroll'

interface NavbarProps extends StackProps {
  onClickLink?: () => void
}

export type NavbarLink = {
  to: string
  label: string
}

export default function Navbar({ onClickLink, ...rest }: NavbarProps) {
  const links: NavbarLink[] = [
    {
      to: 'recursos',
      label: 'Recursos'
    },
    {
      to: 'screenshots',
      label: 'Screenshots'
    },
    {
      to: 'faq',
      label: 'Faq'
    }
  ]

  return (
    <Stack direction="row" gap={3} {...rest}>
      {links.map(link => (
        <LinkScroll
          key={link.to}
          to={link.to}
          smooth={true}
          duration={500}
          style={{ textDecoration: 'none' }}
          onClick={onClickLink}
        >
          <Typography
            color="black"
            fontSize={24}
            sx={{
              ':hover': { cursor: 'pointer' }
            }}
          >
            {link.label}
          </Typography>
        </LinkScroll>
      ))}
    </Stack>
  )
}
