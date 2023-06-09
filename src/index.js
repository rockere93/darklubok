import './main.scss';
import goToStoryCard from './scripts/main/goToStoryCard';
import intro from '../src/scripts/chapters/intro/intro_story';
import sidemenuListener from './scripts/main/sidemenuListener';

sidemenuListener();

goToStoryCard(intro, 0);

// ----запуск первой главы--- //
// import { startChapter1 } from './scripts/chapters/chapter1/chapter1_actions';
// startChapter1();
