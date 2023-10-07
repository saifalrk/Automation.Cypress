import { LoginPage } from "./Pages/login_page"

const loginpage = new LoginPage

describe('All Login Tests', function () {

    beforeEach(function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

    it('login test 1', function () {       // itonly or itskip('login test 1', function () {



        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin123')
        loginpage.clickLogin()
        cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text')


    })

    it('login test 2', function () {



        loginpage.enterUsername('Admin123')
        loginpage.enterPassword('admin123')
        loginpage.clickLogin()
        cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text')


    })

})

