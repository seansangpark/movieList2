const model = require('../model');

module.exports = {
  getFromModel: (req, res) => {
    var getData = () => {
      return new Promise((resolve, reject) => {
        model.getFromDB((err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        })
      })
    };
    getData()
      .then(data => {
        res.send(data);
      })
      .catch((err) => {
        console.log(`failed to get data from db: ${err}`);
        res.status(404).send('not found')
      })
  },

  postToModel: (req, res) => {
    var postData = () => {
      return new Promise((resolve, reject) => {
        model.postToDB(req.body.movieInput, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        })
      })
    }
    postData()
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        console.log(`failed to post data to db: ${err}`);
        res.status(404).send('not posted')
      })
  }
}
      // console.log('req.body', req.body);
      // console.log('req.query', req.query);
      // console.log('req.params', req.params);