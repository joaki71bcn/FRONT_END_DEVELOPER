from playwright.sync_api import sync_playwright
from datetime import datetime, timedelta
import time

# HORARIO CUANDO SE LANZA LA APLICACION
target_time_str = "16:02"
target_time = datetime.strptime(target_time_str, "%H:%M").replace(
   year=datetime.now().year,
   month=datetime.now().month,
   day=datetime.now().day,)
# OBTENER HORA ACTUAL
current_time = datetime.now()
# Calcular la diferencia en segundos
time_diff = (target_time - current_time).total_seconds()
if time_diff > 0:
    print(f"Esperando hasta la hora objetivo: {target_time_str}")
    time.sleep(time_diff)
# Lanzar la aplicación
print("¡Hora alcanzada! Ejecutando la aplicación...")


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
  target_day = "30"
  target_month = "11"  # November (0-indexed, so 11 is December)
  target_year = "2024"
  print("fecha: ",target_day, target_month, target_year)
  print()
  #  HORA DEL PARTIDO "19:30-21:00"
  target_time = "10:30-12:00"
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
  court_x_positions = [500,50,200,350]

  #LOCALIZA EL ELEMENTO <G> DE DE LA HORA ELEGIDA
  #TENEMOS TODAS LAS PISTAS CON LA HORA ELEGIDA
  court_slot = page.locator(f'g[time="{target_time}"]')
  print("LOCATOR HORARIOS - court_slot :",court_slot)
  print()

  # BUCLE POR CADA PISTA [350,200,50,500]
  for x in court_x_positions:
        button = court_slot.locator(f'rect[x="{x}"].buttonHora') 
        if button.count() > 0: # Verificamos si existe al menos un elemento
          print("LOCATOR BOTONES RESERVA POR : ",x , button)
          button.first.click() 
          print("PISTA LIBRE: ", button)
          # CLICK EN VENTANA DE EMERGENTE CON POLITICA DE RESERVA CHECKBOX
          checkbox = page.locator('input#terminos')
          checkbox.wait_for(state='visible', timeout=3000)
          checkbox.check()
          # CLICK EN EL BOTON 90 MINUTOS
          time_button = page.locator('.btnTiempo')
          time_button.click() 
          page.wait_for_timeout(4000)
          # NUEVA VENTA PARA CONDICIONES LEGALES CHECKBOX
          checkbox_book = page.locator('input#ctl00_ContentPlaceHolderContenido_CheckBoxAceptoCondicionesLegales')
          # NO HA FUNCONADO CON WAIT_FOR, LO DEJO CON EL TIMEOUT DE ARRIBA
          # checkbox_book.wait_for(state='visible', timeout=4000) 
          checkbox_book.check()
          # BOTON CARREC CONTRA SALDO
          pay_button = page.locator('input#ctl00_ContentPlaceHolderContenido_ButtonPagoSaldo')
          pay_button.click()
          break
        else: 
           print("No hay pistas disponibles en ", x)

  # # CHEQUEAMOS SI HAY O NO PISTAS LIBRES.

  
  print("El navegador permanecerá abierto. Interactúa con él manualmente.")
  page.wait_for_timeout(15000)


        
