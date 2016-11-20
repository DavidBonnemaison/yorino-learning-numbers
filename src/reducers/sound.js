const defaultSound = {
  url: null,
  status: 'STOPPED',
  fadeTo: false
};

const getSoundUrl = number => {
  switch (number) {
    case 1:
      return 'https://translate.google.fr/translate_tts?ie=UTF-8&q=un&tl=fr&total=1&idx=0&textlen=2&tk=157236.271282&client=t';
    case 2:
      return 'https://translate.google.fr/translate_tts?ie=UTF-8&q=deux&tl=fr&total=1&idx=0&textlen=4&tk=200375.346929&client=t';
    case 3:
      return 'https://translate.google.fr/translate_tts?ie=UTF-8&q=trois&tl=fr&total=1&idx=0&textlen=5&tk=433316.55586&client=t';
    default:
      return null;
  }
};

export default function sound(state = defaultSound, action) {
  function playSound(newSound) {
    return Object.assign({}, state, {status: 'PLAYING', url: newSound, fadeTo: false});
  }

  switch (action.type) {
    case 'PLAY_GAME':
      return Object.assign({}, state, {fadeTo: 'fadeOut'});
    case 'START_PLAYING':
      return playSound(action.url);
    case 'STOP_PLAYING':
      return Object.assign({}, state, {status: 'STOPPED', url: null, fadeTo: false});
    case 'UPDATE_SHOW':
    case 'UPDATE_EXPECT':
      return playSound(getSoundUrl(action.value));
    default:
      return state;
  }
}
