import os
import shutil
from tkinter import Tk, filedialog


ventana= Tk()
ventana.withdraw()

ruta= filedialog.askdirectory(title="elija tu carpeta para ordenar")

extensintes_de_los_archivos={
    ".jpj":"imagenes",
    ".jpg":"imagenes",
    ".docx":"imagenes",
    ".txt": "imagenes",
    ".pdf": "imagenes",
    ".mp3": "imagenes",
    ".mp4": "imagenes"
    
}
for carpetas in set(extensintes_de_los_archivos.values()):
    
    rutas_de_la_carpetas=os.path.join(ruta,carpetas)
    
    if not os.path.exists(rutas_de_la_carpetas):
        os.makedirs(rutas_de_la_carpetas)
        
        
for archivos_de_la_carpetas in os.listdir(ruta):
    
    ruta_de_los_arccivos=os.path.join(ruta,archivos_de_la_carpetas)
    
    if os.path.isfile(ruta_de_los_arccivos):
        
        nombres,exten=os.path.splitext(archivos_de_la_carpetas)
        exten=exten.lower()
        if exten in extensintes_de_los_archivos:
            destinos_de_rutas=os.path.join(ruta,extensintes_de_los_archivos[exten,archivos_de_la_carpetas])
            
            shutil.move(ruta_de_los_arccivos,destinos_de_rutas)
    
        
        
