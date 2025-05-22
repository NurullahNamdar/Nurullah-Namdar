import {FaTwitter, FaGithub, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <a href="#home" className="text-2xl font-bold text-blue-400">Nurullah NAMDAR</a>
          <p>Bilgisayar Mühendisliği Öğrencisi</p>
        </div>
        
        <div className="footer-social">
          <h4>Sosyal Medya Hesaplarım</h4>
          <div className="social-icons">
            <a href="https://x.com/nurullahnamdar" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://github.com/NurullahNamdar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/nurullah.namdar" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
             <a
                    href="https://www.instagram.com/nurullah_073/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-pink-500 dark:hover:bg-pink-500 hover:text-white transition-colors"
                    aria-label="Instagram"
                >
                  <FaInstagram/>
                </a>
             <a
                href="https://www.linkedin.com/in/nurullah-namdar-33b037366/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
          </div>
        </div>
        
        <div className="footer-nav">
          <h4>Hızlı Bağlantılar</h4>
          <ul>
            <li><a href="#">Ana Sayfa</a></li>
            <li><a href="#about">Ben Kimim?</a></li>
            <li><a href="#skills">Neler Yapabilirim?</a></li>
            <li><a href="#portfolio">Portfolyo</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Nurullah Namdar. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;