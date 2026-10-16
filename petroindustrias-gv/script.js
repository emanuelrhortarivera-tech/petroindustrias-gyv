/**
 * DATOS EDITABLES DE LA EMPRESA
 * Petroindustrias G&V S.A.S.
 * Modifica estos valores para actualizar la información de la landing page.
 */
const EMPRESA_CONFIG = {
  nombre: "Petroindustrias G&V S.A.S.",
  eslogan: "[ESLOGAN PENDIENTE]",
  ciudad: "Neiva, Huila, Colombia",
  direccion: "Carrera 31 A # 23 A Sur 04, Barrio Encenillo",
  horario: "Lunes a viernes: 8:00 a. m. a 6:00 p. m. Sábados: 8:00 a. m. a 12:00 m.",
  urlGoogleMaps: "https://www.google.com/maps/search/?api=1&query=petroindustrias+gyv",
  
  // Índice del contacto principal dentro del arreglo 'contactos' (0 = Neyla Alejandra)
  contactoPrincipalIndex: 0,
  
  // Personas de contacto
  contactos: [
    {
      nombre: "Neyla Alejandra Ospina Horta",
      cargo: "[CARGO PENDIENTE]",
      telefono: "+57 321 9003124",
      numeroLimpio: "573219003124",
      mensajeWa: "Hola, quiero información sobre sus productos."
    },
    {
      nombre: "Ivan Erik Vera Romero",
      cargo: "[CARGO PENDIENTE]",
      telefono: "+57 313 3120392",
      numeroLimpio: "573133120392",
      mensajeWa: "Hola, quiero información sobre sus productos."
    },
    {
      nombre: "Loryn Carolina Ospina Horta",
      cargo: "[CARGO PENDIENTE]",
      telefono: "+57 315 2525340",
      numeroLimpio: "573152525340",
      mensajeWa: "Hola, quiero información sobre sus productos."
    }
  ],

  // 6 tarjetas de categorías/productos ofrecidos (íconos SVG inline fácilmente intercambiables)
  categorias: [
    {
      id: 1,
      nombre: "[CATEGORÍA 1]",
      descripcion: "[DESCRIPCIÓN DE LA CATEGORÍA 1 EN UNA LÍNEA]",
      // Ícono provisional: engranaje / industrial
      iconoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
    },
    {
      id: 2,
      nombre: "[CATEGORÍA 2]",
      descripcion: "[DESCRIPCIÓN DE LA CATEGORÍA 2 EN UNA LÍNEA]",
      // Ícono provisional: paquete / suministros
      iconoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
    },
    {
      id: 3,
      nombre: "[CATEGORÍA 3]",
      descripcion: "[DESCRIPCIÓN DE LA CATEGORÍA 3 EN UNA LÍNEA]",
      // Ícono provisional: herramienta / mantenimiento
      iconoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
    },
    {
      id: 4,
      nombre: "[CATEGORÍA 4]",
      descripcion: "[DESCRIPCIÓN DE LA CATEGORÍA 4 EN UNA LÍNEA]",
      // Ícono provisional: escudo / calidad y seguridad
      iconoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    },
    {
      id: 5,
      nombre: "[CATEGORÍA 5]",
      descripcion: "[DESCRIPCIÓN DE LA CATEGORÍA 5 EN UNA LÍNEA]",
      // Ícono provisional: calibración / manómetro
      iconoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`
    },
    {
      id: 6,
      nombre: "[CATEGORÍA 6]",
      descripcion: "[DESCRIPCIÓN DE LA CATEGORÍA 6 EN UNA LÍNEA]",
      // Ícono provisional: logística / distribución
      iconoSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  inicializarDatos();
  inicializarMenuMovil();
  inicializarScrollSuave();
  inicializarAnimacionesScroll();
  gestionarCargaLogos();
});

/**
 * Inyecta y actualiza los datos dinámicos desde EMPRESA_CONFIG
 */
function inicializarDatos() {
  const principal = EMPRESA_CONFIG.contactos[EMPRESA_CONFIG.contactoPrincipalIndex] || EMPRESA_CONFIG.contactos[0];
  const urlWaPrincipal = `https://wa.me/${principal.numeroLimpio}?text=${encodeURIComponent(principal.mensajeWa)}`;
  const telPrincipal = `tel:+${principal.numeroLimpio}`;

  // Actualizar enlaces del botón Hero Llamar y WhatsApp
  const heroBtnTel = document.getElementById("hero-btn-tel");
  if (heroBtnTel) {
    heroBtnTel.href = telPrincipal;
  }

  const heroBtnWa = document.getElementById("hero-btn-wa");
  if (heroBtnWa) {
    heroBtnWa.href = urlWaPrincipal;
  }

  // Actualizar botón Llamar del Header
  const headerBtnTel = document.getElementById("header-btn-tel");
  if (headerBtnTel) {
    headerBtnTel.href = telPrincipal;
  }

  // Actualizar botón WhatsApp flotante
  const floatingWa = document.getElementById("floating-wa");
  if (floatingWa) {
    floatingWa.href = urlWaPrincipal;
  }

  // Actualizar teléfono en el Footer
  const footerTel = document.getElementById("footer-tel");
  if (footerTel) {
    footerTel.href = telPrincipal;
    footerTel.textContent = principal.telefono;
  }

  // Actualizar tarjetas de datos rápidos del Hero y de Contacto
  const heroDatoDireccion = document.getElementById("hero-dato-direccion");
  if (heroDatoDireccion && EMPRESA_CONFIG.direccion) {
    heroDatoDireccion.textContent = EMPRESA_CONFIG.direccion;
  }

  const heroDatoCiudad = document.getElementById("hero-dato-ciudad");
  if (heroDatoCiudad && EMPRESA_CONFIG.ciudad) {
    heroDatoCiudad.textContent = EMPRESA_CONFIG.ciudad;
  }

  const contactoDatoDireccion = document.getElementById("contacto-dato-direccion");
  if (contactoDatoDireccion && EMPRESA_CONFIG.direccion) {
    contactoDatoDireccion.textContent = EMPRESA_CONFIG.direccion;
  }

  const contactoDatoCiudad = document.getElementById("contacto-dato-ciudad");
  if (contactoDatoCiudad && EMPRESA_CONFIG.ciudad) {
    contactoDatoCiudad.textContent = EMPRESA_CONFIG.ciudad;
  }

  const heroEnlaceUbicacion = document.getElementById("hero-enlace-ubicacion");
  if (heroEnlaceUbicacion && EMPRESA_CONFIG.urlGoogleMaps) {
    heroEnlaceUbicacion.href = EMPRESA_CONFIG.urlGoogleMaps;
  }

  const contactoEnlaceUbicacion = document.getElementById("contacto-enlace-ubicacion");
  if (contactoEnlaceUbicacion && EMPRESA_CONFIG.urlGoogleMaps) {
    contactoEnlaceUbicacion.href = EMPRESA_CONFIG.urlGoogleMaps;
  }

  const heroDatoTel = document.getElementById("hero-dato-tel");
  if (heroDatoTel) {
    heroDatoTel.href = telPrincipal;
    heroDatoTel.textContent = principal.telefono;
  }

  const heroDatoHorario = document.getElementById("hero-dato-horario");
  if (heroDatoHorario && EMPRESA_CONFIG.horario) {
    heroDatoHorario.textContent = EMPRESA_CONFIG.horario;
  }

  // Renderizar tarjetas de categorías
  const categoriasContenedor = document.getElementById("categorias-grid");
  if (categoriasContenedor && EMPRESA_CONFIG.categorias) {
    categoriasContenedor.innerHTML = EMPRESA_CONFIG.categorias.map(cat => `
      <article class="tarjeta-categoria animar-revelar" tabindex="0">
        <div class="categoria-icono-wrap">
          ${cat.iconoSvg}
        </div>
        <h3 class="categoria-titulo">${cat.nombre}</h3>
        <p class="categoria-desc">${cat.descripcion}</p>
      </article>
    `).join("");
  }

  // Renderizar tarjetas de contactos
  const contactosContenedor = document.getElementById("contactos-lista");
  if (contactosContenedor && EMPRESA_CONFIG.contactos) {
    contactosContenedor.innerHTML = EMPRESA_CONFIG.contactos.map(contacto => {
      const waUrl = `https://wa.me/${contacto.numeroLimpio}?text=${encodeURIComponent(contacto.mensajeWa)}`;
      const telUrl = `tel:+${contacto.numeroLimpio}`;
      return `
        <article class="tarjeta-contacto animar-revelar">
          <div class="contacto-info">
            <h3 class="contacto-nombre">${contacto.nombre}</h3>
            <span class="contacto-cargo badge-marcador">${contacto.cargo}</span>
            <p class="contacto-telefono">${contacto.telefono}</p>
          </div>
          <div class="contacto-acciones">
            <a href="${telUrl}" class="btn btn-outline" aria-label="Llamar a ${contacto.nombre}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Llamar</span>
            </a>
            <a href="${waUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp a ${contacto.nombre}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.807 1.554 5.36L2.308 22l4.757-1.218a9.98 9.98 0 0 0 4.966 1.309c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm5.795 14.192c-.244.686-1.42 1.31-1.954 1.378-.49.062-.977.106-2.825-.658-2.364-.977-3.882-3.376-4-3.533-.117-.156-.962-1.28-.962-2.443 0-1.162.608-1.733.824-1.97.217-.236.473-.294.63-.294.157 0 .315.002.453.008.146.007.34-.055.531.405.196.473.668 1.632.727 1.75.059.118.098.256.02.413-.078.157-.118.256-.236.393-.118.138-.247.308-.353.414-.118.118-.24.246-.103.482.137.236.61 1.008 1.309 1.631.898.8 1.656 1.047 1.892 1.165.236.118.374.098.512-.059.138-.157.59-.688.747-.924.157-.236.315-.196.531-.118.217.078 1.378.65 1.615.768.236.118.393.177.452.275.059.098.059.57-.185 1.256z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </article>
      `;
    }).join("");
  }
}

/**
 * Control del menú hamburguesa móvil accesible
 */
function inicializarMenuMovil() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("nav-menu-abierto");
    document.body.classList.toggle("no-scroll", !isExpanded);
  };

  toggleBtn.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("nav-menu-abierto")) {
        toggleMenu();
      }
    });
  });

  // Cerrar menú con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("nav-menu-abierto")) {
      toggleMenu();
      toggleBtn.focus();
    }
  });
}

/**
 * Desplazamiento suave con compensación por header fijo
 */
function inicializarScrollSuave() {
  const enlacesInternos = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector(".header-principal");
  const headerHeight = header ? header.offsetHeight : 70;

  enlacesInternos.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
      const targetId = enlace.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Asegurar accesibilidad moviendo foco al elemento de destino
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus({ preventScroll: true });
      }
    });
  });
}

/**
 * Animaciones sutiles de revelado por scroll (IntersectionObserver)
 * Respeta preferencia de reducción de movimiento
 */
function inicializarAnimacionesScroll() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const elementosParaAnimar = document.querySelectorAll(".animar-revelar");
  if (!("IntersectionObserver" in window)) {
    elementosParaAnimar.forEach(el => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  elementosParaAnimar.forEach(el => observer.observe(el));
}

/**
 * Manejo de fallback para el logo si el archivo no existiera o fallara
 */
function gestionarCargaLogos() {
  const logos = document.querySelectorAll(".img-logo");
  logos.forEach(img => {
    img.addEventListener("error", () => {
      const contenedor = img.parentElement;
      if (contenedor) {
        contenedor.innerHTML = `<span class="logo-fallback-text">Petroindustrias <strong>G&amp;V</strong></span>`;
      }
    });
  });
}
