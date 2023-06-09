function sent() {

    const user = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#number").value;

    if(user === null || user === undefined || user === '' &&
    email === null || email === undefined || email === '' &&
    number === null || number === undefined || number === '')  {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Complete form',
            showConfirmButton: false,
            timer: 1500
          })
        //alert( "Ingresar info")
    } else {
       // alert("Muchas gracias")
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Request was sent',
            showConfirmButton: false,
            timer: 1500
          })
    }
    /*

    
      */
}