import React, { useState } from 'react';
import './Connexioncss.css';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    const userData = {
      "email":email,
      "password":password,
      "username":username,
    };
    
    axios.post('/api/register', JSON.stringify(userData), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        const responseData = response.data;
        console.log(responseData);
      } else {
        if (response.status === 400) {
          console.error('Erreur de requête :', response.data);
        } else if (response.status === 401) {
          console.error('Non autorisé :', response);
        } else if (response.status === 500) {
          console.error('Erreur interne du serveur :', response);
        } else {
          console.error('Erreur non gérée :', response);
        }
      }
    })
    .catch((error) => {
      console.log(error);
      // Gérez les erreurs réseau ici
      console.error('Erreur lors de la connexion :', error);
      // Vous pouvez afficher un message d'erreur générique à l'utilisateur ici
    });
    

    //if (!userEmail || !userPassword) {
      // Afficher un message d'erreur à l'utilisateur
      //alert("Veuillez remplir tous les champs.");
     // return;
  
  //};//
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
