import React, { useState } from 'react';
import './Connexioncss.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    const userEmail = email;
    const userPassword = password;
    if (!userEmail || !userPassword) {
      // Afficher un message d'erreur à l'utilisateur
      alert("Veuillez remplir tous les champs.");
      return;
  
  };
}
  const handleGoogleLogin = () => {
    // Code connexion via Google
  };

  return (
    <div>
      <h2>CONNEXION</h2>
      <p>Pas encore de compte ?</p>
      <p className="cliquezici">S’inscrire en cliquant ici</p>
      <input
        type="email"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="MOT DE PASSE"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="NOM D'UTILISATEUR"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="tel"
        placeholder="TÉLÉPHONE"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>CONNEXION</button>
      <button className="google-button" onClick={handleGoogleLogin}>CONNEXION VIA GOOGLE</button>
    </div>
  );
}

export default LoginPage;
