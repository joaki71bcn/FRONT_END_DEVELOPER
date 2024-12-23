from playwright.sync_api import sync_playwright
from datetime import datetime, timedelta
import time

#
################## SELECCION (VARIABLES) DIA Y HORA RESERVA    #######################
target_day = "28"
target_month = "11"  # November (0-indexed, so 11 is December)
target_year = "2024"
print("Fecha: ",target_day, int(target_month) +1, target_year)
print()
#  HORA DEL PARTIDO "19:30-21:00"
target_time = "10:00-11:30"
available_courts = []
print("Hora: ", target_time)
print()
################## SELECCION (VARIABLES) DIA Y HORA RESERVA    #######################




################    BLOQUE DE HORA PARA LANZAMIENTO DE APLICACION    ###################
# Configuramos la hora objetivo para las 00:01 AM del día siguiente
# comentar + timedelta si queremos hacerlo el mismo dia
start_time = datetime.now().replace(hour=12, minute=56, second=0, microsecond=0) #+ timedelta(days=1)

# OBTENER HORA ACTUAL
current_time = datetime.now()

# Calcular la diferencia en segundos
time_diff = (start_time - current_time).total_seconds()

# Función para convertir segundos en formato horas-minutos-segundos
def segundos_a_hms(segundos):
    horas = segundos // 3600
    minutos = (segundos % 3600) // 60
    segundos = segundos % 60
    return f"{int(horas):02}:{int(minutos):02}:{int(segundos):02}"

# Mostrar cuántos segundos faltan hasta la hora objetivo
while time_diff > 0:
    # Convertimos el tiempo restante a horas-minutos-segundos
    tiempo_restante = segundos_a_hms(time_diff)
    
    # Imprimir en la misma línea
    print(f"Tiempo restante: {tiempo_restante}", end='\r')  # Sobrescribe la línea
    time.sleep(1)  # Esperar 1 segundo
    current_time = datetime.now()
    time_diff = (target_time - current_time).total_seconds()

# Lanzar la aplicación
print("¡Hora alcanzada! Ejecutando la aplicación...")
################    BLOQUE DE HORA PARA LANZAMIENTO DE APLICACION    ###################




# EMPIEZA EL PROGRAMA UTILIZANDO LA WEB OBJETIVO
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
  email_input.fill('@gmail.com')
  # PASSWORD
  pwd_input = page.locator('input#ctl00_ContentPlaceHolderContenido_Login1_Password')
  pwd_input.fill('2022')
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
  # SELECTOR PARA LA FECHA
  date_selector = f'td[data-month="{target_month}"][data-year="{target_year}"] a:has-text("{target_day}")'
  page.wait_for_timeout(2000)

  # CLICK EN LA FECHA SELECCIONADA
  page.locator(date_selector).click()
  page.wait_for_timeout(4000)
  
  # POSICIONES DE LAS 4 PRIMERAS PISTAS, ELEMENTO RECT X= DENTRO DE <G>
  court_x_positions = [500,50,200,350]
  # CONVERSION A NUMERO DE PISTA REAL
  court_conversion = {500: 4, 50: 1, 200: 2, 350: 3}

  #LOCALIZA EL ELEMENTO <G> DE DE LA HORA ELEGIDA
  #TENEMOS TODAS LAS PISTAS CON LA HORA ELEGIDA
  court_slot = page.locator(f'g[time="{target_time}"]')
  print("LOCATOR HORARIOS - court_slot :",court_slot)
  print()

  reservation_made = False
  # BUCLE POR CADA PISTA [500,50,200,350]
  for x in court_x_positions:
        button = court_slot.locator(f'rect[x="{x}"].buttonHora') 
        if button.count() > 0: # Verificamos si existe al menos un elemento
          print("LOCATOR BOTONES RESERVA POR : ",x , button)
          button.first.click() 
          print("PISTA LIBRE: ", court_conversion[x])
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
          # CONFIRMACION BOTON FINAL
          page.wait_for_timeout(4000)
          confirm_button = page.locator('input#ctl00_ContentPlaceHolderContenido_ButtonConfirmar') 
          confirm_button.wait_for(state='visible', timeout=4000) 
          confirm_button.click()
          # MENSAJE DE CONFIRMACION SI LA PISTA SE HA RESERVADO
          print(f"Pista {court_conversion[x]} reservada")
          reservation_made = True
          break
        # NO SE HA PODIDO RESERVAR LA PISTA ACTUAL DEL BUCLE FOR
        else: 
           print(f"Pista {court_conversion[x]} no se ha podido hacer book.")
  # SI NO SE HA PODIDO RESERVAR NINGUN PISTA
  if not reservation_made:
      print(f"No hay pistas disponibles en {target_time} en fecha: {target_day} {int(target_month) +1} {target_year}")
         
  print("El navegador permanecerá abierto. Interactúa con él manualmente.")
  page.wait_for_timeout(5000)


        
