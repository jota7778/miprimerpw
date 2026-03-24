// Contador de visitas
function inicializarContador() {
    let visitas = localStorage.getItem('visitas');
    
    if (visitas === null) {
        visitas = 0;
    }
    
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitas', visitas);
    document.getElementById('contador').textContent = visitas;
}

// Reloj en tiempo real
function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

// Cambio de tema
function inicializarTema() {
    const btnTema = document.getElementById('btn-tema');
    const temaSaved = localStorage.getItem('tema');
    
    if (temaSaved === 'oscuro') {
        document.body.classList.add('modo-oscuro');
        btnTema.textContent = '☀️ Modo Claro';
    }
    
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');
        
        if (document.body.classList.contains('modo-oscuro')) {
            localStorage.setItem('tema', 'oscuro');
            btnTema.textContent = '☀️ Modo Claro';
        } else {
            localStorage.setItem('tema', 'claro');
            btnTema.textContent = '🌙 Modo Oscuro';
        }
    });
}

// Scroll suave
function inicializarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            
            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    inicializarContador();
    actualizarReloj();
    inicializarTema();
    inicializarScrollSuave();
    
    // Actualizar reloj cada segundo
    setInterval(actualizarReloj, 1000);
});
