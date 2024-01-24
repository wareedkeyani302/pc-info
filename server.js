const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const port = 3001;


app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET',
  credentials: true,
}));

app.get('/pcinfo', (req, res) => {
  try {
    
    const ipAddress = req.connection.remoteAddress;

    const networkInterfaces = os.networkInterfaces();
    let networkIpAddress = 'N/A';

    for (const interfaceName in networkInterfaces) {
      const networkInterface = networkInterfaces[interfaceName];
      for (const iface of networkInterface) {
        if (!iface.internal && iface.family === 'IPv4') {
          networkIpAddress = iface.address;
          break;
        }
      }
      if (networkIpAddress !== 'N/A') {
        break;  
      }
    }

    const pcInfo = {
      ipAddress,
      networkIpAddress,
      pcName: os.hostname(),
      loginDetails: os.userInfo(),
    };

    res.json(pcInfo);
  } catch (error) {
    console.error('Error fetching PC info:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


