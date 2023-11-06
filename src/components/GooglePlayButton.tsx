import googlePlayImg from '../img/Google.png'

export default function GooglePlayButton() {
  return (
    <a
      href={process.env.REACT_APP_GOOGLE_PLAY_LINK || '#'}
      target="_blank"
      title="Baixar aplicativo"
      rel="noreferrer"
    >
      <img src={googlePlayImg} alt="Baixar aplicativo" width={200} />
    </a>
  )
}
