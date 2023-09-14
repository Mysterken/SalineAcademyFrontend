import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Code connexion
  };

  const handleGoogleLogin = () => {
    // Code connexion via Google
  };

  return (
    <div>
      <h2>Connexion</h2>
      <p>Pas encore de compte ?</p>
      <br></br>
      <p>S’inscrire en cliquant ici</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleLogin}>Connexion</button>
      <button onClick={handleGoogleLogin}>Connexion via Google</button>
    </div>
  );
}

export default LoginPage;
