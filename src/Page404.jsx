import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.titre}>404</h1>
            <p>OOUUPPPSS</p>
            <button style={styles.button} onClick={() => window.location.href = '/'}>
                Retourner vers la page d'accueil
            </button>
        </div>
    );
};

const styles = {
    container: {
        backgroundImage: `url('/GroupMusical.svg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        backgroundColor: '#121216',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 'auto',
    },
    titre: {
        fontSize: '8rem',
        color: '#5B26F0',
    },
    button: {
        fontSize: '1.5rem',
        margin: '20px',
        padding: '10px 20px',
        backgroundColor: '#5B26F0',
        color: '#fff', // Texte blanc
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        borderRadius: '8px',
        width: 'auto',
    },
};

if (window.innerWidth < 800) {
    styles.button.fontSize = '1em';
}

export default NotFoundPage;
