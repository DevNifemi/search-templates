import React from 'react';
import './template-card.styles.css'

const TemplateCard = ({ data }) => {
    
  return (
        <div className='template-grid d-center'>
            {
                data.map((d, idx) => (
                    <div key={idx} className='template-card'>

                        <div className='template-card-desc'>
                            <h3>{d.name}</h3>
                            <p>{d.description}</p>
                        </div>

                        <div className='template-link'>
                            <a  href={d.link}>Use Template</a>
                        </div>
                    </div>
                ))
            }
        </div>
      
    
  )
};

export default TemplateCard;
