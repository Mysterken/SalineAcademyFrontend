import logo from '../img/logo-saline-royale-academy-favicon-blanc-V2.svg';
import '../Footer.css';

function Footer() {
    return(
        <>
            <footer>
                <div className='containerFooterHaut'>
                    <ul className='containerTableFooter'>
                        <img src={logo}></img>
                    </ul>
                    <ul className='containerTableFooter'>
                        <li className='tableFooter'>learn</li>
                        <li className='tableFooter'>learn</li>
                        <li className='tableFooter'>learn</li>
                        <li className='tableFooter'>learn</li>
                        <li className='tableFooter'>learn</li>
                    </ul>
                    <ul className='containerTableFooter'>
                        <li className='tableFooter'>masterclass</li>
                        <li className='tableFooter'>masterclass</li>
                        <li className='tableFooter'>masterclass</li>
                        <li className='tableFooter'>masterclass</li>
                        <li className='tableFooter'>masterclass</li>
                    </ul>
                    <ul className='containerTableFooter'>
                        <li className='tableFooter'>contactez-nous</li>
                        <li className='tableFooter'>contactez-nous</li>
                        <li className='tableFooter'>contactez-nous</li>
                        <li className='tableFooter'>contactez-nous</li>
                        <li className='tableFooter'>contactez-nous</li>
                    </ul>
                    <ul className='containerTableFooter'>
                        <li className='tableFooter'>social</li>
                        <form action="#">
                            <input type='email' id='email'></input>
                            <input type='submit' value="->"></input>
                        </form>
                    </ul>
                </div>
                <div className='containerFooterBas'>
                    <div className='line'></div>
                    <ul className='containerTableFooter'>
                        <li className='tableFooter'>© Saline Royal Academy | Tous droit resevé</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;
