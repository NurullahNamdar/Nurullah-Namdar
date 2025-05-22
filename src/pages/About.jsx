import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './About.css';

const About = () => {
  const personalInfo = [
    { label: 'Ad Soyad', value: 'Nurullah Namdar' },
    { label: 'Doğum Tarihi', value: '30.01.2003' },
    { label: 'Eğitim', value: 'Balıkesir Üniversitesi, Bilgisayar Mühendisliği' },
    { label: 'E-posta', value: 'namdarnurullah73@gmail.com' },
    { label: 'Konum', value: 'Balıkesir, Türkiye' },
    { label: 'Diller', value: 'Türkçe, İngilizce' },
  ];

  return (
    <div className="about-page section">
      <div className="container">
        <SectionTitle 
          title="Ben Kimim" 
          subtitle="Beni ve hedeflerimi daha yakından tanıyın."
        />
        
        <div className="about-content">
          <div className="about-image">
            <img src="/images/okul.jpg" alt="Nurullah Namdar" />
          </div>
          
          <div className="about-text">
            <h3>Merhaba, Ben Nurullah Namdar</h3>
            <p>
              Merhaba! Ben, 2 yıldır Bilgisayar Mühendisliği okuyan bir üniversite öğrencisiyim. Kullanıcı deneyimini
              ön planda tutarak, çeşitli alanlarda projeler geliştirmeye yönelik adımlar izliyorum. C# , Python, Java
              gibi programlama dillerinin yanında HTML, CSS, React gibi ekosistemlerde yeterli düzeyde  olup
              modern  teknolojiler konusunda kendimi geliştirerek orta vadede bilgi ve deneyime sahip olacağım.
              Yazılım geliştirme konusunda tutkulu ve sürekli öğrenmeye açık bir öğrenciyim.
            </p>
            <p>
              Web geliştirme, mobil uygulama geliştirme ve veri analizi alanlarında kendimi geliştiriyorum. Modern teknolojileri kullanarak kullanıcı dostu ve etkileyici uygulamalar oluşturmayı seviyorum.
            </p>
            <p>
              Amacım, edindiğim bilgi ve becerileri kullanarak teknoloji dünyasına katkıda bulunmak ve yenilikçi çözümler üretmektir. Takım çalışmasına yatkın, analitik düşünebilen ve problem çözme becerileri güçlü bir yazılım geliştirici olma yolunda ilerliyorum.
            </p>

            <div className="personal-info">
              <div className="info-list">
                {personalInfo.map((info, index) => (
                  <div className="info-item" key={index}>
                    <span className="info-label">{info.label}:</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="#contact">
                <Button text="İletişime Geç" type="primary" />
              </a>
              <a href="/images/namdarcv.pdf" download>
                <Button text="CV İndir" type="outline" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;