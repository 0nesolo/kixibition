import { initialize, addTranslation } from 'react-localize-redux';
import content from '../locale/global.locale.json';

import store from './store';

/**
 * Languages
 */
const languages = [ 'en', 'es' ];

/**
 * Default languages
 */
const [ defaultLanguage ] = languages;

store.dispatch(initialize(languages, { defaultLanguage }));
store.dispatch(addTranslation(content));