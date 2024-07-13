$(function () {
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var boton = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(boton).offset().top,
        },
        800,
        function () {
          window.location.hash = boton;
        }
      );
    }
  });

/* EVÍA COOREO POR LA SECCION CONTATO*/
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(document).ready(function () {
    $("#AlertaEnviarCorreo").click(function () {
      alert("El correo fue enviado correctamente...");
    });
  });

/* Cambia colores del texto en titulos:  QUIENES SOMOS, DESTACADOS, CONTACTO*/
  document.getElementById("ponerEnRojo")
    .addEventListener("dblclick", function () {
      document.getElementById("ponerEnRojo").style.color = "red";
    });

  document.getElementById("ponerEnVerde")
    .addEventListener("dblclick", function () {
      document.getElementById("ponerEnVerde").style.color = "green";
    });

  document.getElementById("ponerEnAmarillo")
    .addEventListener("dblclick", function () {
      document.getElementById("ponerEnAmarillo").style.color = "yellow";
    });


/*Borrar bloque "DESTACADOS" al pinchar en imagenes o texto */
  let x = $(document);
  x.ready(inicializarEventos);

  function inicializarEventos() {
    let x = $(
      "#borrar10,#borrar11,#borrar12,#borrar20,#borrar21,#borrar22,#borrar30,#borrar31,#borrar32,#borrar40,#borrar41,#borrar42"
    );
    x.click(ocultarMostrarRecuadro);
  }

  function ocultarMostrarRecuadro() {
    let x = $("#mostrar");
    x.toggle("slow");
  }
});