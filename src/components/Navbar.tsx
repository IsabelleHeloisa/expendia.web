import { Stack, StackProps, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

interface NavbarProps extends StackProps {
  onClickLink?: () => void
}

export type NavbarLink = {
  to: string
  label: string
  scroll?: boolean
}

export default function Navbar({ onClickLink, ...rest }: NavbarProps) {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/' || pathname === ''
  const isActive = ({ to }: NavbarLink) =>
    pathname === to + '/' || pathname === to

  const links: NavbarLink[] = isHomePage
    ? [
        {
          to: 'recursos',
          label: 'Recursos',
          scroll: true
        },
        {
          to: 'screenshots',
          label: 'Screenshots',
          scroll: true
        },
        {
          to: 'faq',
          label: 'Faq',
          scroll: true
        }
      ]
    : [
        {
          to: '/',
          label: 'Página inicial'
        },
        {
          to: '/privacy-policy',
          label: 'Política de privacidade'
        },
        {
          to: '/terms-of-use',
          label: 'Termos de uso'
        }
      ]

  return (
    <Stack direction="row" gap={3} {...rest}>
      {links.map(link =>
        link.scroll ? (
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
        ) : (
          <Link
            key={link.to}
            to={link.to}
            style={{ textDecoration: 'none' }}
            onClick={onClickLink}
          >
            <Typography
              color={isActive(link) ? '#673AB7' : 'black'}
              fontSize={24}
              sx={{
                ':hover': { cursor: 'pointer' }
              }}
            >
              {link.label}
            </Typography>
          </Link>
        )
      )}
    </Stack>
  )
}
