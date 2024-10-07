import React, { useState } from 'react';

const GitHubInfoCard = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchGitHubData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>GitHub Info Card</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchGitHubData}>Fetch GitHub Info</button>

      {userData && (
        <div style={styles.card}>
          <img src={userData.avatar_url} alt={userData.login} style={styles.avatar} />
          <h3>{userData.name}</h3>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Bio:</strong> {userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '5px',
    maxWidth: '300px',
    margin: 'auto',
    textAlign: 'center',
  },
  avatar: {
    width: '100px',
    borderRadius: '50%',
  },
};

export default GitHubInfoCard;
