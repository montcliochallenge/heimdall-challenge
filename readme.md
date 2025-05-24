# HEIMDALL - Localização e Monitoramento de Motos no Pátio
> Aplicativo mobile desenvolvido com React Native e Expo.

## Integrantes

| Nome Completo               | RM       |
|-----------------------------|----------|
| Pedro Henrique Lima Santos  | 558243   |
| Vitor Gomes Martins         | 558244   |
| Leonardo Pimentel Santos    | 557541   |

## Descrição da Solução

O **HEIMDALL** é um aplicativo mobile desenvolvido em **React Native** com o objetivo de facilitar o processo de **localização e monitoramento de motocicletas dentro do pátio logístico da Mottu**. A proposta é que os gestores possam registrar zonas, vagas e motos, além de visualizar um mapa do pátio e acessar informações relevantes por meio de uma navegação intuitiva.

Este aplicativo simula a interface do sistema e oferece as seguintes funcionalidades:

- Tela de **Splash**, **Login** e **Cadastro**
- Navegação Drawer com páginas de **Home**, **Perfil** e **Sobre**
- Armazenamento local do nome de usuário usando `AsyncStorage`
- Design responsivo com foco em acessibilidade e boas práticas de UX

## Como Rodar o Projeto Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão 18.x)
- [Git](https://git-scm.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Editor de código (como o [VS Code](https://code.visualstudio.com/))
- App **Expo Go** no celular **ou** o **Android Studio** com um emulador configurado

### Instalação

1. **Clone o repositório:**

```bash
 git clone https://github.com/30Lima/heimdall-mobile.git
```
2. **Acesse o diretório do projeto:**

- cd heimdall-mobile

3. **Instale as dependências:**

- npx expo install
- npx expo install @react-navigation/native
- npx expo install @react-navigation/native-stack
- npx expo install @react-navigation/drawer
- npx expo install react-native-screens react-native-safe-area-context
- npx expo install react-native-gesture-handler react-native-reanimated
- npx expo install @react-native-async-storage/async-storage
- npx expo install @react-native-picker/picker
- npx expo install @expo/vector-icons
- npm install react-native-vector-icons

4. **Execute no emulador ou celular:**


- No Android Studio, abra o emulador (ex.: Pixel 3 API 30)
- No celular, escaneie o QR code com o app Expo Go
- Caso queira rodar na web, aperte W quando o metro Builder for inicializado e baixe a dependencia:
  - npx expo install react-dom react-native-web @expo/metro-runtime

**OBS.: Para o desenvolvimento deste projeto, foi utilizado o Pixel 3 API 30**

5. **Inicialize o projeto:**

- npx expo start