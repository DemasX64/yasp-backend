const { v4: uuidv4 } = require('uuid');
const recognizeService = require('../services/recognizeService');
const fileService = require('../services/fileService');

class ScreenshotController {
  async add(req, res, next) {
    try {
      const id = uuidv4();
      await fileService.saveFileFromReq(req, id);
      const recognizedText = await recognizeService.recognizeText(id);
      await fileService.saveTextFile(recognizedText, id);
      const answer = {
        id, recognizedText
      }
      return res.json(answer);
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new ScreenshotController();