from playwright.sync_api import sync_playwright
from datetime import datetime, timedelta
import time

#
#
# Para usar este programa cambiar los datos de la fecha y hora de reserva 
# así como de la hora de lanzamiento en los 2 siguientes bloques
#
#
#
# Prompt the user for email and password
email = input("Please enter your email: ")
password = input("Please enter your password: ")
#
################## BLOQUE SELECCION (VARIABLES) DIA Y HORA RESERVA    #######################
target_day = "30"
target_month = "11"  # November (0-indexed, so 11 is December)
target_year = "2024"
print("Fecha: ",target_day, int(target_month) +1, target_year)
#  HORA DEL PARTIDO "19:30-21:00"
target_time = "18:00-19:30"
available_courts = []
print("Hora: ", target_time)


#
################    BLOQUE DE HORA PARA LANZAMIENTO DE APLICACION    ###################
# Configuramos la hora objetivo para las 00:01 AM del día siguiente
# comentar + timedelta si queremos hacerlo el mismo dia
start_time = datetime.now().replace(hour=11, minute=45, second=0, microsecond=0) #+ timedelta(days=1)

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
    time_diff = (start_time - current_time).total_seconds()

# Lanzar la aplicación
print("¡Hora alcanzada! Ejecutando la aplicación...")
################    BLOQUE DE HORA PARA LANZAMIENTO DE APLICACION    ###################




# EMPIEZA EL PROGRAMA UTILIZANDO LA WEB OBJETIVO
with sync_playwright() as p:
  browser = p.chromium.launch(headless=True) 
  page = browser.new_page() 
  page.goto("https://padel7santmarti.com/#1") 
 
  # COOKIES INICIALES - REBUTJAR
  accept_button = page.locator('input#ButtonPermitirNecesarios') 
  accept_button.wait_for(state='visible', timeout=4000) 
  accept_button.click() 
  print("boton cookie ok")
  # ACCESS USUARI LINK PARA LOGIN ASPX
  page.click('a#linkUsuario') # hago click en el elemento a con id 
  print("click en usuario ok")

  

  ####################### FORMULARIO LOGIN CREDENCIALES   #######################
  # EMAIL
  email_input = page.locator('input#ctl00_ContentPlaceHolderContenido_Login1_UserName')
  email_input.wait_for(state='visible', timeout=4000)
  email_input.fill(email)
  # PASSWORD
  pwd_input = page.locator('input#ctl00_ContentPlaceHolderContenido_Login1_Password')
  pwd_input.fill(password)
  # BOTON ACEPTAR
  form_button = page.locator('input#ctl00_ContentPlaceHolderContenido_Login1_LoginButton')
  form_button.click()
  print("usuario y password ok")
  ####################### FORMULARIO LOGIN CREDENCIALES   #######################


 
  # YA ESTAMOS LOGADOS
  # SELECCION DE LLOGUER DE PISTA
  p7_glorias_link = page.locator('a.parent:has(span:has-text("P7 Glòries"))')
  p7_glorias_link.hover()
  page.wait_for_selector('a[href="../Booking/Grid.aspx?id=8"]')
  reserves_link = page.locator('a[href="../Booking/Grid.aspx?id=8"]').nth(0)  # 0 PARA EL INDICE DE ELEMENTOS IGUALES, ME DABA ERROR PORQUE HABIA OTRO IGUAL
  reserves_link.click()
  print("click en reservas ok")
  page.wait_for_timeout(4000) # SI NO PONIA ESTE TIMEOUT NO DABA TIEMPO A CARGAR EL CALENDARIO

  # ABRE CALENDAR
  date_calendar = page.locator('input#fechaTabla')
  date_calendar.click()
  print("click en calandario ok")
  #
  #
  # SELECTOR PARA LA FECHA
  date_selector = f'td[data-month="{target_month}"][data-year="{target_year}"] a:has-text("{target_day}")'
  page.wait_for_timeout(2000)

  # CLICK EN LA FECHA SELECCIONADA
  page.locator(date_selector).click()
  print("click en dia de calendario ok")
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
        button = court_slot.locator(f'rect[x="{x}"].buttonHora[habilitado="true"]') 
        print("Para la pista",court_conversion[x],"hay:",button.count(),"libre")
        if button.count() > 0: # Verificamos si existe al menos un elemento
          print("LOCATOR BOTONES RESERVA POR:",x , button)
          button.first.click() 
          print("Click ok en pista", court_conversion[x],"libre")
          # CLICK EN VENTANA DE EMERGENTE CON POLITICA DE RESERVA CHECKBOX
          page.wait_for_timeout(3000)
          checkbox = page.locator('input#terminos')
          checkbox.wait_for(state='visible', timeout=3000)
          checkbox.check()
          print("Checkbox de reserva marcado")
          # CLICK EN EL BOTON 90 MINUTOS
          time_button = page.locator('.btnTiempo')
          time_button.click() 
          print("Boton del tiempo clicado")
          page.wait_for_timeout(4000)
          # NUEVA VENTA PARA CONDICIONES LEGALES CHECKBOX
          checkbox_book = page.locator('input#ctl00_ContentPlaceHolderContenido_CheckBoxAceptoCondicionesLegales')
          # NO HA FUNCONADO CON WAIT_FOR, LO DEJO CON EL TIMEOUT DE ARRIBA
          # checkbox_book.wait_for(state='visible', timeout=4000) 
          checkbox_book.check()
          print("Checkbox condiciones legales marcado")
          # INFORMAMOS DEL PRECIO
          span_price = page.locator('span#ctl00_ContentPlaceHolderContenido_LabelPrecioTotalValor')
          price = span_price.text_content()  # Extract the text content
          print(f"Precio de la pista: {price.strip()}") 
          # BOTON CARREC CONTRA SALDO
          pay_button = page.locator('input#ctl00_ContentPlaceHolderContenido_ButtonPagoSaldo')
          # COMPROBACION DE SI EL BOTON DE CARREC CONTRA SALDO ESTA HABILITADO, SI HAY SALDO
          if not pay_button.is_enabled():  # Button is disabled
              print("No tienes saldo, saliendo de la aplicación.")
              browser.close()  # Close the browser
              exit()  # Exit the script
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


        
