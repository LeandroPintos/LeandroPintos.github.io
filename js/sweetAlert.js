function enviar(){

  /*Esta funcion se encarga de simular el "required" pero aprovechando la utilidad y el diseño de Sweet Alert, consulta que ningun campo este incompleto
  y en caso de que alguno cumpla esa condicion, se muestra una alerta demostrando que no fue llenado con la informacion correcta */
  if(document.getElementById('nombre&Apellido').value == "" || document.getElementById('provincia').value == "" || document.getElementById('email-id').value == "" || document.getElementById('comentario').value == ""){
    Swal.fire({
      title: 'Datos incompletos',
      text: "Algun casillero esta incompleto y/o contiene datos erroneos",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reintentar!'
    })
  }
}