// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', currentTheme);

// Update theme icon
function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// ==================== Sidebar Toggle ====================
const sidebarToggle = document.getElementById('sidebarToggle');
let sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';

// Apply saved state
if (sidebarCollapsed) {
    document.body.classList.add('sidebar-collapsed');
}

sidebarToggle.addEventListener('click', () => {
    sidebarCollapsed = !sidebarCollapsed;
    document.body.classList.toggle('sidebar-collapsed');
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
});

// ==================== Hide Names Toggle ====================
const hideNamesToggle = document.getElementById('hideNamesToggle');
let hideNames = localStorage.getItem('hideNames') === 'true';

// Apply saved state
if (hideNames) {
    hideNamesToggle.checked = true;
}

hideNamesToggle.addEventListener('change', () => {
    hideNames = hideNamesToggle.checked;
    localStorage.setItem('hideNames', hideNames);

    // Refresh all diagrams
    window.reloadAllDiagrams();
});

// ==================== Mobile Menu Toggle ====================
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (sidebar.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    }
});

// ==================== Navigation ====================
const navLinks = document.querySelectorAll('.nav-link');

// Update active navigation link based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll to section
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 90;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        }
    });
});

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// ==================== Search Functionality ====================
const searchInput = document.getElementById('searchInput');
const sections = document.querySelectorAll('.section');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm === '') {
        // Show all sections
        sections.forEach(section => {
            section.style.display = '';
        });
        return;
    }

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            section.style.display = '';

            // Highlight search terms
            highlightText(section, searchTerm);
        } else {
            section.style.display = 'none';
        }
    });
});

function highlightText(element, searchTerm) {
    // Remove previous highlights
    element.querySelectorAll('.highlight').forEach(span => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize();
    });

    if (!searchTerm) return;

    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    const textNodes = [];
    while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.nodeValue.trim() !== '') {
            textNodes.push(node);
        }
    }

    textNodes.forEach(node => {
        const text = node.nodeValue;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const match = text.match(regex);

        if (match) {
            const fragment = document.createDocumentFragment();
            let lastIndex = 0;

            text.replace(regex, (match, p1, offset) => {
                // Add text before match
                if (offset > lastIndex) {
                    fragment.appendChild(
                        document.createTextNode(text.slice(lastIndex, offset))
                    );
                }

                // Add highlighted match
                const span = document.createElement('span');
                span.className = 'highlight';
                span.style.backgroundColor = 'rgba(251, 191, 36, 0.4)';
                span.style.padding = '2px 4px';
                span.style.borderRadius = '3px';
                span.textContent = match;
                fragment.appendChild(span);

                lastIndex = offset + match.length;
            });

            // Add remaining text
            if (lastIndex < text.length) {
                fragment.appendChild(
                    document.createTextNode(text.slice(lastIndex))
                );
            }

            node.parentNode.replaceChild(fragment, node);
        }
    });
}

// ==================== Diagram Expansion ====================
function expandDiagram(diagramId) {
    const diagram = document.getElementById(diagramId);
    const button = diagram.previousElementSibling.querySelector('.btn-expand');

    if (diagram.classList.contains('hidden')) {
        diagram.classList.remove('hidden');
        button.textContent = 'Ocultar Diagrama';
    } else {
        diagram.classList.add('hidden');
        button.textContent = 'Ver Diagrama';
    }
}

// Make function available globally
window.expandDiagram = expandDiagram;

// ==================== Scroll Progress Indicator ====================
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 70px;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #06b6d4);
    z-index: 101;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = (window.scrollY / documentHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// ==================== Back to Top Button ====================
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
    z-index: 99;
`;

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'scale(1.1)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'scale(1)';
});

// ==================== Table of Contents Auto-collapse ====================
const subMenus = document.querySelectorAll('.sub-menu');

// Initially collapse all submenus except the first one
subMenus.forEach((menu, index) => {
    if (index > 0) {
        menu.style.display = 'none';
    }
});

// Add click handlers to parent menu items with submenus
document.querySelectorAll('.nav-menu > ul > li').forEach(li => {
    const subMenu = li.querySelector('.sub-menu');
    if (subMenu) {
        const parentLink = li.querySelector('.nav-link');

        parentLink.addEventListener('click', (e) => {
            // Don't prevent default if it's a direct navigation
            const hasSubMenu = subMenu.children.length > 0;
            if (hasSubMenu) {
                e.preventDefault();

                // Toggle submenu
                if (subMenu.style.display === 'none') {
                    subMenu.style.display = 'block';
                    parentLink.style.fontWeight = '600';
                } else {
                    subMenu.style.display = 'none';
                    parentLink.style.fontWeight = '500';
                }
            }
        });
    }
});

// ==================== Copy Code to Clipboard ====================
document.querySelectorAll('code').forEach(codeBlock => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';

    const copyButton = document.createElement('button');
    copyButton.textContent = '📋 Copiar';
    copyButton.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem 0.5rem;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s;
    `;

    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);
    wrapper.appendChild(copyButton);

    wrapper.addEventListener('mouseenter', () => {
        copyButton.style.opacity = '1';
    });

    wrapper.addEventListener('mouseleave', () => {
        copyButton.style.opacity = '0';
    });

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.textContent);
        copyButton.textContent = '✓ Copiado';
        setTimeout(() => {
            copyButton.textContent = '📋 Copiar';
        }, 2000);
    });
});

// ==================== Print Functionality ====================
function printDocument() {
    window.print();
}

// Add print button to header if needed
const printButton = document.createElement('button');
printButton.textContent = '🖨️';
printButton.title = 'Imprimir documento';
printButton.className = 'btn-theme';
printButton.addEventListener('click', printDocument);

document.querySelector('.header-actions').insertBefore(
    printButton,
    document.getElementById('themeToggle')
);

// ==================== Diagram Zoom & Fullscreen ====================
// Agregar controles a cada diagrama después de que se carguen
window.addEventListener('load', () => {
    const diagrams = document.querySelectorAll('.diagram-container');

    diagrams.forEach(diagram => {
        const header = diagram.querySelector('.diagram-header');
        if (!header) return;

        // Crear contenedor de controles
        const controls = document.createElement('div');
        controls.className = 'diagram-controls';

        // Botón de pantalla completa
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.className = 'btn-fullscreen';
        fullscreenBtn.innerHTML = '🔍 Pantalla completa';
        fullscreenBtn.onclick = () => toggleFullscreen(diagram);

        // Botón de zoom in
        const zoomInBtn = document.createElement('button');
        zoomInBtn.className = 'btn-zoom-in';
        zoomInBtn.innerHTML = '🔎+';
        zoomInBtn.onclick = () => zoomDiagram(diagram, 'in');

        // Botón de zoom out
        const zoomOutBtn = document.createElement('button');
        zoomOutBtn.className = 'btn-zoom-out';
        zoomOutBtn.innerHTML = '🔎−';
        zoomOutBtn.onclick = () => zoomDiagram(diagram, 'out');

        controls.appendChild(zoomInBtn);
        controls.appendChild(zoomOutBtn);
        controls.appendChild(fullscreenBtn);

        // Reemplazar botón "Ver Diagrama" por controles
        const oldButton = header.querySelector('.btn-expand');
        if (oldButton) {
            const newExpandBtn = document.createElement('button');
            newExpandBtn.className = 'btn-expand';
            newExpandBtn.textContent = oldButton.textContent;
            newExpandBtn.onclick = oldButton.onclick;

            header.innerHTML = '';
            header.appendChild(document.createElement('h5')).textContent = diagram.querySelector('.diagram-header h5')?.textContent || 'Diagrama';

            const actionsDiv = document.createElement('div');
            actionsDiv.style.display = 'flex';
            actionsDiv.style.gap = '0.5rem';
            actionsDiv.appendChild(controls);
            actionsDiv.appendChild(newExpandBtn);

            header.appendChild(actionsDiv);
        }
    });
});

function toggleFullscreen(diagram) {
    diagram.classList.toggle('fullscreen');
    const btn = diagram.querySelector('.btn-fullscreen');
    if (diagram.classList.contains('fullscreen')) {
        btn.innerHTML = '✕ Cerrar';
        // Permitir cerrar con ESC
        const closeHandler = (e) => {
            if (e.key === 'Escape') {
                diagram.classList.remove('fullscreen');
                btn.innerHTML = '🔍 Pantalla completa';
                document.removeEventListener('keydown', closeHandler);
            }
        };
        document.addEventListener('keydown', closeHandler);
    } else {
        btn.innerHTML = '🔍 Pantalla completa';
    }
}

function zoomDiagram(diagram, direction) {
    const content = diagram.querySelector('.diagram-content');
    content.classList.remove('zoomed-in', 'zoomed-out');

    if (direction === 'in') {
        content.classList.add('zoomed-in');
    } else if (direction === 'out') {
        content.classList.add('zoomed-out');
    }

    // Reset después de 3 segundos
    setTimeout(() => {
        content.classList.remove('zoomed-in', 'zoomed-out');
    }, 3000);
}

// ==================== Reload Diagrams with/without Names ====================
window.reloadAllDiagrams = function () {
    // Esta función será llamada desde plantuml-simple.js
    // para recargar diagramas con nombres ocultos
    if (typeof window.renderAllDiagrams === 'function') {
        window.renderAllDiagrams();
    }
};

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('📐 Protocolo Trazados Viales - Web Documentation');
    console.log('Version: 2.1');
    console.log('Developed by: Infinity Solutions RII Cia. Ltda.');
    console.log('✨ Nuevas características: Sidebar colapsable, Ocultar nombres, Zoom, Pantalla completa');

    // Initial active nav update
    updateActiveNav();
});

