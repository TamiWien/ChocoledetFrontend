import React, { useState } from 'react'

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (quantity < 10 || quantity > 1000) {
            alert('מספר הערכות חייב להיות בין 10 ל-1000.');
        } else {
            // Process form submission
            console.log({
                fullName,
                phone,
                email,
                additionalInfo
            });
        }
    };

  return (
    <div id='contactUs'>
        <h1>צרו קשר</h1>
        <div id="contactUsContainer">
        <h2>מלאו את הפרטים ונחזור אליכם</h2>
        <form onSubmit={handleSubmit}>
            <div id="contactUsForm">
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="שם מלא:"
                    required
                />
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="טלפון:"
                    required
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="אימייל:"
                />
            </div>
            <div className="form-row">
                <div className="form-group full-width">
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="הודעה"
                    />
                </div>
            </div>
            <button type="submit">שלח</button>
        </form>
        </div>
    </div>
  )
}

export default ContactUs