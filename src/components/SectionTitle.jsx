import './SectionTitle.css';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2>{title} <span className="primary-color">.</span></h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;