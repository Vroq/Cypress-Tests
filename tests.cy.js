
describe('zamowienia-podsumowanie', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

 // Test 1
  it('Wyświetlono stronę główną', () => {
    cy.viewport(1000, 660)
    cy.visit('https://www.x-kom.pl')
    cy.get('div.modal.modal--after-open').should('be.visible')
    cy.get('.sc-1p1bjrl-9').click()
    cy.wait(3000)
    cy.getAllCookies()
    cy.getCookie('trackingPermissionConsentsValue').should('have.property', 'value', '%7B%22cookies_analytics%22%3Atrue%2C%22cookies_personalization%22%3Atrue%2C%22cookies_advertisement%22%3Atrue%7D')
    cy.get('#recommendedSection > div > div.sc-10tkls1-3.cpdakW > div.sc-1s1zksu-0.ecpleP.sc-14h089p-0.gybZZY.sc-ecmwfg-2.iSBAsS > div:nth-child(2) > div > div.sc-3g60u5-0.dNgqYV.sc-673i07-0.gNXnLL > div > div > button').click({force: true})
    cy.wait(5000)
    cy.contains('Produkt dodany do koszyka')
    cy.contains('Przejdź do koszyka').click({force: true})
    cy.contains('Łączna kwota')
    cy.get('.Select-control').click()
    cy.get('#react-select-id1--option-1').click()
    cy.contains('Liczba produktów zmieniona')


    cy.get('#app > div.sc-14ybyi4-0.iToDFs.sc-17bkz68-0.eqeJOo > div.sc-1s1zksu-0.sc-1s1zksu-1.hHQkLn > div.sc-1s1zksu-0.dsazka > div.sc-3ml6w8-0.hxgMhc > ul > li > div > div > div > div.sc-160wg4d-10.hFEBaH > a > h3').then((name) => {
      let na = name.text()
      cy.get('.sc-160wg4d-4 > .sc-6n68ef-1 > .sc-6n68ef-3').then((cost) => {
        let cs = cost.text()
        cy.get('.sc-pvj85d-0 > .sc-15ih3hi-0').click()
        cy.url().should('include', '/zamowienie/logowanie-lub-rejestracja')
        cy.get('.czLdGg > :nth-child(1) > .sc-15ih3hi-0').click()
        cy.url().should('include', '/zamowienie')
        cy.get('.sc-1riiuyq-5').then((finalN) =>{
          let fi = finalN.text()
          expect(na).to.equal(fi)
          cy.get('.sc-6n68ef-3').then((finalC) => {
            let fin = finalC.text()
            expect(cs).to.equal(fin)

          })
        })
      })
    })
    cy.get('.sc-14rohpf-0 > .DqLRD > .sc-nhgagy-5 > .sc-116iin7-0').click()
    cy.get('.sc-14rohpf-0 > .DqLRD > .sc-nhgagy-5 > .sc-116iin7-0').click()
    cy.get(':nth-child(1) > .sc-3ncbnj-0 > .sc-3ncbnj-3').type('John Sn')
    cy.get(':nth-child(2) > .sc-3ncbnj-0 > .sc-3ncbnj-3').type('Szkolna 123')
    cy.get('.sc-17mnrzu-1 > .sc-3ncbnj-0 > .sc-3ncbnj-3').type('12-345')
    cy.get(':nth-child(4) > .sc-3ncbnj-0 > .sc-3ncbnj-3').type('Kraków')
    cy.get('.sc-17mnrzu-2 > .sc-3ncbnj-0 > .sc-3ncbnj-3').type('123456789')
    cy.get(':nth-child(6) > .sc-3ncbnj-0 > .sc-3ncbnj-3').type('hello@example.com')
    cy.get('.sc-og7o5q-0 > .DqLRD > .sc-nhgagy-5 > .sc-116iin7-0').click()
    cy.get(':nth-child(1) > .sc-4mwtey-0 > .sc-3qnozx-2 > .sc-3qnozx-1').click()
    cy.get('.sc-pvj85d-0 > .sc-15ih3hi-0').click()
    cy.url().should('include', '/zamowienie/podsumowanie')
    cy.get('.sc-1nka6h7-2').then((personName) => {
      let person = personName.text()
      expect(person).to.equal('John Sn')
      cy.get('.sc-18rk1dd-0 > .sc-1ucb0tr-0 > .sc-1ucb0tr-2 > :nth-child(2)').then((streetN) => {
        let street = streetN.text()
        expect(street).to.equal('Szkolna 123')
        cy.get('.sc-1ucb0tr-2 > :nth-child(3)').then((cityN) => {
          let city = cityN.text()
          expect(city).to.equal('12-345 Kraków')
          cy.get('.sc-1nka6h7-1').then((email) => {
            let e_mail = email.text()
            expect(e_mail).to.equal('e-mail: hello@example.com')
            cy.get('.sc-1ucb0tr-2 > :nth-child(5)').then((phoneN) => {
              let phone = phoneN.text()
              expect(phone).to.equal('tel. 12 345 67 89')
            })
          })
        })
      })
    })
  })
})
 // Test 2
describe('ListingPage - wyświetlenie, ogólne działania', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('Wyświetlono stronę główną', () => {
    cy.viewport(1000, 660)
    cy.visit('https://www.x-kom.pl')
    cy.get('div.modal.modal--after-open').should('be.visible')
    cy.get('.sc-1p1bjrl-9').click()
    cy.wait(3000)
    cy.getAllCookies()
    cy.getCookie('trackingPermissionConsentsValue').should('have.property', 'value', '%7B%22cookies_analytics%22%3Atrue%2C%22cookies_personalization%22%3Atrue%2C%22cookies_advertisement%22%3Atrue%7D')
    cy.viewport(1600, 900)
    cy.get(':nth-child(3) > .sc-13hctwf-0 > .sc-13hctwf-5').click()
    cy.url().should('include', '/g/7-gaming-i-streaming.html')
    cy.wait(3000)
    cy.contains('Laptopy do gier ')
    cy.get('.sc-4wflom-1 > :nth-child(2) > .sc-1h16fat-0 > .sc-1tblmgq-0 > .sc-1tblmgq-1').click()
    cy.url().should('include', '/g-7/c/2382-laptopy-do-gier.html')
    cy.get('.sc-dntoh-3').should('be.visible')
    cy.url().then((urlAddress) => {
      let urlA = urlAddress
      cy.get(':nth-child(1) > :nth-child(1) > .sc-11phlj5-3 > .sc-30n28d-3 > .sc-2ride2-0 > .sc-30n28d-5 > .sc-30n28d-13 > .sc-3g60u5-0 > .sc-1h16fat-0 > .sc-1tblmgq-0').click()
      cy.visit(urlA)
      cy.url().should('eq', urlA)
    })

    cy.get('.bSMyAG > .sc-11oikyw-0 > .sc-1h16fat-0').click()
    cy.url().should('include', 'page=2')
    cy.get('#listing-filters > div:nth-child(2) > div > section.sc-1mqx5n1-0.dgCjFE.sc-1n7ydz7-3.gizGZI > div:nth-child(2) > div > label > span').first().then((producer) => {
      let prod = producer.text()
      cy.log(prod)
      cy.get('.sc-dntoh-3').then((beforeNumberOfProducts) => {
        let beforeNumOfProd = beforeNumberOfProducts.text()
        cy.get('.sc-1n7ydz7-3 > :nth-child(2) > .sc-cs8ibv-2 > .sc-3qnozx-2 > .sc-3qnozx-1').click()
        cy.contains(beforeNumOfProd).should('not.exist')
        cy.url().should('include', 'prod')
        cy.get('.sc-1n7ydz7-12').click()
        cy.contains(beforeNumOfProd)
      })
    })
  })
})

// Test 3
describe('Gorący strzał - weryfikacja stanu, wyświetlania', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('Wyświetlono stronę główną', () => {
    cy.viewport(1000, 660)
    cy.visit('https://www.x-kom.pl')
    cy.get('div.modal.modal--after-open').should('be.visible')
    cy.get('.sc-1p1bjrl-9').click()
    cy.wait(3000)
    cy.getAllCookies()
    cy.getCookie('trackingPermissionConsentsValue').should('have.property', 'value', '%7B%22cookies_analytics%22%3Atrue%2C%22cookies_personalization%22%3Atrue%2C%22cookies_advertisement%22%3Atrue%7D')
    cy.get('.sc-mbxiax-1').then((gStrzal) => {
      let gs = gStrzal
      if(gs.text().includes('Wyprzedano')){
        cy.log("Wyprzedano")
        cy.get('.sc-1s1zksu-1 > :nth-child(1) > .sc-m80syu-0 > span').should('exist')
        cy.get('.sc-1bb6kqq-4').should('exist')
        cy.get('.sc-ntliq5-2').then((timeLeft) => {
          let timeL = timeLeft.text()
          expect(timeL).to.equal('Następny gorący strzał:')
          cy.get('.sc-mbxiax-1 > .sc-1h16fat-0').click()
          cy.url().should('include', 'goracy_strzal')
          cy.get('.sc-ikk4le-7 > .sc-1h16fat-0').should('be.visible').and('not.be.disabled')
          cy.get('.sc-ikk4le-7 > .sc-1h16fat-0').then((buttonSold) => {
            let buttonS = buttonSold.text()
            expect(buttonS).to.equal('Zobacz produkt w cenie regularnej')
          })
        })
      } else {
        cy.log("Dostępny")
        cy.get('.sc-1s1zksu-1 > :nth-child(1) > .sc-m80syu-0 > span').should('exist')
        cy.get('.sc-1bb6kqq-4').should('exist')
        cy.get('.sc-ntliq5-2').then((timeLeftActive) => {
          let timeLeftA = timeLeftActive.text()
          expect(timeLeftA).to.equal('Śpiesz się, oferta kończy się za:')
          cy.get('.sc-mbxiax-1 > .sc-1h16fat-0').click()
          cy.url().should('include', 'goracy_strzal')
          cy.get('button').contains('Dodaj do koszyka').should('be.visible').and('not.be.disabled')
          cy.get('button').contains('Dodaj do koszyka').then((buttonActive) => {
            let buttonA = buttonActive.text()
            expect(buttonA).to.equal('Dodaj do koszyka')
          })
        })
      }
    })
  })
})