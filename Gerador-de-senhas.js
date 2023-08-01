 const btnGerador = document.querySelector('#btnGerador')
 btnGerador.addEventListener('click', function () {




     const caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W',
         'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v',
         'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*'
     ]
     let senhas = ''
     const Geradorsenha = () => {
         for (let i = 1; i <= 20; i++) {

             senhas = senhas + caracteres[Math.floor(Math.random() * caracteres.length)]

         }

         console.log(senhas)
         document.querySelector('#quadro-senha').textContent = senhas
     }
     Geradorsenha()

 })