 /// <reference types="cypress" /> 



describe('User melakukan proses login pada SIAKAD Polinema', () => {
	
	it('User memasukkan username berupa NIM dan password yang terdaftar', () => {
		cy.visit('http://siakad.polinema.ac.id/')
    	cy.get('#username').type('1931715072')
    	cy.get('#password').type('psdkukediri')
    	cy.get('.btn-success').click()
	});

	it('User memasukan username berupa NIM dan password yang belum terdaftar', () => {
		cy.visit('http://siakad.polinema.ac.id/')
    	cy.get('#username').type('081234')
    	cy.get('#password').type('temon')
    	cy.get('.btn-success').click()
    	cy.contains('Username / Password Salah')
	});

	
	it('User memasukkan username dan tidak mengisi password', () => {
		cy.visit('http://siakad.polinema.ac.id/')
    	cy.get('#username').type('1931715072')
    	cy.get('#password').type(' ')
    	cy.get('.btn-success').click()
    	cy.contains('Password harus diisi')
	});

	it('User tidak mengisi username dan mengisi password', () => {
		cy.visit('http://siakad.polinema.ac.id/')
    	cy.get('#username').type(' ')
    	cy.get('#password').type('psdkukediri')
    	cy.get('.btn-success').click()
    	cy.contains('Username harus diisi')
	});

	it('User tidak mengisi username dan tidak mengisi password', () => {
		cy.visit('http://siakad.polinema.ac.id/')
    	cy.get('#username').type(' ')
    	cy.get('#password').type(' ')
    	cy.get('.btn-success').click()
    	cy.contains('Username harus diisi')
	});

	
	it('User mengklik tombol "Lupa Password"', () => {
		cy.visit('http://siakad.polinema.ac.id/')
		cy.get('.forget-password').click(' ')
		
	});
})