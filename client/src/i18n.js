// client/src/i18n.js
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// --- 1. Define Translation Resources ---
const resources = {
  en: {
    translation: {
        // Navbar Links
        "nav_welcome": "Welcome",
        "nav_works": "Works",
        "nav_academic": "Academic Career",
        "nav_blog": "Blog",
        "nav_contact": "Contact Me",

        // Welcome Page
        "welcome_greeting": "Hello, I'm [Your Name]",
        "welcome_hero_headline": "Software Engineer & System Programmer",
        "welcome_hero_summary": "I build robust, high-performance systems focusing on low-level languages like Rust and scalable network architectures.",
        "welcome_btn_works": "View Works",
        "welcome_btn_contact": "Get in Touch",
        "welcome_image_placeholder": "Profile Image Placeholder",
        "welcome_section_skills": "Core Technical Competencies",
        "welcome_skill_sys_title": "System Programming (Rust)",
        "welcome_skill_sys_desc": "Expertise in memory safety, concurrency, and high-performance applications using Rust and C/C++.",
        "welcome_skill_web_title": "Web Architecture (Full-Stack)",
        "welcome_skill_web_desc": "Designing and deploying scalable web services using Python (Django/Flask) or Java (Spring Boot) and modern frontend frameworks.",
        "welcome_skill_db_title": "Data & DevOps",
        "welcome_skill_db_desc": "Experience with relational databases (PostgreSQL), containerization (Docker), and cloud deployment practices.",
    }
},
fr: {
    translation: {
        // Navbar Links
        "nav_welcome": "Accueil",
        "nav_works": "Projets",
        "nav_academic": "Parcours Académique",
        "nav_blog": "Blog",
        "nav_contact": "Me Contacter",

        // Welcome Page
        "welcome_greeting": "Bonjour, je suis [Votre Nom]",
        "welcome_hero_headline": "Ingénieur Logiciel et Programmeur Système",
        "welcome_hero_summary": "Je conçois des systèmes robustes et performants en me concentrant sur des langages de bas niveau comme Rust et des architectures réseau évolutives.",
        "welcome_btn_works": "Voir les Projets",
        "welcome_btn_contact": "Contactez-moi",
        "welcome_image_placeholder": "Image de Profil",
        "welcome_section_skills": "Compétences Techniques de Base",
        "welcome_skill_sys_title": "Programmation Système (Rust)",
        "welcome_skill_sys_desc": "Expertise en sécurité mémoire, concurrence et applications haute performance avec Rust et C/C++.",
        "welcome_skill_web_title": "Architecture Web (Full-Stack)",
        "welcome_skill_web_desc": "Conception et déploiement de services web évolutifs utilisant Python (Django/Flask) ou Java (Spring Boot) et des frameworks frontend modernes.",
        "welcome_skill_db_title": "Données et DevOps",
        "welcome_skill_db_desc": "Expérience avec les bases de données relationnelles (PostgreSQL), la conteneurisation (Docker) et les pratiques de déploiement cloud.",

        // --- WELCOME PAGE (Hero & Skills) ---
      "welcome_greeting": "Bonjour, je suis [Votre Nom]",
      "welcome_hero_headline": "Ingénieur Logiciel et Programmeur Système",
      "welcome_hero_summary": "Je conçois des systèmes robustes et performants en me concentrant sur des langages de bas niveau comme Rust et des architectures réseau évolutives.",
      "welcome_btn_works": "Voir les Projets",
      "welcome_btn_contact": "Contacter",
      "welcome_image_placeholder": "Espace Réservé pour l'Image de Profil",
      "welcome_section_skills": "Compétences Techniques de Base",
      "welcome_skill_sys_title": "Programmation Système (Rust)",
      "welcome_skill_sys_desc": "Expertise en sécurité mémoire, concurrence et applications haute performance avec Rust et C/C++.",
      "welcome_skill_web_title": "Architecture Web (Full-Stack)",
      "welcome_skill_web_desc": "Conception et déploiement de services web évolutifs utilisant Python (Django/Flask) ou Java (Spring Boot) et des frameworks frontend modernes.",
      "welcome_skill_db_title": "Données et DevOps",
      "welcome_skill_db_desc": "Expérience avec les bases de données relationnelles (PostgreSQL), la conteneurisation (Docker) et les pratiques de déploiement cloud.",

      // --- WORKS PAGE ---
      "works_headline": "Travaux et Projets Techniques",
      "works_summary": "Présentation de mes compétences clés en programmation système, architecture réseau et développement web moderne.",
      "works_code": "Code Source",
      "works_demo": "Démo en Ligne",

      // --- ACADEMIC PAGE (Assumed content) ---
      "academic_headline": "Parcours Académique et Recherche",
      "academic_summary": "Points saillants de ma formation, mes travaux de recherche et mes projets de thèse.",
      "academic_degree_title": "Master en Sciences Informatiques",
      "academic_degree_year": "2020 - 2022",
      "academic_thesis_title": "Thèse : Simulation Réseau Haute Performance avec Rust",
      "academic_thesis_summary": "Axé sur la création d'un cadre de simulation sécurisé et rapide pour les topologies réseau à grande échelle, améliorant la vitesse de 30 % par rapport aux solutions C++ existantes.",

      // --- BLOG PAGE ---
      "blog_headline": "Perspectives d'Ingénierie",
      "blog_summary": "Analyses approfondies sur Rust, Python, Java et la conception de systèmes évolutifs.",
      "blog_search_placeholder": "Rechercher par titre...",
      "blog_btn_all": "Tous",
      "blog_read_article": "Lire l'Article",
      "blog_not_found": "Aucun article de blog trouvé correspondant à vos critères.",
      "blog_show_all": "Afficher Tous les Articles",

      // --- CONTACT PAGE (Assumed content) ---
      "contact_headline": "Construisons Quelque Chose Ensemble",
      "contact_summary": "Je suis actuellement à la recherche de nouveaux défis en ingénierie des systèmes et en calcul haute performance. Envoyez-moi un message !",
      "contact_form_name": "Nom",
      "contact_form_email": "E-mail",
      "contact_form_message": "Votre Message",
      "contact_form_send": "Envoyer le Message",
      "contact_form_email_me": "ou envoyez-moi un e-mail directement à :",
    }
}
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Use English if a language is not found
    interpolation: {
      escapeValue: false // React already escapes values
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
    }
  });

export default i18n;