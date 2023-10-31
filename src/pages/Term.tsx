import { Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { api } from '../lib/axios'

interface TermProps {
  title: string
  slug: string
}

export default function Term({ title, slug }: TermProps) {
  const [text, setText] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const getTerm = async () => {
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
  }

  useEffect(() => {
    getTerm()
  }, [])

  return (
    <Stack>
      <Typography variant="h1" fontSize={24}>
        {title}
      </Typography>
      <Typography>Última atualização: {updatedAt}</Typography>
      <Typography>
        {isLoading ? (
          'Verificando atualização do termo...'
        ) : (
          <span
            dangerouslySetInnerHTML={{
              __html: text
            }}
          ></span>
        )}
      </Typography>
    </Stack>
  )
}
