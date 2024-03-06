/*92. Agrega un enlace en tu página y utiliza JavaScript para mostrar un mensaje en la
consola cuando se haga clic en el enlace.*/

const enlace = document.getElementById("miEnlace")

enlace.addEventListener("click", function (){
    console.log(`Saludos! El enlace funciona\n\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠰⠀⠀⠀⠀⠁⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⣶⣶⡖⠀
⠀⠀⠀⠀⠀⠀⣀⣷⡀⠀⠀⡷⠖⡁⠀⠀⠀⠀⠀⠀⠀⡁⠀⠉⠀⠘⠉⠹⢷
⠀⠀⠀⢀⠀⠀⠙⠁⢧⡀⠀⡧⠼⠇⠀⠀⠀⠀⠀⠀⢀⣴⠀⠀⠄⠀⠀⠆⣮
⠀⠈⠐⢴⡟⢤⡀⠘⠛⠧⣀⢠⣴⢆⠀⠀⠀⠀⠀⠀⠠⠸⠡⣄⡄⠀⠀⡸⠙
⣀⣀⠀⠀⠀⠾⡁⣠⡞⠁⠈⠀⢠⠿⣆⢀⡂⢀⡠⠀⢱⠅⠀⠀⡽⠉⠑⢳⣆
⠱⢄⣀⣏⣠⡆⣸⠉⠈⠀⠀⠀⠙⠊⠈⣢⠹⠿⢯⠀⠈⠇⣦⣀⣴⠆⠀⢨⠽
⠀⠀⠀⠀⠈⠉⠙⢶⡆⠀⠀⠀⠀⠀⣰⣿⣤⣼⣿⣧⣤⡤⠜⠉⠁⠀⢀⠟⠁
⠀⠀⠀⠀⠀⠀⠀⠈⢣⣌⣼⣴⡾⠿⠿⡿⣯⠉⠁⠁⠀⠀⠀⠀⢀⣠⠟⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠢⠀⢀⣴⣿⡀⠀⠀⠀⠀⠀⣼⣿⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣷⣤⣶⣶⢂⡿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⡟⠋⠁⢸⣿⡿⠁⠻⠃⠀⠀⠀⠀⠀`);
})