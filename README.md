# Projeto base com Appium + Webdriver.IO + iOS

Projeto base para estudos de automação mobile com iOS usando WebdriverIO + Appium.
A ideia é servir como ponto de partida para alunos evoluírem o framework com novas páginas, cenários e boas práticas.

## Pré-requisitos

### macOS (execução iOS)
- Node.js LTS
- npm
- Xcode instalado
- iOS Simulator disponível
- Appium (via dependências do projeto)

### Windows (execução Android)
- Node.js LTS
- npm
- Android Studio
- Android SDK configurado (`ANDROID_HOME` e `platform-tools` no `PATH`)
- Emulador Android criado e disponível
- Appium (via dependências do projeto)

> Observação: iOS só executa em macOS. Em Windows, o fluxo recomendado é Android.

## 1) Criar sua cópia do projeto (Fork ou Clone)

### Opção A: Fork (recomendado para alunos)
1. Faça um fork deste repositório no GitHub.
2. Clone o seu fork localmente:

```bash
git clone https://github.com/<SEU_USUARIO>/teste-wdio-ios-android.git
cd teste-wdio-ios-android
```

### Opção B: Clone direto
```bash
git clone https://github.com/EBAC-QE/teste-wdio-ios-android.git
cd teste-wdio-ios-android
```

## 2) Instalação
Instale as dependências do projeto:

```bash
npm install
```

## 3) Validar simuladores disponíveis
Mantenha estas dicas para conferir ambientes iOS instalados:

```bash
xcrun simctl list runtimes
xcrun simctl list devices
```

Se estiver no Windows/Android, valide dispositivos com:

```bash
adb devices -l
```

Para saber a versão do Android SDK:

```bash
adb shell getprop ro.build.version.release
```

## 4) Executar os testes
```bash
npm run wdio
```

## 5) Executar teste por arquivo
```bash
npx wdio run wdio.conf.js --spec test/specs/cadastro.spec.js
```

## Referência do aplicativo base WebdriverIO
https://github.com/webdriverio/native-demo-app

## Próximos passos para evolução (alunos)
- Criar novos cenários em `test/specs`.
- Evoluir Page Objects em `test/pageobjects`.
- Melhorar assertions e tratamento de waits para reduzir flaky tests.
- Organizar massa de dados e preparar estrutura para execução futura em Android.