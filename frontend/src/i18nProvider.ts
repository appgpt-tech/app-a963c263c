//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Lottery: {
      name: 'Lottery',
      fields: {
        ticketNumber: 'Ticket Number',
        drawDate: 'Draw Date',
        prizeAmount: 'Prize Amount',
        winner: 'Winner',
        id: 'id',
      },
    },
    Chess: {
      name: 'Chess',
      fields: {
        gameId: 'Game Id',
        player1Name: 'Player1name',
        player2Name: 'Player2name',
        winnerName: 'Winner Name',
        gameDuration: 'Game Duration',
        datePlayed: 'Date Played',
        monthlyRanking: 'Monthly Ranking',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Lottery: {
      name: 'Lottery (fr)',
      fields: {
        ticketNumber: 'Ticket Number (fr)',
        drawDate: 'Draw Date (fr)',
        prizeAmount: 'Prize Amount (fr)',
        winner: 'Winner (fr)',
        id: 'id',
      },
    },
    Chess: {
      name: 'Chess (fr)',
      fields: {
        gameId: 'Game Id (fr)',
        player1Name: 'Player1name (fr)',
        player2Name: 'Player2name (fr)',
        winnerName: 'Winner Name (fr)',
        gameDuration: 'Game Duration (fr)',
        datePlayed: 'Date Played (fr)',
        monthlyRanking: 'Monthly Ranking (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);