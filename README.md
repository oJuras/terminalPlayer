# terminalPlayer
Allows you to play .mp3 and .wav sounds on the Windows terminal

## Installation

    npm i @ojuras/terminalplayer

## Examples

```javascript
const tPlayer = require('@ojuras/terminalplayer');

tPlayer.playFrom('./sample.mp3');

tPlayer.playFrom('./../../sound.wav');

tPlayer.playFrom('C:/Program Files/audioSamples/track1.mp3');
```

## License

MIT