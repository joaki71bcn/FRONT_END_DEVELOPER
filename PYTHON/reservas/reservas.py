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
  reserves_link = page.locator('a[href="../Booking/Grid.aspx?id=8"]').nth(0)  # 0 PARA EL INDICE DE ELEMENTOS IGUALES, ME DABA ERROR PORQUE HABIA OTRO IGUAL
  reserves_link.click()
  page.wait_for_timeout(4000) # SI NO PONIA ESTE TIMEOUT NO DABA TIEMPO A CARGAR EL CALENDARIO

  # ABRE CALENDAR
  date_calendar = page.locator('input#fechaTabla')
  date_calendar.click()
  #
  #
  #
  # VARIABLES PARA SELECCIONAR UNA FECHA CONCRETA
  target_day = "26"
  target_month = "11"  # November (0-indexed, so 11 is December)
  target_year = "2024"
  print("fecha: ",target_day, target_month, target_year)
  print()
  #  HORA DEL PARTIDO "19:30-21:00"
  target_time = "19:30-21:00"
  available_courts = []
  print("Hora: ", target_time)
  print()
  #
  #
  #
  # SELECTOR PARA LA FECHA
  date_selector = f'td[data-month="{target_month}"][data-year="{target_year}"] a:has-text("{target_day}")'
  page.wait_for_timeout(2000)

  # CLICK EN LA FECHA SELECCIONADA
  page.locator(date_selector).click()
  page.wait_for_timeout(4000)
  
  # POSICIONES DE LAS 4 PRIMERAS PISTAS, ELEMENTO RECT X= DENTRO DE <G>
  court_x_positions = [350,200,50,500]

  #LOCALIZA EL ELEMENTO <G> DE DE LA HORA ELEGIDA
  #TENEMOS TODAS LAS PISTAS CON LA HORA ELEGIDA
  court_slot = page.locator(f'g[time="{target_time}"]')
  print("locator donde esta el horario ",court_slot)
  print()

  # BUCLE POR CADA PISTA [350,200,50,500]
  for x in court_x_positions:
      # BUSCA DE TODAS LAS PISTAS CON HORARIO ELEGIDO LAS 4 PRIMERAS INDOOR 
      rect_slot = court_slot.locator(f'rect[x="{x}"]')
      print(rect_slot, "esto es el locator de la url de la pista con x", x)
      # DE LAS 4 PRIMERAS PISTAS NOS GUARDAMOS EL ID Y EL CAMBIO DE COLOR FILL EN VARIABLES
      slot_id = court_slot.first.get_attribute('id')
      fill_color = rect_slot.first.get_attribute('fill')
      # SI ESTA LIBRE LA PISTA ENTONCES LA GUARDAMOS EN EL ARRAY
      if slot_id and (slot_id.startswith("ocupacion") or fill_color == "white"):
          rect_slot.nth(1).click()
          print("pista libre", rect_slot)
          break
          available_courts.append((slot_id, x))

  # # CHEQUEAMOS SI HAY O NO PISTAS LIBRES.

  
  print("El navegador permanecerá abierto. Interactúa con él manualmente.")
  page.wait_for_timeout(15000)


        
