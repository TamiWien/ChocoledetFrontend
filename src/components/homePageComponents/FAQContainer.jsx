import React, { useState } from 'react';
import FAQ from './FAQ';

const FAQContainer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        { question: 'לאלו גילאים הסדנה מתאימה?', answer: 'הסדנה מתאימה החל מגיל 6 מומלץ בליווי מבוגר\n מגיל 10 מתאימה גם כסדנה עצמאית\n הסדנה היא כיף גדול למבוגרים, מתאים למסגרת המשפחה, חברים או עבודה' },
        { question: 'מה לגבי הזמנות ומשלוחים?', answer: 'מומלץ להזמין חודש מראש, אפשר עד שבוע לפני האירוע \n הסדנה נשלחת אליכם ישירות למקום האירוע \n שריינו במקום האירוע: מקום ישיבה מקורר למניעת המסה של השוקולד, משטח עבודה נוח לכל משתתף, מקרוגל או מים רותחים להמסת השוקולד שמגיע במזרקים' },
        { question: 'האם יש הגבלה על כמות המוזמנים?', answer: 'אין הגבלה על כמות המוזמנים\n מינימום הזמנה – 10 ערכות' },
        { question: 'האם הסדנה מתאימה לטבעונים או אלרגניים?', answer: 'כל המוצרים בערכה פרווה בכשרות העדה החרדית, השוקולד מריר ואיכותי. הערכה מתאימה לטבעונים. לגבי אלרגנים, מומלץ לפנות אלינו לברר על המוצרים באופן אישי' },
        { question: 'האם הסדנה מתאימה לקיץ?', answer: 'אם אתם מעוניינים לערוך את הסדנה בקיץ, חשוב למצוא מקום ממוזג היטב וכן נמליץ לכל המשתתפים לשטוף ידיים במים קרים לפני הפעילות.' },
    ];

    const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id='faq'>
        <h1>שאלות נפוצות</h1>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <FAQ
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isActive={activeIndex === index}
                        onClick={() => handleQuestionClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQContainer;
