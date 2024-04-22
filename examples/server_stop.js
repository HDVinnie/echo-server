var echo = require('../dist/index.js');

var options = require('../unit3d-echo-server');

echo.run(options).then(echo => {
    echo.stop();
});
