
        // Aqui eu já começo com a biblioteca de partículas
        function createParticles() {
          const container = document.getElementById('particles');
          const particleCount = 30;
          
          for (let i = 0; i < particleCount; i++) {
              const particle = document.createElement('div');
              particle.classList.add('particle');
              
              // Posição aleatória
              const posX = Math.random() * 100;
              const posY = Math.random() * 100;
              
              // Tamanho aleatório entre 1px e 3px
              const size = Math.random() * 2 + 1;
              
              // Opacidade aleatória
              const opacity = Math.random() * 0.5 + 0.1;
              
              // Tempo de animação aleatório
              const duration = Math.random() * 20 + 10;
              const delay = Math.random() * 5;
              
              particle.style.left = `${posX}%`;
              particle.style.top = `${posY}%`;
              particle.style.width = `${size}px`;
              particle.style.height = `${size}px`;
              particle.style.opacity = opacity;
              particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
              
              container.appendChild(particle);
          }
      }

      // Animação de do exemplo da biblioteca de partículas em js
      const style = document.createElement('style');
      style.textContent = `
          @keyframes float {
              0% { transform: translate(0, 0); }
              25% { transform: translate(10px, 10px); }
              50% { transform: translate(20px, 5px); }
              75% { transform: translate(10px, 15px); }
              100% { transform: translate(0, 0); }
          }
      `;
      document.head.appendChild(style);

      document.addEventListener('DOMContentLoaded', function() {
          createParticles();
          
          const validUsers = [
              "rafael", "daniel", "aline", "dougllas", "sarah", 
              "linaldo", "kesse", "rozelia", "aldenir", "pedro", "gabriel", 
              "thiago", "thiago.correa", "guilherme", "brito", "hygor", "allex", "anita",
              "lenise", "raira", "berg", "andre", "iara", "flaira", "vitoria", "pedro.rafael"
          ];
          
          const validPassword = "123456";
          
          function performLogin() {
              const username = document.getElementById("username").value.trim();
              const password = document.getElementById("password").value.trim();
              const errorMessage = document.getElementById("error-message");
              const iframeContainer = document.getElementById("iframe-container");
              const biIframe = document.getElementById("bi-iframe");
              
              if (validUsers.includes(username.toLowerCase()) && password === validPassword) {
                  registerAccess(username);
                  
                  document.querySelector(".login-container").style.animation = "fadeOutUp 0.5s ease forwards";
                  
                  setTimeout(() => {
                      iframeContainer.style.display = "block";
                      biIframe.src = "https://app.powerbi.com/view?r=eyJrIjoiODY1YmMzNzktODgzOS00YTlkLTkzMmEtNzA3ZWIzM2E0MjZiIiwidCI6IjNlZDU4NGFmLTQ1OTMtNDNlOS04MzIwLTg3Nzg4YTczMDkxYSJ9"; 
                      document.querySelector(".login-container").style.display = "none";
                  }, 500);
                  
              } else {
                  // Animação de erro
                  errorMessage.classList.add('show');
                  document.getElementById("password").value = "";
                  

                document.querySelector(".login-container").classList.add('animate__animated', 'animate__headShake');
                  

                setTimeout(() => {
                      document.querySelector(".login-container").classList.remove('animate__animated', 'animate__headShake');
                  }, 1000);
              }
          }
          
          // Login ao clicar no botão
          document.getElementById("loginBtn").addEventListener("click", performLogin);
          
          // Login ao pressionar Enter
          document.addEventListener("keypress", function(e) {
              if (e.key === "Enter") {
                  performLogin();
              }
          });
          
          // para ver a senha ou não
          const togglePassword = document.getElementById("toggleSenha");
          const passwordInput = document.getElementById("password");
          
          togglePassword.addEventListener("click", function() {
              if (passwordInput.type === "password") {
                  passwordInput.type = "text";
                  this.textContent = "🙈";
              } else {
                  passwordInput.type = "password";
                  this.textContent = "👁️";
              }
              
              
              this.classList.add('animate__animated', 'animate__rubberBand');
              setTimeout(() => {
                  this.classList.remove('animate__animated', 'animate__rubberBand');
              }, 1000);
          });
          

          function registerAccess(username) {
              console.log(`Acesso registrado para ${username} em ${new Date().toLocaleString()}`);
              // implementação real eu usaria fetch
          }
          
          // Efeito de hover 3D no container
          const loginContainer = document.querySelector('.login-container');
          
          loginContainer.addEventListener('mousemove', (e) => {
              const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
              const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
              loginContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
          });
          
          loginContainer.addEventListener('mouseleave', () => {
              loginContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
          });
      });
