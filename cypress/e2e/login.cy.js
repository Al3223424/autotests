describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
     })
     it('Проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); // Нажали на забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели правильную почту
        cy.get('#restoreEmailButton').click(); // Нажали отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после нажатия вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
         cy.get('#pass').type('iLoveqastudio11'); // Ввели неправильный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })  
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov1.ru'); // Ввели неправильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })  
    it('Верный пароль и неверный логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); // Ввели неправильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    }) 
    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })
    
 })
 






 
 
 