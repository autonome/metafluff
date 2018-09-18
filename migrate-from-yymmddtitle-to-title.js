const fs = require('fs-extra');
const glob = require('glob');

glob('posts2/*/*/*', function(er, files) {
  files.forEach(file => {
    let name = file.split('/').pop();
    //fs.copy(file, 'originals/' + name, { preserveTimestamps: true});
    console.log('copied', name);
  });
})
