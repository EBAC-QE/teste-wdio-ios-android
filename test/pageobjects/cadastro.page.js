class CadastroPage {
    // Seletores
    get menuLogin() { return $('~Login') }
    get menuSignUp() { return $('~Sign up') }
    get campoEmail() { return $('~input-email') }
    get campoSenha() { return $('~input-password') }
    get campoConfirmaSenha() { return $('~input-repeat-password') }
    get btnCadastrar() { return $('~SIGN UP') }
    get msgSucesso () { return $('~Signed Up!')}
    get msgErroEmail () {return $('~Please enter a valid email address')}
    get msgErroConfirmaSenha () {return $('~Please enter the same password')}
    get msgErroSenha () {return $('~Please enter at least 8 characters')}

    // Ações
    async open() {
        await this.menuLogin.click()
        await this.menuSignUp.click()
    }

    async preencherFormulario(email, senha, confirmarSenha) {
        await this.campoEmail.clearValue()
        //await this.campoEmail.setValue(email)
        await this.campoEmail.addValue(email) //Outra forma de preencher 

        await this.campoSenha.clearValue()
        await this.campoSenha.setValue(senha)

        await this.campoConfirmaSenha.clearValue()
        await this.campoConfirmaSenha.setValue(confirmarSenha)

        await this.btnCadastrar.click()
    }



}

export default new CadastroPage()