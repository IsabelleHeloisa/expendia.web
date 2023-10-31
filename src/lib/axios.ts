import axios from 'axios'

const api = axios.create({
  baseURL: 'https://expendia.luigiraynel.com.br'
})

export { api }
