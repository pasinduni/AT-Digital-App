import React, { useState } from 'react';

const FAQ = () => {

    const [expanded, setExpanded] = useState(null);

    const toggleExpansion = (index) => {
      setExpanded(expanded === index ? null : index);
    };
  
    const faqs = [
      {
        question: 'What is Lorem Ipsum?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        question: 'Why do we use it?',
        answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        question: 'Where does it come from?',
        answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      },
    ];
  

  return (
    <div className="faq-section" style={{ backgroundColor: '#FAF8FF' }}>
    <h2 className="faq-header">Frequently Asked Questions</h2>
    <ul className="faq-list">
      {faqs.map((faq, index) => (
        <li key={index} className="faq-item">
          <div className="question-wrapper" onClick={() => toggleExpansion(index)}>
            <div className="question">{faq.question}</div>
            <div className={`icon ${expanded === index ? 'expanded' : ''}`}>{expanded === index ? '-' : '+'}</div>
          </div>
          {expanded === index && <div className="answer">{faq.answer}</div>}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default FAQ