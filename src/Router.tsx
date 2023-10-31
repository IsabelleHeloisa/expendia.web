import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Term from './pages/Term'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/privacy-policy"
          element={
            <Term slug="privacy-policy" title="Política de Privacidade" />
          }
        />
        <Route
          path="/terms-of-use"
          element={<Term slug="terms-of-use" title="Termos de uso" />}
        />
      </Routes>
    </BrowserRouter>
  )
}
