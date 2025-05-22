
import {FaTwitter, FaGithub, FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="slide-up">Merhaba, Ben Nurullah Namdar</h1>
        <div className="typing-container slide-up">
          <span>Nurullah </span>
          <TypeAnimation
            sequence={[
              'Bilgisayar Mühendisidir',
              1000,
              'Web Geliştiricidir',
              1000,
              'Yazılım Geliştirici Adayıdır',
              1000,
              'Siber Güvenlik Çalışmaları Yapıyor',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="typed-text"
            repeat={Infinity}
          />
        </div>
        <p className="home-description slide-up">
          Balıkesir Üniversitesi Bilgisayar Mühendisliği öğrencisiyim.
          Modern web teknolojileri ile yaratıcı ve kullanıcı dostu uygulamalar geliştiriyorum.
        </p>
        
        <div className="home-buttons slide-up">
         <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                İletişime Geç
              </a>
            <a
                href="#portfolio"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Projelerimi Gör
              </a>
        </div>
        
        <div className="home-social slide-up">
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
                href="https://www.linkedin.com/in/nurullah-namdar-33b037366/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
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

        </div>
      </div>
      
      <div className="scroll-down">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="scroll-text">Aşağı Kaydırarak Detaylı İnceleme Yapabilirsiniz.</span>
      </div>
    </div>
  );
};

export default Home;