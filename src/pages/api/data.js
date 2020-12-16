const fetch = require('isomorphic-unfetch');

const dataURL = 'https://fetch-hiring.s3.amazonaws.com/hiring.json';

module.exports = async (req, res) => {
  try {
    const response = await fetch(dataURL);
    const parsedData = await response.json();
    res.status(200);
    res.send(parsedData);
  } catch (error) {
    res.status(500);
  }
};

// parsedData is an array of objects each with an id, listID, and name
