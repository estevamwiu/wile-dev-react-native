# WILE.DEV

App mobile feito com Expo e React Native para o trabalho prático da faculdade. Reproduz duas telas de um perfil de desenvolvedora Front-end: Home e Sobre mim.

## Integrantes

- Leonidas Caliel
- William Estevam

## Descrição

A Home tem logo, imagem de perfil, texto de apresentação, botões de ação, uma seção de redes sociais com switch e quatro botões (GitHub, LinkedIn). A tela Sobre mim traz a biografia, com o mesmo cabeçalho e rodapé de créditos.

Comportamentos pedidos no trabalho:

- "Sobre mim" leva para a segunda tela.
- "Entre em contato!" mostra um Alert com "Entre em contato".
- O switch mostra um Alert com "Switch pressionado".

Diferenciais implementados:

- Dark mode e modo claro, alternados pelo switch.
- Animação de entrada nas duas telas.
- Ícones das redes com `@expo/vector-icons`.
- Botões das redes abrem os links reais (troque as URLs em `src/screens/HomeScreen.js`).
- Layout responsivo, com largura máxima em telas grandes.

## Prints das telas

Adicione as imagens em uma pasta `prints/` e referencie aqui:

<p align="center">
  <img src="https://github.com/user-attachments/assets/12f78192-b124-4bb1-88fc-342f7d5b95ff" width="40%" />
  <img src="https://github.com/user-attachments/assets/9fd8cd40-27bc-4200-8931-ed76593070ba" width="40%" />
</p>

## Estrutura

```
App.js
src/
  assets/       imagem de perfil (troque profile.png pela sua)
  components/   Header, ProfileImage, PrimaryButton, SocialButton, Footer
  hooks/        useFadeIn
  screens/      HomeScreen, AboutScreen
  theme/        colors e ThemeContext
```

## Como rodar

Pré-requisitos: Node.js e o app Expo Go no celular (ou um emulador).

```bash
npm install
npx expo install --fix
npx expo start
```

Escaneie o QR code com o Expo Go. Para web, pressione `w` no terminal.
