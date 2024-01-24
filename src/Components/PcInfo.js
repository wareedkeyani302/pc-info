import React, { useState } from 'react';
import axios from 'axios';

const PcInfo = () => {
  const [pcInfo, setPcInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPCInfo = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/pcinfo');
      setPcInfo(response.data);
    } catch (error) {
      console.error('Error fetching PC info:', error.message);
      setError('Error fetching PC info');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>PC Information</h2>
      <button onClick={getPCInfo} disabled={loading}>
        {loading ? 'Fetching...' : 'Get PC Info'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pcInfo && (
        <ul>
          <li>IP Address: {pcInfo.ipAddress}</li>
          <li>Network IP Address: {pcInfo.networkIpAddress}</li>
          <li>PC Name: {pcInfo.pcName}</li>
          <li>Login Details: {JSON.stringify(pcInfo.loginDetails)}</li>
        </ul>
      )}
    </div>
  );
};

export default PcInfo;

