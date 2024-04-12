// import React, { Component } from "react";

// class FAQ extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       faqs: [
//         {
//           id: 1,
//           question: "What is Webflow and why is it the best website builder?",
//           answer:
//             "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
//           isOpen: false,
//         },
//         {
//           id: 2,
//           question: "What is Webflow and why is it the best website builder?",
//           answer:
//             "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
//           isOpen: false,
//         },
//         {
//           id: 3,
//           question: "What is Webflow and why is it the best website builder?",
//           answer:
//             "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
//           isOpen: false,
//         },
//       ],
//     };
//   }

//   toggleFAQ = (id) => {
//     const updatedFAQs = this.state.faqs.map((faq) => {
//       if (faq.id === id) {
//         return { ...faq, isOpen: !faq.isOpen };
//       }
//       return faq;
//     });
//     this.setState({ faqs: updatedFAQs });
//   };

//   render() {
//     return (
//       <div className="faq-container">
//         <h2>Frequently asked questions</h2>
//         {this.state.faqs.map((faq) => (
//           <div key={faq.id} className="faq">
//             <div className="question" onClick={() => this.toggleFAQ(faq.id)}>
//               <span>{faq.question}</span>
//               {faq.isOpen ? <span>-</span> : <span>+</span>}
//             </div>
//             {faq.isOpen && (
//               <div className="answer" style={{ backgroundColor: "#FAF8FF" }}>
//                 <p>{faq.answer}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default FAQ;

// FAQ.js
import React, { Component } from 'react';

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [
        { 
            question: "What is Webflow and why is it the best website builder?", 
            answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." 
        },
        { 
            question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?", 
            answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." 
        },
        { 
            question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?", 
            answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." 
        }
      ],
      expandedIndex: null
    };
  }

  toggleExpand = (index) => {
    this.setState(prevState => ({
      expandedIndex: prevState.expandedIndex === index ? null : index
    }));
  }

  render() {
    return (
      <div className="faq-container">
        <h2 style={{ color: "#6B3CC9" }}>Frequently asked questions</h2>
        {this.state.faqs.map((faq, index) => (
          <div key={index} className="faq-item" >
            <div className="question" style={{ color: index === this.state.expandedIndex ? "#6B3CC9" : "black" }} onClick={() => this.toggleExpand(index)}>
              {faq.question} <span className="icon">{index === this.state.expandedIndex ? "-" : "+"}</span>
            </div>
            {index === this.state.expandedIndex && (
              <div className="answer" style={{ backgroundColor: "#FAF8FF" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default FAQ;

