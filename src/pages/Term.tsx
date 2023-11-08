import {
  Alert,
  AlertTitle,
  Container,
  Skeleton,
  Stack,
  Typography
} from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import { api } from '../lib/axios'
import dayjs from 'dayjs'

interface TermProps {
  title: string
  slug: string
}

export default function Term({ title, slug }: TermProps) {
  const [text, setText] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const getTerm = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/terms/${slug}`)
      setUpdatedAt(response.data?.term?.updatedAt || '')
      if (response.data?.term?.text) setText(response.data.term.text)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [slug])

  useEffect(() => {
    getTerm()
  }, [getTerm, slug])

  return (
    <Container>
      <Stack mt={10} gap={2} py={4}>
        <Typography variant="h1" fontSize={24}>
          {title}
        </Typography>
        {updatedAt && (
          <Typography>
            Última atualização: {dayjs(updatedAt).format('DD/MM/YYYY HH:mm')}
          </Typography>
        )}
        {isLoading ? (
          <Stack gap={1}>
            <Skeleton variant="text" sx={{ fontSize: 16 }} width="70%" />
            <Skeleton variant="text" sx={{ fontSize: 16 }} width="90%" />
            <Skeleton variant="text" sx={{ fontSize: 16 }} width="60%" />
            <Skeleton variant="text" sx={{ fontSize: 16 }} width="70%" />
            <Skeleton variant="text" sx={{ fontSize: 16 }} width="90%" />
            <Skeleton variant="text" sx={{ fontSize: 16 }} width="60%" />
          </Stack>
        ) : text ? (
          <Typography>
            <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>
          </Typography>
        ) : (
          <Alert severity="error">
            <AlertTitle>
              Ops! Não foi possível carregar o texto do termo
            </AlertTitle>
            Houve algum erro para trazer o texto deste termo. Tente novamente
            mais tarde e se o erro persistir contate-nos!
          </Alert>
        )}
      </Stack>
    </Container>
  )
}
