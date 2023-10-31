import { Container, Stack, Typography } from '@mui/material'

export default function DeleteAccount() {
  return (
    <Container>
      <Stack mt={10} gap={2} py={4}>
        <Typography variant="h1" fontSize={24}>
          Como deletar sua conta no aplicativo?
        </Typography>
        <Stack gap={2.5}>
          <Typography>
            Você tem o direito de excluir sua conta a qualquer momento, fazendo
            isso, todos os seus dados pessoais serão excluídos de maneira
            permanente e irreversível de nossa base de dados e seus grupos e
            despesas serão anonimizados não mantendo qualquer vínculo ao seu
            usuário.
          </Typography>
          <Typography>
            Para excluir sua conta você precisa ir em{' '}
            <strong>
              "Configurações" (clicando sobre sua foto de perfil ou "avatar")
            </strong>
            , na sessão
            <strong>"Conta"</strong>, clique em <strong>"Excluir conta"</strong>
            , você será levado a uma tela que lhe informará as implicações da
            exclusão de sua conta. <br /> Ao clicar em{' '}
            <strong>"EXCLUIR MINHA CONTA"</strong>, você será levado a uma tela
            onde solicitará que você digite o código de confirmação que recebeu
            em seu e-mail para exclusão de sua conta. <br /> Ao confirmar a
            exclusão com o código e se o mesmo estiver válido, será realizado a
            exclusão de sua conta de maneira imediata, permanente e
            irreversível.
          </Typography>
          <Typography>
            Será possível recriar sua conta e recadastrar seus dados a qualquer
            momento, mas os dados cadastrados em suas contas anteriores serão
            definitivamente irrecuperáveis.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  )
}
