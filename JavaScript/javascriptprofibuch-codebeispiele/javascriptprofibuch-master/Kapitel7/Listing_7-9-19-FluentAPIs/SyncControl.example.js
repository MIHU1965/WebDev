const SyncControl = require('./SyncControl');
const control = new SyncControl();
control.play();
control.pause();
control.select(7);
control.play();
control.next();
control.previous();
control.play();
control.stop();