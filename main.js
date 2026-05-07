"use strict"

/* ============================================================
   MATHEUS HENRY PORTFOLIO — script.js
   Funcionalidades: Cursor, Typed, Scroll Reveal, Navbar,
                    Back-to-Top, Hamburger, i18n (PT/EN)
   ============================================================ */

/* ── TRANSLATIONS ─────────────────────────────────────────── */
const translations = {
    pt: {
        // Page title
        page_title: "Matheus Henry — Dev & AppSec",

        // Navbar
        nav_about: "Sobre",
        nav_goals: "Objetivos",
        nav_exp: "Experiência",
        nav_skills: "Habilidades",
        nav_contact: "Contato",

        // Hero
        hero_greeting: "Olá, mundo",
        hero_prefix: "Futuro ",
        hero_sub: "Estudante de DS no SENAI · 17 anos · São Paulo, BR",
        hero_cta_contact: "Entre em contato",
        hero_cta_about: "Saiba mais",

        // About
        about_label: "// sobre mim",
        about_title: "Quem sou eu",
        about_role: "Dev Fullstack & Aspirante AppSec",
        about_p1: `Tenho 17 anos e sou estudante do ensino médio, cursando simultaneamente o técnico em
               <strong>Desenvolvimento de Sistemas</strong> pelo SENAI. Desde cedo me apaixonei por tecnologia
               e hoje meu foco é me tornar um desenvolvedor completo, com interesse especial em
               <strong>Application Security (AppSec)</strong>.`,
        about_p2: `Sou <strong>fullstack</strong> e me adapto bem a diversas áreas da tecnologia — do front-end
               ao back-end, passando por segurança. Minha maior motivação é aprender continuamente e
               transformar conhecimento em soluções reais.`,
        about_p3: `Além da programação, invisto no inglês há mais de 1 ano pelo curso online <strong>Wisard</strong>
               e continuo evoluindo, pois quero trabalhar fora do país no futuro.`,

        // Goals
        goals_label: "// objetivos",
        goals_title: "Para onde estou indo",
        goal1_title: "Faculdade de Ciência da Computação",
        goal1_desc: "Ingressar no curso de Ciência da Computação no próximo ano, aprofundando a base teórica e prática para uma carreira sólida em tecnologia.",
        goal1_tag: "2026",
        goal2_title: "Primeiro Estágio em TI",
        goal2_desc: "Conquistar um estágio na área de tecnologia para colocar em prática os conhecimentos adquiridos e ganhar experiência profissional real.",
        goal2_tag: "Em breve",
        goal3_title: "Carreira em Dev & AppSec",
        goal3_desc: "Consolidar expertise como desenvolvedor fullstack com especialização em segurança de aplicações, atuando na proteção e construção de sistemas robustos.",
        goal3_tag: "Longo prazo",
        goal4_title: "Trabalhar no Exterior",
        goal4_desc: "Expandir horizontes profissionais atuando fora do Brasil, aproveitando o domínio do inglês e as oportunidades do mercado internacional de tecnologia.",
        goal4_tag: "Futuro",

        // Experience
        exp_label: "// experiência",
        exp_title: "Minha trajetória",
        exp_badge_current: "Atual",
        exp_badge_transition: "Transição",
        exp_badge_past: "Anterior",
        exp_senai_period: "2024 – presente",
        exp_senai_title: "Técnico em Desenvolvimento de Sistemas — SENAI",
        exp_senai_desc: "Formação técnica com foco em programação, desenvolvimento web, banco de dados e metodologias ágeis. Aprendizado prático e teórico com projetos reais.",
        exp_trans_title: "↗ Mudança de carreira para Tecnologia",
        exp_trans_desc: "Decisão estratégica de redirecionar a carreira para a área de TI, investindo em educação técnica, projetos pessoais e desenvolvimento de habilidades digitais.",
        exp_buffet_period: "2023 – 2024",
        exp_buffet_title: "Auxiliar de Serviços — Buffet",
        exp_buffet_desc: "Atuação em eventos gastronômicos, desenvolvendo habilidades de trabalho em equipe, responsabilidade, comunicação e gestão de tempo sob pressão.",
        exp_casa_period: "2022 – 2023",
        exp_casa_title: "Auxiliar — Casa do Norte",
        exp_casa_desc: "Experiência no atendimento ao cliente e operações internas, fortalecendo proatividade, organização e capacidade de adaptação em ambientes dinâmicos.",

        // Skills
        skills_label: "// habilidades",
        skills_title: "O que eu trago",
        sk1_title: "Comunicação",
        sk1_desc: "Clareza ao transmitir ideias, seja em apresentações, reuniões ou documentação técnica.",
        sk2_title: "Trabalho em Equipe",
        sk2_desc: "Colaboração efetiva em projetos coletivos, respeitando diferentes perspectivas e contribuindo ativamente.",
        sk3_title: "Aprendizado Rápido",
        sk3_desc: "Capacidade de absorver novas tecnologias e conceitos com agilidade e curiosidade constante.",
        sk4_title: "Adaptabilidade",
        sk4_desc: "Flexibilidade para se ajustar a novos ambientes, ferramentas e desafios com naturalidade.",
        sk5_title: "Resolução de Problemas",
        sk5_desc: "Abordagem analítica e criativa para identificar e solucionar problemas técnicos e práticos.",
        sk6_title: "Gestão de Tempo",
        sk6_desc: "Organização de prioridades e cumprimento de prazos mesmo em situações de múltiplas demandas.",
        sk7_title: "Proatividade",
        sk7_desc: "Iniciativa para antecipar necessidades, propor melhorias e agir sem esperar ser solicitado.",
        sk8_title: "Inglês",
        sk8_desc: "Nível intermediário e em evolução contínua pelo curso Wisard. Leitura técnica fluente.",

        // Contact
        contact_label: "// contato",
        contact_title: "Vamos conversar?",
        contact_sub: "Estou aberto a oportunidades de estágio, projetos colaborativos e trocas de conhecimento. Pode me chamar!",

        // Footer
        footer_copy: "Provérbios 24, versículo 16 · 2025",

        // Typed words
        typed_words: ["Desenvolvedor.", "AppSec.", "Fullstack Dev.", "Programador."],
    },

    en: {
        page_title: "Matheus Henry — Dev & AppSec",

        nav_about: "About",
        nav_goals: "Goals",
        nav_exp: "Experience",
        nav_skills: "Skills",
        nav_contact: "Contact",

        hero_greeting: "Hello, world",
        hero_prefix: "Future ",
        hero_sub: "Systems Development student at SENAI · 17 y/o · São Paulo, BR",
        hero_cta_contact: "Get in touch",
        hero_cta_about: "Learn more",

        about_label: "// about me",
        about_title: "Who I am",
        about_role: "Fullstack Dev & Aspiring AppSec",
        about_p1: `I'm 17 years old and a high school student simultaneously enrolled in the technical
               <strong>Systems Development</strong> program at SENAI. I've been passionate about technology
               from an early age, and today my focus is on becoming a well-rounded developer with a special
               interest in <strong>Application Security (AppSec)</strong>.`,
        about_p2: `I'm <strong>fullstack</strong> and adapt well to various areas of technology — from front-end
               to back-end and security. My greatest motivation is to learn continuously and turn knowledge
               into real solutions.`,
        about_p3: `Beyond coding, I've been investing in English for over a year through the online course
               <strong>Wisard</strong> and keep improving, as I aim to work abroad in the future.`,

        goals_label: "// goals",
        goals_title: "Where I'm heading",
        goal1_title: "Computer Science Degree",
        goal1_desc: "Enroll in a Computer Science program next year to deepen theoretical and practical foundations for a solid tech career.",
        goal1_tag: "2026",
        goal2_title: "First IT Internship",
        goal2_desc: "Land an internship in technology to put acquired knowledge into practice and gain real professional experience.",
        goal2_tag: "Soon",
        goal3_title: "Career in Dev & AppSec",
        goal3_desc: "Build expertise as a fullstack developer specializing in application security, working on building and protecting robust systems.",
        goal3_tag: "Long-term",
        goal4_title: "Work Abroad",
        goal4_desc: "Expand professional horizons by working outside Brazil, leveraging English proficiency and opportunities in the international tech market.",
        goal4_tag: "Future",

        exp_label: "// experience",
        exp_title: "My journey",
        exp_badge_current: "Current",
        exp_badge_transition: "Transition",
        exp_badge_past: "Previous",
        exp_senai_period: "2024 – present",
        exp_senai_title: "Systems Development Technician — SENAI",
        exp_senai_desc: "Technical education focused on programming, web development, databases, and agile methodologies. Hands-on and theoretical learning through real projects.",
        exp_trans_title: "↗ Career Transition to Technology",
        exp_trans_desc: "Strategic decision to redirect my career toward IT, investing in technical education, personal projects, and digital skills development.",
        exp_buffet_period: "2023 – 2024",
        exp_buffet_title: "Service Assistant — Buffet",
        exp_buffet_desc: "Worked at catering events developing teamwork, accountability, communication, and time management skills under pressure.",
        exp_casa_period: "2022 – 2023",
        exp_casa_title: "Assistant — Casa do Norte",
        exp_casa_desc: "Customer service and internal operations experience, strengthening proactivity, organization, and adaptability in dynamic environments.",

        skills_label: "// skills",
        skills_title: "What I bring",
        sk1_title: "Communication",
        sk1_desc: "Clarity in conveying ideas, whether in presentations, meetings, or technical documentation.",
        sk2_title: "Teamwork",
        sk2_desc: "Effective collaboration on group projects, respecting different perspectives and actively contributing.",
        sk3_title: "Fast Learning",
        sk3_desc: "Ability to absorb new technologies and concepts quickly with constant curiosity.",
        sk4_title: "Adaptability",
        sk4_desc: "Flexibility to adjust to new environments, tools, and challenges naturally.",
        sk5_title: "Problem Solving",
        sk5_desc: "Analytical and creative approach to identifying and solving technical and practical problems.",
        sk6_title: "Time Management",
        sk6_desc: "Prioritizing tasks and meeting deadlines even when handling multiple demands.",
        sk7_title: "Proactivity",
        sk7_desc: "Initiative to anticipate needs, propose improvements, and act without being prompted.",
        sk8_title: "English",
        sk8_desc: "Intermediate level and continuously improving through the Wisard course. Fluent technical reading.",

        contact_label: "// contact",
        contact_title: "Let's talk?",
        contact_sub: "I'm open to internship opportunities, collaborative projects, and knowledge sharing. Reach out!",

        footer_copy: "Proverbs 24, verse 16 · 2025",

        typed_words: ["Developer.", "AppSec.", "Fullstack Dev.", "Programmer."],
    }
};

/* ── STATE ─────────────────────────────────────────────────── */
let currentLang = 'pt';

/* ── LANGUAGE SWITCHER ─────────────────────────────────────── */
/**
 * Apply all translations for the given language.
 * Elements with [data-i18n] are updated with innerHTML (allows <strong> tags).
 */
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update page title
    document.title = t.page_title;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update lang button label (show the OPPOSITE language to switch to)
    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = lang === 'pt' ? 'EN' : 'PT';

    // Update html lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Restart typed animation with new words
    restartTyped(t.typed_words);
}

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyTranslations(currentLang);
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);

/* ── TYPED EFFECT ──────────────────────────────────────────── */
let typedInterval = null;
let typedTimeout = null;

function restartTyped(words) {
    // Clear previous timers
    clearInterval(typedInterval);
    clearTimeout(typedTimeout);

    const el = document.getElementById('typedText');
    if (!el) return;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        const word = words[wordIndex % words.length];
        const display = deleting
            ? word.substring(0, charIndex - 1)
            : word.substring(0, charIndex + 1);

        el.textContent = display;

        if (!deleting) {
            charIndex++;
            if (charIndex === word.length) {
                // Pause then start deleting
                clearInterval(typedInterval);
                typedTimeout = setTimeout(() => {
                    deleting = true;
                    typedInterval = setInterval(tick, 60);
                }, 1800);
                return;
            }
        } else {
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                wordIndex++;
            }
        }
    }

    charIndex = 0;
    deleting = false;
    el.textContent = '';
    typedInterval = setInterval(tick, 90);
}

// Initial start
restartTyped(translations[currentLang].typed_words);

/* ── CUSTOM CURSOR ─────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

if (window.matchMedia('(hover: hover)').matches) {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dot follows instantly
        dotX = mouseX;
        dotY = mouseY;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
    });

    // Smooth cursor ring follows with slight lag
    function animateCursor() {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Scale on hoverable elements
    document.querySelectorAll('a, button, .goal-card, .skill-card, .contact-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(1.8)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
    });
}

/* ── NAVBAR SCROLL ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

function handleNavbar() {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleNavbar, { passive: true });
handleNavbar();

/* ── BACK TO TOP ───────────────────────────────────────────── */
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}, { passive: true });

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── HAMBURGER MENU ────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('mobile-open');
        document.body.style.overflow = '';
    });
});

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger delay based on sibling index
            const siblings = entry.target.parentElement
                ? Array.from(entry.target.parentElement.querySelectorAll('.reveal'))
                : [];
            const idx = siblings.indexOf(entry.target);
            const delay = Math.min(idx * 80, 400); // max 400ms stagger

            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);

            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── SMOOTH SCROLL (fallback for older browsers) ───────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});

/* ── ACTIVE NAV LINK ON SCROLL ─────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navAnchors.forEach(a => {
                a.style.color = a.getAttribute('href') === `#${id}`
                    ? 'var(--white)'
                    : '';
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── INIT ──────────────────────────────────────────────────── */
// Apply initial language (Portuguese)
applyTranslations('pt');
