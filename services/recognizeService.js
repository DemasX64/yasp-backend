const { createWorker } = require('tesseract.js');


class RecognizeService {
  async recognizeText(id) {
    const worker = await createWorker();
    await worker.loadLanguage('eng+rus');
    await worker.initialize('eng+rus');
    const { data: { text } } = await worker.recognize(`./screenshots/${id}.jpg`);
    await worker.terminate();
    return text;
  }
}

module.exports = new RecognizeService();