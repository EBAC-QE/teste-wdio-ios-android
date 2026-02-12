import { expect } from '@wdio/globals'

describe('Validar ambiente', () => {
    it('Deve validar se abre o app na opção Login', async () => {
        const loginBtn = await $('~Login')
        await loginBtn.click()
        await browser.pause(3000)
    })
})

