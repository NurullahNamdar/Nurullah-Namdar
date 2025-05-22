import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Ad Soyad alanı zorunludur';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'E-posta alanı zorunludur';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Geçerli bir e-posta adresi giriniz';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Konu alanı zorunludur';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Mesaj alanı zorunludur';
    }
    
    return errors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setFormErrors(errors);
    }
  };
  
  return (
    <div className="contact-page section">
      <div className="container">
        <SectionTitle 
          title="İletişim" 
          subtitle="Benimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz."
        />
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            <p>Aşağıdaki iletişim kanallarından bana ulaşabilir veya iletişim formunu doldurabilirsiniz.</p>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                   <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Telefon</h4>
                    <a
                      href="tel:+905528647303"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +90 552 864 73 03
                    </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>E-posta</h4>
                   <a
                      href="mailto:namdarnurullah73@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      namdarnurullah73@gmail.com
                    </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Konum</h4>
                  <p>Balıkesir, Türkiye</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
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
          </div>
          
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success">
                <h3>Teşekkürler!</h3>
                <p>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-posta adresiniz"
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Mesajınızın konusu"
                    className={formErrors.subject ? 'error' : ''}
                  />
                  {formErrors.subject && <div className="error-message">{formErrors.subject}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazınız"
                    rows="5"
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <div className="error-message">{formErrors.message}</div>}
                </div>
                
                <Button text="Gönder" type="primary" fullWidth />
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;