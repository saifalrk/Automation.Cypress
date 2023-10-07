export class LoginPage{


usernam_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
login_bitton = '.oxd-button'

    enterUsername(username){
        cy.get(this.usernam_textbox).type(username)

    }
    enterPassword(password){
        cy.get(this.password_textbox).type(password)

    }

    clickLogin(){
        cy.get(this.login_bitton).click()

    }
}


    