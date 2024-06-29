import { useState } from 'react';

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'About the program',
            answer:
                'A disruptive one year tech academy to the existing tradition. We help you become a global citizen through acquisition of IT demand skills and careers of the future. Our program is a year long IT career specialization.',
            isOpen: false,
        },
        {
            question: 'What is the USP of the program?',
            answer:
                'In order to make it competitive and rewarding for all, during the training we connect our students to recruiters and career mentors with industry experience on remote arrangement mostly to develop the individual on a weekly basis. The rest is real time virtual classroom and chat room for feedback between students and mentor/instructors.',
        },
        {
            question: 'Do we offer course clarity?',
            answer:
                'We have course clarity and Q/A sessions to further deepen understanding and prepare for career opportunities. The instructors and career mentors with industry experience work with our students along different courses and career paths.',
        },
        {
            question: 'When is admission?',
            answer:
                'Admission is open for January 2023 batch and we are taking only 100 for this first batch of the program. We run 3 admissions in a year. Admission is from age 15+ Closing date - January 14th, 2023',
        },
        {
            question: 'What is the enrollment criteria?',
            answer: 'Anyone can enroll, no prerequisite skill or certificate required.',
        },
        {
            question: 'What is the nature of the program?',
            answer:
                'Our main courses in each track are 100% e-learning authored provided with instructor tools that has won best platform 7 years consecutively (Codie awards, USA).\n- Online self-paced\n- Offline mode (mobile app)\n- Instructor guide\n- Lab for practice and exam preparation\n- Test / Assessment\n- Projects\n- Onsite campus (available)',
        },
        {
            question: 'What are the benefits?',
            answer:
                '- Job placement\n- Internship Work experience\n- Certification (industry vendors)\n- Travel abroad opportunity\n- Networking\n- Flexible (Learn from anywhere)\n- Pay as you go\n- Scholarship/Discount',
        },
        {
            question: 'Is there discount/scholarship available?',
            answer: 'Yes, it is available.',
        },
        {
            question: 'Any study loan?',
            answer: 'Study loan is available (terms apply).',
        },
        {
            question: 'What are the career paths available?',
            answer:
                'Career Pathways available in Codefest\n\n1. Cyber Security\n2. Web Developer\n3. Programmer/Software Engineer\n4. Designer\n5. Project Manager\n6. Data Analyst/Scientist\n7. Mobile App Developer\n8. Computer Technician\n9. Computer Network Manager\n10. Microsoft Professional\n11. Business Analyst / Manager',
        },
        {
            question: 'What is the program outline?',
            answer:
                'Trimester 1\n- Course training path (Basic - Intermediate)\n- Assessment\n- Personal Development and career development program\n- Research (Product and Industry)\n\n Trimester 2\n- Training specialization\n- Assessment\n- Industry Expert mentorship program\n- Lab work & Project\n- Personal development and career development program\n\nTrimester 3\n- Job placement program\n- Projects and internship\n- Certifications (Vendors)\n- Assessment',
        },
        {
            question: 'What is the pedigree of CODEFEST?',
            answer:
                'We have piloted this academy with enrollment of 25+ students starting August 2022. Since 2019, we have helped over 5,000 discover STEM career through our partnership model with schools and universities with our signature bootcamp.',
        },

    ]);

    const toggleFAQ = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) => {
                if (i === index) {
                    return { ...faq, isOpen: !faq.isOpen };
                } else {
                    return { ...faq, isOpen: false };
                }
            })
        );
    };

    return (
        <div className="max-w-xl mx-auto mt-20 bg-white bg-opacity-30 rounded-xl p-6 backdrop-filter backdrop-blur-lg bg-clip-padding">
            <h2 className="text-2xl font-bold text-white mb-4">FAQs</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="cursor-pointer bg-white bg-opacity-30 rounded-lg p-4 transition-colors duration-300 hover:bg-opacity-40"
                    >
                        <div className="flex items-center justify-between" onClick={() => toggleFAQ(index)}>
                            <h3 className="text-lg text-white font-medium">{faq.question}</h3>
                            <svg
                                className={`w-6 h-6 transition-transform duration-300 transform ${faq.isOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {faq.isOpen && <p className="pl-6 mt-2 text-lg text-white">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
