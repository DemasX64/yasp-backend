const fs = require('fs');

class FileService {
  async saveTextFile(text, id){
    fs.writeFile(`./results/${id}.txt`, text, function (err) {
      if (err) return console.log(err);
    });
  }

  async saveFileFromReq(req, id){
    const screenshot = req.files.screenshot;
    screenshot.mv('./screenshots/' + id + '.jpg');
  }
}

module.exports = new FileService();