import Injector from 'lib/Injector';
import CharacterCounter from '../components/CharacterCounter';

export default () => {
  Injector.component.registerMany({
    // List your React components here so Injector is aware of them
  });

  Injector.transform('character-count-transform', (updater) => {
    updater.component('TextField', CharacterCounter);
  });
};
