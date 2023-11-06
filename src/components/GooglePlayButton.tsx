import googlePlayImg from '../img/Google.png'

export default function GooglePlayButton() {
  return (
    <a
      href="https://play.google.com/store/search?q=Expendia&c=apps&hl=pt_BR&gl=US"
      target="_blank"
      title="Baixar aplicativo"
    >
      <img src={googlePlayImg} alt="Baixar aplicativo" width={200} />
    </a>
  )
}
