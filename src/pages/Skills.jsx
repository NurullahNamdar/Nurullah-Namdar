import SectionTitle from '../components/SectionTitle';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: 'Web Geliştirme',
      description: 'Modern web teknolojileri kullanarak responsive ve kullanıcı dostu web uygulamaları geliştirme.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      icon: '💻'
    },
    {
      title: 'Mobil Uygulama Geliştirme',
      description: 'Cross-platform mobil uygulamalar geliştirerek farklı platformlarda çalışabilen mobil çözümler üretme.',
      technologies: ['React Native', 'Flutter', 'Firebase'],
      icon: '📱'
    },
    {
      title: 'Python Programlama',
      description: 'Veri setlerini analiz ederek anlamlı sonuçlar çıkarma ve veri görselleştirme araçları ile sunma.',
      technologies: ['Python', 'SQL' ],
      icon: '📊'
    },
    {
      title: 'C# İle Programlama',
      description: 'Kullanıcı deneyimini ön planda tutan, estetik ve işlevsel arayüz tasarımları oluşturma.',
      technologies: ['C# Console', 'C# Framework', 'C'],
      icon: '🎨'
    }
  ];
const progressItems = document.querySelectorAll('.progress-item');

progressItems.forEach(item => {
  // Yüzde değerini al
  const percentageElement = item.querySelector('.progress-percentage');
  const percentageText = percentageElement.textContent;
  const percentage = parseInt(percentageText, 10); // Sayıya dönüştür

  // Dolacak barı seç
  const progressBarFill = item.querySelector('.progress-fill');

  // CSS değişkenini ayarla
  progressBarFill.style.setProperty('--width', percentage + '%');

  // (Alternatif olarak, inline stil kullanabilirsiniz - ama CSS değişkeni daha iyidir)
  // progressBarFill.style.width = percentage + '%';

  // Animasyonu yeniden başlat (gerekirse)
  progressBarFill.style.animation = 'none';
  progressBarFill.offsetHeight; /* Trigger reflow */
  progressBarFill.style.animation = null;
});
  const technicalSkills = [
    { name: 'HTML/CSS', percentage: 81 },
    { name: 'JavaScript', percentage: 55 },
    { name: 'React', percentage: 60 },
    { name: 'C#', percentage: 99 },
    { name: 'Python', percentage: 70 },
    { name: 'Java', percentage: 65 },
  ];

  return (
    <div className="skills-page section">
      <div className="container">
        <SectionTitle
          title="Neler Yapabilirim"
          subtitle="Teknoloji dünyasında kendimi geliştirdiğim beceri alanları."
        />

        <div className="skills-content">
          <div className="skill-cards">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-tech">
                  {skill.technologies.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="technical-skills">
            <h3>Teknik Yetkinlikler</h3>
            <div className="progress-bars">
              {technicalSkills.map((skill, index) => (
                <div className="progress-item" key={index}>
                  <div className="progress-info">
                    <span className="progress-name">{skill.name}</span>
                    <span className="progress-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.percentage}%` }}
                      data-percentage={skill.percentage}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;