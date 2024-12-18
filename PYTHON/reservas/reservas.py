from playwright.sync_api import sync_playwright

with sync_playwright() as p:
  browser = p.chromium.launch(headless=False) 
  page = browser.new_page() 
  page.goto("https://padel7santmarti.com/#1") 

  # COOKIES INICIALES - REBUTJAR
  accept_button = page.locator('input#ButtonPermitirNecesarios') 
  accept_button.wait_for(state='visible', timeout=4000) 
  accept_button.click() 

  # ACCESS USUARI LINK PARA LOGIN ASPX
  page.click('a#linkUsuario') # hago click en el elemento a con id 

  # FORMULARIO LOGIN
  # EMAIL
  email_input = page.locator('input#ctl00_ContentPlaceHolderContenido_Login1_UserName')
  email_input.wait_for(state='visible', timeout=4000)
  email_input.fill('joaquinagras@gmail.com')
  # PASSWORD
  pwd_input = page.locator('input#ctl00_ContentPlaceHolderContenido_Login1_Password')
  pwd_input.fill('Oylo2022')
  # BOTON ACEPTAR
  form_button = page.locator('input#ctl00_ContentPlaceHolderContenido_Login1_LoginButton')
  form_button.click()
 
  # YA ESTAMOS LOGADOS
  # SELECCION DE LLOGUER DE PISTA
  p7_glorias_link = page.locator('a.parent:has(span:has-text("P7 Glòries"))')
  p7_glorias_link.hover()
  page.wait_for_selector('a[href="../Booking/Grid.aspx?id=8"]')
  reserves_link = page.locator('a[href="../Booking/Grid.aspx?id=8"]').nth(0)  # Change 0 to the index of the desired element
  reserves_link.click()

  # CALENDAR
  


  print("El navegador permanecerá abierto. Interactúa con él manualmente.")
  page.wait_for_timeout(90000)