/*93. Crea un botón en tu página y utiliza JavaScript para cambiar el texto de un elemento
`<p>` cuando el botón sea clicado.*/
let contador = 0;
const boton = document.getElementById("miBoton");
const art = document.getElementById("art");
const mechas = [
  `⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠤⠤⠤⠤⠠⠤⠄⠤⠠⠄⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀
⠘⢇⠊⢕⡢⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⢀⠀⠠⠤⠤⠤⠤⠤⠤⠤⠀⢀⠈⢢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⢒⠮⢋⠝
⠀⠀⠑⠢⡈⠐⠠⡑⠂⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠈⠀⣀⣀⣀⣀⣀⣀⣀⣀⡀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⡩⠔⠊⡠⠔⠁⠀
⠀⠀⠀⠀⠈⠐⢄⠀⠁⠢⢀⠁⠂⠄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠀⠀⠀⣿⣟⣿⣻⣟⣿⣻⢿⡇⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⢉⠠⠀⠁⢀⠴⠊⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⠢⡀⠀⠈⠐⠀⡀⠁⠂⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⠀⠀⠀⢿⣞⣷⢿⣞⣷⢿⣻⡇⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠉⡀⠔⠂⠀⠀⣠⠔⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⢄⠀⠀⠀⠁⠢⢄⠀⠑⠂⠄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠤⠚⠆⡇⠀⣻⣟⣾⢯⣿⢾⣻⣯⡇⠀⡀⠞⠢⠄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠉⢀⠠⠐⠁⠀⠀⢀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⣀⠀⠀⠀⠈⠐⠠⡀⠀⠑⠂⠄⡀⠀⠀⠀⠀⢀⠄⠊⠁⠀⠀⠀⡇⠀⢻⣽⣟⣾⣽⡾⣿⣽⡇⠀⡇⢰⠀⠀⠉⠒⠄⡀⠀⠀⠀⠀⣀⠤⠒⠉⠀⡀⠔⠊⠀⠀⠀⠀⡠⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢄⡀⠀⠀⠀⠀⠁⠠⢀⠀⠈⠁⠢⢤⠊⠀⠀⠀⠀⠀⢸⠀⡇⠀⠼⠿⠞⠿⠾⠽⠷⢯⠇⠀⡃⢸⠀⠀⠀⠀⠀⠈⢒⠤⠒⠉⠀⢀⠠⠀⠁⠀⠀⠀⠀⢀⠔⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠢⡀⠀⠀⠀⠀⠀⠈⠐⠄⡀⠀⠈⠐⠠⢀⠀⠀⠘⢄⠑⠀⣀⣀⣀⣀⣀⣀⣀⣀⡀⡠⠃⠜⠀⠀⠀⡀⠐⠈⠀⠀⡀⠔⠊⠁⠀⠀⠀⠀⠀⡠⠐⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢄⠀⠀⠀⠀⠀⠀⠀⠑⠢⢀⠀⠀⠈⠂⠄⡀⠁⢀⣿⣟⣿⣻⣟⣿⣻⢿⡏⢠⠀⡀⠄⠂⠁⠀⢀⠠⠐⠁⠀⠀⠀⠀⠀⠀⢀⠤⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠢⡀⠀⠀⠀⠀⠀⠀⠀⠈⠐⠄⡀⠀⠀⢹⢸⡿⣞⣷⣟⡾⣷⣻⣯⣿⢸⠁⠀⠀⡀⠄⠊⠁⠀⠀⠀⠀⠀⠀⠀⡠⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠋⠐⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠠⢸⣾⡽⣟⣷⣯⢿⣯⣷⢯⣟⣿⠠⠐⠉⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠊⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⢀⡴⠶⠷⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣻⣟⣾⡽⣟⣾⣽⣻⢯⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⠿⠶⣄⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⠒⠹⠀⡞⢡⣾⣿⣦⢩⠐⢄⠀⠀⠀⠀⠀⢠⣸⣟⣷⢯⡿⣽⢿⣽⢾⣻⣯⢿⣼⠀⠀⠀⠀⠀⠀⠠⢺⡻⣿⣿⣦⠘⡇⠸⠉⠂⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⡆⠀⢳⣄⠛⠛⣃⡎⠀⠀⡁⠤⡀⠀⠀⣾⡿⣿⣾⣟⡿⣯⣿⢾⡿⣽⣾⡿⣟⡆⠀⠀⢀⠔⡁⠀⠈⢧⡙⠛⢋⣰⠇⠀⡆⠀⠀⠈⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠒⠒⠀⠤⡇⠀⠀⠙⠛⠛⡉⠄⠂⠁⠀⠀⠈⠠⢠⣿⣽⢷⣻⢿⣻⣷⣯⣿⡿⣟⣷⢿⣻⣿⠠⠊⠀⠀⠀⠁⠂⠄⡙⠛⠛⠁⠀⠀⡧⠄⠐⠒⠀⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢹⠀⣀⣀⣀⠀⡇⠀⠀⢀⠔⠉⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⢾⣻⣯⢿⣯⢿⣽⢯⣟⣿⢾⣻⣷⣻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠑⠠⡀⠀⠀⡇⢀⣀⣀⡀⠘⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡌⡌⠀⣿⣿⣿⠀⡇⠠⣊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣽⡾⣿⣽⣻⡾⣟⡿⣾⣻⡿⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡢⠀⡇⢸⣿⣿⡇⠀⡆⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠁⠃⠀⣿⣿⣿⠄⡇⠀⠀⠈⠀⣶⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠷⣯⣷⢿⣻⣽⠗⠉⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣴⡆⠈⠁⠀⠀⡇⢸⣿⣿⡇⠀⡇⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠠⠀⠀⣤⣤⣤⠀⡇⠀⠀⠀⠀⣿⣿⣿⣿⣿⡏⠁⠒⠂⠠⠤⢀⢀⠀⠀⠈⠙⠟⠋⠀⠀⠀⣀⠠⠤⠀⠒⠂⠉⣻⣿⣿⣿⣿⡇⠀⠀⠀⠀⡇⢠⣤⣤⡄⠀⢠⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢰⠀⠀⣿⣿⣿⠀⣇⠀⠀⠀⠀⣿⣯⡿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⢸⣿⣶⣶⣶⣶⣾⣿⠁⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⡇⢸⣿⣿⡇⠀⠰⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠘⠀⠀⠿⠿⠿⠀⡏⢆⠀⠀⠀⠑⠜⢿⣷⣻⢿⣿⣦⣄⣀⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣤⣄⣀⣤⣶⣿⣿⣻⣿⠟⡁⠁⠀⠀⠀⠌⡇⠘⠿⠿⠇⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⡀⠀⠀⣶⣶⣶⠀⡇⠀⢂⠀⠀⠀⠈⢀⠙⢿⣯⣟⣿⣻⣟⣿⢿⣿⣿⡿⠿⠛⠉⠛⠿⣿⣿⡿⣿⢿⣻⣟⣿⣽⣾⠟⢁⠎⠀⠀⠀⠀⠌⠀⡇⢰⣶⣶⡆⠀⠀⡇⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⡇⠀⠀⣿⣿⣿⠀⡇⠀⠀⢂⠀⠀⠀⠀⣡⠀⡏⠉⠉⠉⠉⠉⠛⠋⠁⢀⣠⣴⣶⣤⣀⠀⠉⠛⠉⠉⠉⠉⠉⠉⡏⢠⡂⠀⠀⠀⢀⠎⠀⠀⡇⢸⣿⣿⡇⠀⠀⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡅⡇⠀⠀⠛⠛⠛⠀⡇⠀⠀⠀⡖⠀⠉⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⣉⣦⡈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⡆⠀⠀⠉⠐⡆⠀⠀⠀⡃⠈⠛⠛⣃⠀⠀⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⡇⠀⠀⣿⣿⣿⠀⡇⠀⠀⠀⡇⠀⠀⠀⠀⠆⢰⠀⠀⠀⠀⠀⠀⠀⠀⠈⠟⠋⠉⠙⠟⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⡇⠀⠀⠀⠀⡇⠀⠀⠀⡇⢠⣿⣿⡇⠀⠀⡇⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⡇⠀⠀⣿⣿⣿⠀⡇⠀⠀⠀⡇⠀⠀⠀⠀⠆⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⡇⠀⠀⠀⠀⡇⠀⠀⠀⠂⠸⣿⣿⡇⠀⠀⡇⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢇⡃⠀⠀⣉⣉⡉⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⡇⠀⡆⠀⠀⠀⠀⠀⠀⢠⣶⣿⡿⣿⢿⣷⣦⡀⠀⠀⠀⠀⠀⠀⡌⠀⡇⠀⠀⠀⠀⡇⠀⠀⠀⠅⠈⣉⣉⡉⠀⠀⣇⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⣿⣿⣿⠀⡇⠀⠀⠀⡇⠀⠀⠀⠀⡷⡀⠘⡄⠀⠀⠀⠀⠀⣾⣟⣾⡽⣟⡿⣾⣽⡇⠀⠀⠀⠀⠀⠐⠀⡰⡇⠀⠀⠀⠀⡇⠀⠀⠀⡂⢸⣿⣿⡇⠀⠀⡽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⠀⠀⣿⣿⣿⠀⠃⠀⠀⠀⡇⠀⠀⠀⠀⡿⠈⡄⠱⡀⠀⠀⠀⠀⣿⣻⣞⣿⣻⣽⣷⣻⡇⠀⠀⠀⠀⠠⠁⡐⠀⡇⠀⠀⠀⠀⡇⠀⠀⠀⡅⢸⣿⣿⡇⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⠛⠛⠻⠀⠂⠀⠀⠀⡇⠀⠀⠀⠀⡗⠀⠑⡀⢣⠀⠀⠀⠀⣿⣟⡿⣽⣻⢯⣟⡿⡇⠀⠀⠀⢀⠂⡰⠁⢰⡇⠀⠀⠀⠀⡇⠀⠀⠀⡅⠘⠛⠛⠓⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠀⠐⡇⠀⠀⠀⡇⠀⠀⠀⠀⣇⠦⠤⠈⢄⠣⠀⠀⠀⣿⣯⣿⣻⣽⣟⣯⣿⡇⠀⠀⢀⢂⡔⠀⠤⢮⡇⠀⠀⠀⠀⡇⠀⠀⠀⡗⠂⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⠀⣀⠤⠓⠒⠒⠂⠀⠃⠀⠀⠀⠈⠑⠵⣀⢀⣿⣻⣽⢿⣻⣟⣯⡿⣇⠀⣠⠅⠊⠀⠀⠀⠀⠉⠐⠒⠒⠒⠣⠄⣀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣯⣟⣯⡿⣞⣯⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠿⢾⢯⡟⡿⣳⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
  `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠉⠉⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣈⠙⠛⠿⣿⣿⣿⣿⣿⣿⡇⣸⣿⣿⣷⠈⣿⣿⣿⣿⣿⣿⡿⠟⠋⢉⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⠀⠈⠙⠻⠿⡿⠁⠛⠛⡟⠛⠂⠻⡿⠿⠛⠉⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡦⢀⠀⠀⠀⠙⡀⠀⡇⠀⠨⠁⠀⠀⢀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠁⠢⢀⠄⠀⠐⠇⠀⠀⣀⠀⠂⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⡶⠀⡀⠄⠀⠀⠀⠀⡇⠀⠀⠁⠀⠀⠀⠰⡆⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠈⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢛⣓⠒⡖⠂⣤⡜⠛⠒⢒⣺⣿⣿⣿⡒⠒⠚⠛⣤⠐⠚⠒⢒⡛⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠘⠛⠀⠃⡀⠻⢿⣿⣶⡿⠟⠋⡟⠛⢿⣷⣾⣿⠟⠀⠠⠀⠘⠛⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠘⠛⠀⠀⠀⠀⠀⡏⠉⠀⠀⢈⣍⠀⠀⠈⠉⡇⠀⡆⠀⠀⠘⠛⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠿⠄⠀⠀⠀⠀⠁⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⡇⠀⠀⠾⠃⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⡇⠀⠀⡆⠀⠀⠀⠀⢀⠋⠉⠆⠀⠀⠀⠀⠀⡇⠀⠀⣷⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⢠⡄⠀⠀⡇⠀⣄⡀⠀⢸⠀⠀⢼⠀⠀⣀⠀⠀⠇⠀⠀⣤⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠠⠬⠥⠀⡀⠃⢀⣿⣿⣶⡇⠀⠀⠈⣶⣾⣿⣄⠀⠄⠀⠠⠭⠤⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣠⣶⣤⣾⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣦⣼⣤⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`,
  `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⠀⠀⠀⠀⠀⠀⡘⡽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⢰⢹⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⢄⡀⠀⢠⣡⡤⠐⢤⠤⣠⠃⡞⠀⠀⠀⠀⡴⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠴⣷⣤⣿⣿⡿⢶⣌⣳⠏⢰⣧⠀⠀⠀⣰⠳⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢞⣣⣸⡿⣿⣏⣐⡿⠯⣽⡶⣽⠻⡆⠀⢠⠃⣸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢤⢀⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠢⣽⣿⣅⡡⣴⠟⣼⡿⠃⣠⠟⢀⡏⢠⠇⠀⠀⠀⠀⠀⠀⡰⠊⣹⣾⠀⢸⣼⡇⣧⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⢻⣯⡋⣹⣁⣴⣋⣠⣞⠋⢀⡼⠉⡿⠀⠀⠀⠀⠀⠀⣰⠁⠀⡇⡘⢀⣼⣿⣇⢉⠟⣦⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠠⠤⣤⠄⣀⠀⠀⣱⣬⣿⣿⣿⣟⣀⣼⣿⣿⣿⣿⣷⣿⡿⠔⠒⢒⠲⢄⣰⠇⠀⠀⡇⠇⡘⣾⡁⣿⣾⢸⠸⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣟⡻⢧⢤⡋⠀⣩⣭⣟⣽⣿⣸⣿⣿⠓⣹⢿⣿⣷⣻⣽⣛⣿⢸⣀⣀⠠⢄⣳⠶⠟⠀⠀⢸⢀⠁⡗⣿⣿⣿⣿⡀⠀⡷⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⠀⣂⣼⣈⣸⣿⣿⣿⣵⣾⠟⢉⣽⣵⣿⣿⣿⠟⣫⣵⡿⣿⣟⡉⠀⣾⠛⡅⠀⢀⠁⠀⠀⢸⠊⠀⠳⣹⣿⣿⡿⣇⠀⢻⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⣟⣆⣸⣿⣿⣿⠋⢹⠓⣊⣿⣿⣿⣿⡭⢶⣿⣿⣻⣽⣿⣦⡼⠋⠉⡹⢲⢢⠎⠀⠀⠀⡀⢠⣾⣿⠟⠛⠿⣷⣈⡇⢸⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣿⣧⣄⣸⣿⣿⣿⣿⣿⣛⣿⣿⣿⣿⠿⣿⡿⣧⣤⣿⣻⣿⣧⡤⠜⢃⣿⣿⣤⠤⣧⡜⠣⡘⠿⡿⠀⠘⣸⣿⣿⣇⠘⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⢩⣵⠬⣛⡇⢈⣿⣿⢼⣰⠯⢿⢾⣍⣀⣀⣹⣝⣿⣽⡷⣿⣻⣿⡿⢻⣿⣟⣇⠹⡿⣿⣿⣆⠑⣀⣹⠲⣾⢿⡟⡽⢉⣤⢧⣄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣷⡏⠛⠀⢨⣿⠛⢿⣿⣧⣆⣠⠾⣛⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣿⡀⣯⠙⢳⣉⣍⣿⣇⡞⠈⡀⠙⢹⣛⢀⡞⠹⣼⢰
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢀⣷⡽⣇⡴⠿⡿⠁⠀⠀⠙⢿⡘⡅⠀⢉⣬⠏⠉⣺⣿⣽⣿⡟⠋⠁⠀⠀⠀⢻⡹⣷⡈⠀⢿⣿⣿⡿⠀⠀⡇⠀⢸⢸⢸⠀⠰⣿⣘
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡶⣟⣿⡖⠉⠻⣿⣿⣾⡶⠃⠀⠀⠀⢠⢾⢾⣧⢖⡫⠷⠖⣾⣿⣿⣿⠿⣓⢲⠀⠀⠀⠀⠀⢱⢾⣿⣆⢸⣿⣿⡇⠀⠀⠣⠤⡼⣸⡏⣠⣿⡻⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣾⣟⡿⡽⠑⠔⢒⣽⣻⣿⠃⠀⠀⠀⣀⠎⣸⣾⡋⢋⣠⠜⣡⣾⣿⢻⣿⠃⠘⠙⠣⢄⠀⠀⠀⢠⡿⠋⣙⣮⣿⣷⣧⡔⠆⠀⠀⠀⣿⣷⣿⢯⡿⠋
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⣼⣷⢯⣿⡇⠈⣴⠋⢻⡿⠋⠀⢀⣔⣈⣤⠾⣿⣿⣴⣿⣩⡶⠿⣽⣾⣿⠷⣦⣄⣀⣠⠊⢱⣆⠀⡟⢲⠞⠁⠀⠁⡀⣿⡆⠀⠀⠀⣼⣿⠉⠿⣿⣆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⣿⣟⣿⣿⣷⣼⠛⢙⡟⠀⠀⠠⢫⣿⡿⢻⠀⠈⡟⠨⠍⠏⠀⠈⢹⡿⠋⣰⣿⣿⠃⢀⠔⡿⣿⡄⡗⢸⡄⠀⠙⡆⠁⢸⣱⠀⠀⡜⣼⡿⣄⡄⢸⡟⠀
⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⡿⣽⣿⣿⣟⣹⣿⡿⠀⠀⠀⡟⣿⣿⠓⢚⠀⢀⣝⠀⡦⣦⡀⠀⡼⡏⠀⣿⣿⡇⠈⠀⡆⢻⣾⡇⡽⠐⡆⠀⠀⡇⠀⠸⣏⣑⣾⣶⡿⢠⡏⠀⣼⡇⠀
⠀⠀⠀⠀⣠⠴⠿⣟⣾⣿⣽⣿⣿⣼⡇⣿⣿⣷⣶⡆⠀⡇⣿⣿⡄⠀⡦⠊⢾⡄⢱⡿⠈⢲⣧⣇⠀⣿⣿⣇⠀⠀⡇⢸⢹⣧⣟⠐⣇⠀⠀⣇⠀⠀⠏⠛⠻⣞⡇⢸⠀⢠⣿⠀⠀
⠀⠀⠀⣸⢉⡿⣿⣿⣿⣿⣾⢷⣿⣿⣯⣿⣿⢟⣿⠇⠀⣶⢸⣿⡇⠀⢹⡄⠈⡾⣮⣷⠀⣼⢿⣿⠀⢸⣿⣿⠀⢀⣻⢺⡿⣿⡿⠀⡇⠑⡄⢋⢢⠀⠇⠀⠀⣼⣠⡟⢀⣼⡏⠀⠀
⠀⠀⠀⠘⠬⣛⣷⣻⣿⢻⣟⣿⣟⡁⣉⣩⣿⣾⡏⠀⢸⢻⡆⣿⣷⠀⢸⡿⠒⢷⠈⣹⢶⡟⢺⡇⣧⠘⣿⣿⡄⡸⣅⠀⢻⣿⡀⢢⠟⠀⠈⣳⢨⠀⢸⠀⢰⣿⢸⣣⠎⣿⣷⠀⠀
⠀⠀⠀⠀⣀⣴⢿⣿⡟⢻⣿⣿⣿⣿⡿⠟⠟⠋⠀⠀⣾⠘⢿⣿⣿⣦⠟⣿⣄⠈⠳⠟⠰⡇⢸⣿⠸⣦⣿⣿⡧⢣⣾⣦⠈⣻⡕⡇⠀⠀⡎⠀⢹⠀⠀⢢⣏⣯⣾⡅⠘⣿⡏⠀⠀
⠀⠀⠀⢸⣿⢧⣿⣿⣿⡾⣟⣿⣿⣿⡄⠀⠀⠀⠀⠠⡏⠀⠀⠉⠉⡎⠀⠁⢸⠄⢲⠀⣸⠇⠀⡏⠀⠀⠀⠀⠀⢸⠀⢸⠀⢹⡇⡇⠀⠀⡇⠀⢸⣧⠚⠙⣶⡿⣽⠃⠀⣿⠃⠀⠀
⠀⠀⢀⣾⡿⢋⠇⢠⣾⣿⣽⣟⣾⡽⠃⠀⠀⠀⠀⠠⡇⠀⠀⠀⢠⠃⠀⠐⣼⠀⢨⠟⣽⠀⠀⡇⠀⠀⠀⠀⠀⡝⠠⢸⠀⢺⣇⢧⠀⠀⡇⠘⠟⠳⣆⣴⠾⣯⡽⠀⢸⡟⠀⠀⠀
⠀⠀⣸⣿⠀⡞⣰⣿⣿⣿⣾⡟⠉⠀⠀⠀⠀⠀⠀⠀⢃⠀⠀⠀⠸⠀⢀⡴⣏⢀⡏⢠⠇⠀⠀⢳⡀⠀⠀⠀⠀⡇⣰⠋⣇⣟⣧⢸⠀⠀⡇⠀⠀⠀⣼⠁⠀⠀⡇⠀⣿⠇⠀⠀⠀
⠀⠀⣿⣇⣤⣷⣿⣿⣿⣟⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⢠⡏⠀⣽⣾⣅⡾⠁⠀⠀⠘⣧⠀⠀⠀⠀⣧⡏⢀⣿⣿⣷⢸⠀⠀⡇⠀⠀⢀⣿⡀⠀⢸⠃⢸⡿⠀⠀⠀⠀
⠀⠀⢻⡿⢁⣿⣿⡾⣷⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣽⣏⣯⡿⠀⣾⠋⢉⢿⡆⠀⠀⠀⠀⢫⣣⣶⣶⣶⣼⠃⣼⡇⠸⣿⢸⠀⠀⡇⢀⡴⢋⡇⢳⡀⡿⠀⣼⠇⠀⠀⠀⠀
⠀⠀⣼⠃⣾⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠿⣿⡿⣥⠞⢹⠀⢸⣈⣷⠀⠀⠀⠀⠀⠣⣿⣿⡿⠿⡼⠁⢧⠀⢿⡜⡆⠀⡷⠋⠀⣸⣇⠀⢹⡇⢰⡿⠀⠀⠀⠀⠀
⠀⢠⡇⣸⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣘⣣⣈⣢⣌⣳⣤⣿⡁⠀⠀⠀⠀⠀⠀⠈⠹⣿⡐⠒⠁⣸⣷⢻⣇⣧⠈⡇⣠⣾⠿⣿⣆⢸⠳⣼⡇⠀⠀⠀⠀⠀
⠀⡾⢰⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡁⠒⠒⠒⠉⠿⢷⣣⣃⢹⠀⠀⠀⠀⠀⠀⠀⢸⡋⠍⠨⠥⢞⢻⣬⣿⡇⢀⡟⠁⣾⢸⣿⠈⣿⠀⣿⠀⠀⠀⠀⠀⠀
⣾⣡⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠀⠀⢸⠀⠀⣼⠀⠈⠻⡆⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⠀⢸⠀⣼⢻⡷⠁⣏⠀⣿⢸⡏⢰⡏⣻⡇⠀⠀⠀⠀⠀⠀
⠉⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣦⣤⣤⡇⣼⠁⢠⠀⠀⣿⠀⠀⠀⠀⠀⠀⠈⡆⢢⠀⠀⢨⣤⡇⢸⢻⠀⡏⠀⣿⣿⡇⢸⠀⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⢻⣀⠀⠀⣸⠋⠀⠀⠀⠀⠀⠀⠀⢃⠀⠟⢿⣿⡿⣇⢸⣿⠀⡝⠀⣿⣿⠃⣏⢸⡏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⣿⠊⠌⠙⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠈⠦⡸⢼⢱⣧⠚⣶⡟⣄⡹⢸⢳⣿⢀⡇⣼⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⣿⠈⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠈⣾⣼⠀⣿⣇⠀⣷⣼⢸⣟⣼⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢶⣤⣷⣿⠀⣠⣼⣻⡹⠉⢧⠀⠀⠀⠀⠀⠀⠀⠀⢘⡆⢻⣏⡆⣿⡟⣆⡽⠀⠈⢹⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣜⠋⠉⣉⠛⠯⠜⠁⠀⣿⠇⣠⣾⡇⠀⠀⠀⠀⠀⠀⡿⣿⣷⣘⠿⠧⢿⣷⠟⡇⠀⠀⠻⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⢈⢶⣦⠀⢸⡟⣴⣷⡀⡇⠀⠀⠀⠀⠀⠀⡇⠹⡫⠀⠀⠐⠒⠫⣄⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣶⢗⠒⢤⡪⡈⠉⠳⣾⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⣧⠾⠀⠀⠀⣀⠀⣅⠚⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠖⠉⢀⢀⣤⣿⣮⣶⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢹⠀⣠⣾⠟⢩⠘⣷⣄⢺⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⣤⣾⣿⣿⣿⣿⣿⣿⠟⠁⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⡿⣽⠀⣸⡀⣿⣿⣏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣾⢳⣴⣿⣿⣿⡿⠿⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣽⡟⢀⡙⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣙⡟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣧⣷⣎⣹⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
];

boton.addEventListener("click", function () {
  console.log("hiciste click");
  if (contador < mechas.length) {
    art.innerText = mechas[contador];
    contador++;
  } else {
    contador = 0;
    art.innerText = mechas[contador];
    contador++;

  }
});
