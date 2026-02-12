# Projeto base com Appium + Webdriver.IO + iOS


## Listar dispositivos disponíveis
xcrun simctl list runtimes
xcrun simctl list devices

## Aplicaticvo WebdriverIO
https://github.com/webdriverio/native-demo-app

## Executar os testes
npm run wdio

## Executar teste por arquivo
npx wdio run wdio.conf.js --spec test/specs/cadastro.spec.js