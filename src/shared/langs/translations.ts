export const translations = {
  en: {
    greeting: 'Hello, welcome!',
    changeLanguage: 'Change Language',
    Dashboard: 'Dashboard',
    Counter: 'Counter',
    Countries: 'Countries',
    Calendar: 'Calendar',
    'Football Matches': 'Football Matches',
    News: 'News',
    Profile: 'Profile',
    tooltipGithub: 'Welcome to my GitHub repo',
  },
  uk: {
    greeting: 'Привіт, ласкаво просимо!',
    changeLanguage: 'Змінити мову',
    Dashboard: 'Панель',
    Counter: 'Лічильник',
    Countries: 'Країни',
    Calendar: 'Календар',
    'Football Matches': 'Футбольні матчі',
    News: 'Новини',
    Profile: 'Профіль',
    tooltipGithub: 'Ласкаво просимо до мого репозиторію на GitHub',
  },
  ro: {
    greeting: 'Salut, bine ai venit!',
    changeLanguage: 'Schimbă limba',
    Dashboard: 'Tablou de bord',
    Counter: 'Contor',
    Countries: 'Țări',
    Calendar: 'Calendar',
    'Football Matches': 'Meciuri de fotbal',
    News: 'Știri',
    Profile: 'Profil',
    tooltipGithub: 'Bine ați venit în depozitul meu GitHub',
  },
};

export type TranslationKeys = keyof (typeof translations)['en'];
export type Language = keyof typeof translations;
