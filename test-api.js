const http = require('http');

const data = JSON.stringify({
  type: 'general',
  fullName: 'Test User',
  email: 'test@example.com',
  phone: 'Not provided',
  province: 'Not provided',
  country: 'Not provided',
  reason: 'family',
  message: 'This is a test message',
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  let responseBody = '';
  res.on('data', (chunk) => responseBody += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Response: ${responseBody}`);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(data);
req.end();
