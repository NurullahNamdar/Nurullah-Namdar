import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'İnternet Kafe Yönetim Sistemi',
      category: 'web',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'İnternet kafelerin yönetimini kolaylaştırmak için Python ile kodlanmış modern uygulama.',
      link: 'https://github.com/NurullahNamdar/internetkafeyonetimsistemi',
      technologies: ['Python', 'PYQT5','CSS']
    },
    {
      id: 2,
      title: 'Soru Bankası',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Soru yazıp bu soruları soru bankasına ekleme ve sonradan yazdırılmasını sağlayan program.',
      link: 'https://github.com/NurullahNamdar/SoruBankasii',
      technologies: ['Python', 'QTDesigner']
    },

    {
      id: 3,
      title: 'Notepad',
      category: 'data',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Günlük işler için kolay ve hızlı erişilebilir bir asistan.',
      link: 'https://github.com/NurullahNamdar/Notepad',
      technologies: ['Python', 'QTDesigner',]
    },

  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio-page section">
      <div className="container">
        <SectionTitle 
          title="Portfolyo" 
          subtitle="Geliştirdiğim bazı projeler ve çalışmalar."
        />
        
        <div className="portfolio-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            Tümü
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`} 
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} 
            onClick={() => setFilter('mobile')}
          >
            Mobil
          </button>
          <button 
            className={`filter-btn ${filter === 'data' ? 'active' : ''}`} 
            onClick={() => setFilter('data')}
          >
            Veri Analizi
          </button>
        </div>
        
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                      Detayları Gör
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;