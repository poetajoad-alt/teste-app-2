/* ============================================================
   REGISTRATION PAGE - FORM VALIDATION & INTERACTIONS
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  initializeSignup();
});

function initializeSignup() {
  setupFormValidation();
  setupGoogleSignup();
  setupFieldListeners();
}

/* ============================================================
   FORM VALIDATION
   ============================================================ */

function setupFormValidation() {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();
    const termsCheckbox = document.getElementById('termsCheckbox').checked;

    // Reset errors
    clearErrors();

    // Validate inputs
    let isValid = true;

    if (!name || name.length < 3) {
      showError('nameInput', 'Nome deve ter no mínimo 3 caracteres');
      isValid = false;
    }

    if (!isValidEmail(email)) {
      showError('emailInput', 'Por favor, insira um e-mail válido');
      isValid = false;
    }

    if (!isValidPhone(phone)) {
      showError('phoneInput', 'Por favor, insira um celular válido');
      isValid = false;
    }

    if (!termsCheckbox) {
      showError('termsCheckbox', 'Você deve concordar com os Termos e Condições');
      isValid = false;
    }

    if (isValid) {
      performSignup(name, email, phone);
    }
  });
}

/* ============================================================
   FIELD LISTENERS
   ============================================================ */

function setupFieldListeners() {
  const inputs = document.querySelectorAll('.signup-input');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      clearError(this.id);
    });

    input.addEventListener('blur', function() {
      validateField(this);
    });
  });

  const checkbox = document.getElementById('termsCheckbox');
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      clearError('termsCheckbox');
    }
  });
}

/* ============================================================
   FIELD VALIDATION
   ============================================================ */

function validateField(field) {
  const value = field.value.trim();

  if (field.id === 'nameInput') {
    if (value && value.length < 3) {
      showError('nameInput', 'Nome deve ter no mínimo 3 caracteres');
    }
  } else if (field.id === 'emailInput') {
    if (value && !isValidEmail(value)) {
      showError('emailInput', 'E-mail inválido');
    }
  } else if (field.id === 'phoneInput') {
    if (value && !isValidPhone(value)) {
      showError('phoneInput', 'Celular inválido');
    }
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Remove non-digits
  const digits = phone.replace(/\D/g, '');
  // Validate Brazilian phone format (11 digits)
  return digits.length >= 10 && digits.length <= 11;
}

/* ============================================================
   ERROR HANDLING
   ============================================================ */

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  
  if (!field) return;

  field.classList.add('error');
  
  // Create error message element if not exists
  let errorEl = field.parentElement?.querySelector('.error-message');
  
  if (!errorEl) {
    errorEl = document.createElement('p');
    errorEl.className = 'error-message';
    field.parentElement?.appendChild(errorEl);
  }
  
  errorEl.textContent = message;
  errorEl.style.display = 'block';
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  
  if (!field) return;

  field.classList.remove('error');
  
  const errorEl = field.parentElement?.querySelector('.error-message');
  if (errorEl) {
    errorEl.style.display = 'none';
  }
}

function clearErrors() {
  document.querySelectorAll('.signup-input, .signup-checkbox').forEach(field => {
    field.classList.remove('error');
  });
  
  document.querySelectorAll('.error-message').forEach(el => {
    el.style.display = 'none';
  });
}

/* ============================================================
   FORM SUBMISSION
   ============================================================ */

function performSignup(name, email, phone) {
  const submitBtn = document.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Cadastrando...';

  // Simulate server delay
  setTimeout(() => {
    console.log('Signup data:', { name, email, phone });
    logEvent('signup_attempt', {
      method: 'email',
      email_domain: email.split('@')[1]
    });

    // TODO: Integrate with Firebase Auth
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(userCredential => { ... })
    //   .catch(error => { ... });

    // Success message
    alert(`Bem-vindo, ${name}! Cadastro realizado com sucesso.`);
    
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    
    // Reset form
    document.getElementById('signupForm').reset();
    
    // Redirect to principal page after success
    window.location.href = 'principal.html';
  }, 1500);
}

/* ============================================================
   GOOGLE SIGNUP
   ============================================================ */

function setupGoogleSignup() {
  const googleBtn = document.getElementById('googleSignupBtn');
  
  googleBtn.addEventListener('click', function() {
    logEvent('signup_attempt', { method: 'google' });
    
    console.log('Google signup clicked');
    
    // TODO: Integrate with Firebase Google Auth
    // const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider)
    //   .then(result => {
    //     const user = result.user;
    //     logEvent('signup_success', { method: 'google', user_id: user.uid });
    //     window.location.href = 'principal.html';
    //   })
    //   .catch(error => {
    //     logEvent('signup_error', { method: 'google', error: error.message });
    //     showError('googleSignupBtn', 'Erro ao fazer login com Google');
    //   });
  });
}

/* ============================================================
   ANALYTICS
   ============================================================ */

function logEvent(eventName, eventData = {}) {
  const data = {
    page: 'signup',
    timestamp: new Date().toISOString(),
    ...eventData
  };
  
  console.log(`[Analytics] ${eventName}:`, data);
  
  // TODO: Integrate with Firebase Analytics
  // firebase.analytics().logEvent(eventName, data);
}

/* ============================================================
   UTILITIES
   ============================================================ */

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
