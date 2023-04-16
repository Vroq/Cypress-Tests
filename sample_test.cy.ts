import exp from "constants";

let username = 'nieisteniejącyUser@testowy-x-kom.com';
let password = 'Has3Łko!'; // Nidy nie użyto tej zadeklarowanej wartości (użyto zamiast niej username w polu password)
const api_auth_key = "jfsTOgOL23CN2G8Y" // Nidy nie użyto tej zadeklarowanej wartości

describe('TEST SCENARIO', () => {
   beforeEach(() => {
      console.log("przed testem")
   });

   it('TEST CASE 1', () => {

         /*

      Starting: Use Node 14.21.2
      Cypress": "^11.2.0", 

      */
      
      let sku_of_product: number = 312323;               // Wartość została zadeklarowana lecz nigdy nie została użyta, niepotrzebnie zajmuje miejsce w pamięci
      let prductName1: string = 'ASUS [E2E-AT] R500VD-SX573H i3';
      let PrductPrice1 : number = 100
      let prductName2 : string= 'Samsung [E2E-AT] 500GB M.2 PCIe NVMe 970 EVO Plus';
      let PrductPrice2 : number = 100
      let PrductName3 : string = 'Kingston 64GB DataTraveler 100 G3';
      let PrductPrice3 : number = 100;                   // Wartość została zadeklarowana lecz nigdy nie została użyta, niepotrzebnie zajmuje miejsce w pamięci

      let modalLayout: string = "[data-cy='add_to_basket_modal_layout']";

      cy.visit("https://www.fakesklepzadanierekrutacyjne.pl")
      cy.visit('https://www.fakesklepzadanierekrutacyjne.pl/logowanie');
      cy.wait(3000);

      // Sprawdzenie czy formularz logowania działa poprawnie

      //1. Podanie niepoprawnych danych
      cy.get('[data-cy="login_form"] input[name="login"]').type('password'); // Podano string 'password' w polu login, zamiast zadeklarowanej w linii 3 wartości username
      cy.get('[data-cy="login_form"] input[name"password"]').type(username);  // Podano wartosci username, która powinna zostać podana w linii 38, zamiast wartości, zadeklarowanej w linii 4, password
      cy.get('[data-cy="login_form"] button').contains('Zalguj').click(); // Literówka: Zalguj zamiast Zaloguj 

   
      // Wyszukanie produktu, po nazwie, dodanie 3 różnych produktów do koszyka

      // 1 produkt

      cy.visit('https://www.fakesklepzadanierekrutacyjne.pl/'); // Semicolon jest tutaj niepotrzebny, lecz użycie go też nie jest błędem
      cy.get('[data-cy="search_bar_row_wrapper"] input')
         .clear()
         .click() 
         .fill(`${prductName1}[enter]`);                   // Komenda .fill została użyta lecz nie zimportowana, należy dodać na początku pliku "import 'cypress-fill-command'"
      cy.get('[data-cy="listing_container_wrapper"]')
         .find("[data-cy='product_title']")
         .first()
         .click();
         cy.intercept(GET, "**/baskets").as("basket_response") // Metoda GET nie zostało podane w pojedyńczych apostrofach ', więc interpreter uważa je za nazwę wartości
         cy.contains('Dodaj do koszyka').filter(':visible').wait(3000).click().should('be.visible');
         cy.wait('basket_response').then((resp) => expect(resp.response.statusCode).to.be.above(200))

      cy.get("[data-cy="add_to_basket_modal_layout"]").should('have.visibility'); // Podany został "" zamiast znaku ' , zatem interpreter nie wie gdzie rozpoczyna się element, a gdzie się kończy. 
      cy.contains(modalLayout, 'Wróć do zakupów').click; // Możliwym rozwiązaniem jest postawienie ' po pierwszym nawiasie oraz przed drugim nawiasem. Użyto również have.visibility be.visible

      // 2gi produkt
      cy.visit('https://www.fakesklepzadanierekrutacyjne.pl'); 
      cy.get('[data-cy="search_bar_row_wrapper"] input')
         .clear()
         .click()
         .fill(`${prductName2}[enter]`);                 // Komenda .fill została użyta lecz nie zimportowana, należy dodać na początku pliku "import 'cypress-fill-command'"
      cy.get('[data-cy="listing_container_wrapper"]')
         .find("[data-cy='product_title']")
         .first()                                        // Użyto .first, a więc zostanie nadpisany produkt, który został dodany poprzednio
         .click();
      cy.intercept(GET, "**/baskets").as("basket_response") // Metoda GET nie zostało podana w pojedyńczych apostrofach ', więc interpreter uważa je za nazwę wartości
      cy.contains('Dodaj do koszyka').filter(':visible').wait(3000).click().should('be.visible');
      cy.wait('basket_response').then((resp) => expect(resp.response.statusCode).to.be.above(200))
      cy.get("[data-cy="add_to_basket_modal_layout"]").should('have.visibility'); // Tutaj również zostały podane cudzysłowia zamiast znaku ' Należy dodać znak ' zaraz po i zaraz przed nawiasem. Użyto również 'have.visibiliy' zamiast 'be.visible'
      cy.contains(modalLayout, 'Wróć do zakupów').click; 

      // 3gi produkt
      
      cy.visit('https://www.fakesklepzadanierekrutacyjne.pl'); 
      cy.get('[data-cy="search_bar_row_wrapper"] input')
         .clear()
         .click()
         .fill(`${PrductName3}[enter]`);                          // Komenda .fill została użyta lecz nie zimportowana, należy dodać na początku pliku "import 'cypress-fill-command'"
      cy.get('[data-cy="listing_container_wrapper"]')
         .find("[data-cy='product_title']")
         .first()
         .click();
         cy.intercept(GET, "**/baskets").as("basket_response")                      // Metoda GET nie zostało podana w pojedyńczych apostrofach ', więc interpreter uważa je za nazwę wartości
         cy.contains('Dodaj do koszyka').filter(':visible').wait(3000).click().should('be.visible');
         cy.wait('basket_response').then((resp) => expect(resp.response.statusCode).to.be.above(200))
      cy.get("[data-cy="add_to_basket_modal_layout"]").should('have.visibility'); // Tutaj również zostały podane cudzysłowia zamiast znaku ' Należy dodać znak ' zaraz po i zaraz przed nawiasem. Użyto również 'have.visibiliy' zamiast 'be.visible'
      cy.contains(modalLayout, 'Wróć do zakupów').click;

         //  //1 produkt
         // cy.visit('https://www.fakesklepzadanierekrutacyjne.pl');
         // cy.get('[data-cy="search_bar_row_wrapper"] input').type(sku_of_product).click()
         // cy.contains('Dodaj do koszyka').filter(':visible').wait(3000).click().should('be.visible');           // Użyto wielu komentarzy jednolinowych zamiast zastosowania komentarza wieloliniowego /* */
         // cy.get("[data-cy="add_to_basket_modal_layout"]").should('have.visibility');
         // cy.contains(modalLayout, 'Wróć do zakupów').click;

      // spradzenie czy w koszyku jest odpowiednia ilość produktów

      cy.open('https://www.fakesklepzadanierekrutacyjne.pl/koszyk'); // Użyto cy.open(), które nie istnieje, zamiast cy.visit()
      cy.get('[data-cy="basket_item"]').should('be.visible'); 
      cy.get('[data-cy="basket_item"]').should('have.count', 4);     // Have.count nie istnieje. Można tu użyć 'contain', 4

      cy.contains('[data-cy="product_name"]').invoke('text').each(text => {cy.wrap(text).should('be.visible')}) // Użyto cy.constains, które wyszukuje podany tekst w DOM, zamiast cy.get, który pobiera element o tej ścieżce
   
      const arrayOfPrices = [PrductPrice1, PrductPrice2, PrductName3]   // Użyto PrductName3 zamiast PrductPrice3
      arrayOfPrices.forEach((productPrice) => {
         cy.contains("cena").each((price) => {                          // contains zawsze bierzy pierwszy element z DOM
            cy.wrap(price).invoke('text').should('contain', productPrice)
         })
      })

      // Usuwanie 2 produktów z koszyka (2 pierwszych z listy)

      cy.get('[data-cy="basket_item"]').eq(1).filter("[data-cy=remove_button]").should('be.visible').click();
      cy.get('[data-cy="basket_item"]').eq(2).filter("[data-cy=remove_button]").should('be.visible').click();

      // Weryfikacja ze mozna kontynuować jako gość, ale przejście do formularza założenia konta
      cy.contains("button", "Przejdź do dostawy").click()                                 // Aby kliknąć przycisk z tekstem "Tekst przejdź do dostawy", należałoby użyć cy.get(button).contains('Przejdź do dostawy')
      cy.contains("Kontynuj jako gość").should('not.be.visible')                          // Element powinien być widoczny, skoro można kontynuować jako gość. Należałoby sprawdzić should(be.visible)
      cy.get("[data-cy='Załóż konto']")                                                   // Nie kliknięto tego elementu, a jedynie pobrano jego ścieżke.
      cy.window().then((win) => cy.wrap(win.location.href)).should('contain', 'https://www.fakesklepzadanierekrutacyjne.pl\rejestracja') // Zamiast 'contain' należy użyć 'eq', ponieważ eq sprawdza czy adres url jest dokładnie taki jak podany, a contain tylko sprawdza czy url ma w sobie podaną część
   });
}); 