// ============================================================
// JAVASCRIPT - Página Login (login.html)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeLogin();
});

/**
 * Função de inicialização da página de login
 */
function initializeLogin() {
    console.log('Login page carregada');
    setupFormValidation();
    setupGoogleLogin();
    setupPasswordToggle();
}

/**
 * Setup validação do formulário
 */
function setupFormValidation() {
    const loginForm = document.getElementById('loginForm');

    if (!loginForm) return;

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('emailInput').value.trim();
        const password = document.getElementById('passwordInput').value;

        // Validação básica
        if (!email || !password) {
            showError('Por favor, preencha todos os campos');
            return;
        }

        if (!App.isValidEmail(email)) {
            showError('Por favor, insira um email válido');
            return;
        }

        if (password.length < 6) {
            showError('A senha deve ter pelo menos 6 caracteres');
            return;
        }

        // Se passou nas validações
        performLogin(email, password);
    });
}

/**
 * Setup Google Login
 */
function setupGoogleLogin() {
    const googleBtn = document.getElementById('googleLoginBtn');

    if (!googleBtn) return;

    googleBtn.addEventListener('click', function() {
        console.log('[Google Login] Clicado');
        // Aqui você integraria com Google OAuth
        // window.location.href = '/auth/google';
    });
}

/**
 * Setup toggle de visibilidade da senha (opcional)
 */
function setupPasswordToggle() {
    const passwordInput = document.getElementById('passwordInput');

    if (!passwordInput) return;

    // Você pode adicionar um botão de "mostrar/esconder senha" aqui
    // Por enquanto, apenas registramos o input
    passwordInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    passwordInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
}

/**
 * Validação de email
 */
/**
 * Mostrar erro
 */
function showError(message) {
    console.warn('[Form Error]', message);
    // Aqui você pode adicionar um toast ou alerta visual
    alert(message);
}

/**
 * Realizar login
 */
function performLogin(email, password) {
    console.log('[Login] Tentando fazer login com:', email);

    // Simular request ao servidor
    const loginBtn = document.querySelector('.login-button--primary');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Autenticando...';
    loginBtn.disabled = true;

    // Simulação de delay (remova em produção e use fetch real)
    setTimeout(() => {
        console.log('[Login] Sucesso (simulado)');
        
        // Em produção, você faria:
        // fetch('/api/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         window.location.href = '/principal.html';
        //     } else {
        //         showError(data.message);
        //     }
        // })
        // .catch(error => showError('Erro ao conectar ao servidor'));

        loginBtn.textContent = originalText;
        loginBtn.disabled = false;

        // Redireciona para página principal (simulado)
        window.location.href = 'principal.html';
    }, 1500);
}

/**
 * Log de eventos
 */
function logEvent(eventName, eventData = {}) {
    console.log(`[Event] ${eventName}`, eventData);
    // Aqui você pode conectar a um serviço de analytics
}
