# Perfil Dev Jr

Aplicativo mobile desenvolvido em React Native com Expo para apresentar um perfil profissional, habilidades técnicas e projetos de forma simples, organizada e funcional.

## Descrição

O projeto foi criado como resposta a um teste técnico para vaga de Desenvolvedor Mobile Júnior. A proposta é demonstrar domínio dos componentes básicos do React Native, navegação por abas inferiores, organização em telas separadas e documentação clara do que foi implementado.

## Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- React Navigation
- StyleSheet
- Git e GitHub

## Funcionalidades implementadas

- Navegação inferior por abas com 3 telas: Perfil, Habilidades e Projetos
- Tela de perfil com foto, nome, cargo e seção "Sobre mim"
- Lista com 6 habilidades organizadas em cards
- Tela de projetos com 2 projetos apresentados em destaque
- Área de contato com e-mail, GitHub e LinkedIn/portfólio
- Campo de mensagem e botão "Enviar contato"
- Layout estilizado somente com `StyleSheet`

## Telas

### Perfil
Apresenta a identidade profissional do candidato, imagem de perfil local, nome, cargo e um texto curto de apresentação.

### Habilidades
Exibe uma lista simples com as principais competências técnicas.

### Projetos
Mostra dois projetos, as informações de contato e um pequeno formulário com campo de mensagem e botão de envio.

## Organização do código

- `perfil-dev-jr/App.js` concentra a configuração da navegação por abas
- `perfil-dev-jr/screens/PerfilScreen.js` contém a tela de perfil
- `perfil-dev-jr/screens/HabilidadesScreen.js` contém a lista de habilidades com `FlatList`
- `perfil-dev-jr/screens/ProjetosScreen.js` reúne projetos, contatos e o campo de mensagem
- `perfil-dev-jr/assets/` armazena a imagem de perfil usada na interface

## Decisões tomadas

- Usei navegação por abas para deixar o acesso às telas direto e compatível com o requisito do teste
- Usei imagem local em vez de depender apenas de URLs externas
- Mantive a interface sem bibliotecas visuais prontas, usando apenas componentes nativos do React Native
- Simplifiquei a aparência para um visual mais básico, com fundo branco gelo, texto preto e bordas azul claro

## Como executar o projeto

1. Clone o repositório
   ```bash
   git clone link-do-repositorio
   ```
2. Acesse a pasta do projeto
   ```bash
   cd perfil-dev-jr
   ```
3. Instale as dependências
   ```bash
   npm install
   ```
4. Inicie o Expo
   ```bash
   npx expo start
   ```

## Autor

Danilo Jorge