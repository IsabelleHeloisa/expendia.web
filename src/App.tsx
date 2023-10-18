import {Stack, Typography } from "@mui/material"
import Header from "./components/Header"
import mobileBanner from "./img/mobile_banner.png"
import googleStore from "./img/Google.png"
import rectangle from "./img/Rectangle.png"

export default function App( ) {
  return (
   <>
   <Header />
   <Stack direction="row" py={10} alignItems="center" justifyContent="space-around">
   <Stack gap={2}>
      <Typography fontSize={50}>Descomplique o <br/> controle de despesas <br/> em  grupos, famílias e <br/> casais</Typography>
      <img src={googleStore} alt=""  width={150}/>
    </Stack>
      <Stack>
       <img src={mobileBanner} alt="Mobile banner" title="Mobile banner" width={500} />
      </Stack>
    </Stack>
  
   </>

  )
}