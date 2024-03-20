const stellario_apikit = require('stellario-apikit');
const stellario_apikit_crypto = require('stellario-apikit-crypto');
const sequelize = require('sequelize');
const request = require('request');
const babel_core = require('babel-core');
const validator = require('validator');
const passport = require('passport');
const express = require('express');
const jquery = require('jquery');
const ejs = require('ejs');

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

// Convert a CSV string to an array of objects
const csvString = `Name, Age, Country\nJohn Doe, 30, USA\nJane Smith, 25, Canada`;
const csvToArray = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(value => value.trim());
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index];
    });
    data.push(entry);
  }
  return data;
}
console.log('CSV to Array:', csvToArray(csvString));

const http2 = require('http2');
const server = http2.createServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});
server.listen(3000);

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt');
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});