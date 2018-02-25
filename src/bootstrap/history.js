import { createHashHistory } from 'history';

/**
 * history
 * Creating hash history in browser
 */
const history = createHashHistory({ hashType: 'slash'});

/**
 * export history
 */
export default history;