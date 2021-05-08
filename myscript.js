
      input = Number(prompt("Только цифры"));
      countdown(input);
      function countdown(input) {
        document.getElementById(Number).innerHTML = input;
        input--;
        if (input < 0) {
          clearTimeout(timer);
        } else {
          timer = setTimeout(countdown, 1000);
        }
      }

      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

      window.onclick = function (event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
  