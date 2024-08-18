import React, { useEffect, useState } from 'react';

const Contact = () => {

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [desiredDate, setDesiredDate] = useState('');
    const [quantity, setQuantity] = useState(10);
    const [kitType, setKitType] = useState('basic');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const nextYear = new Date();
        nextYear.setFullYear(nextYear.getFullYear() + 1);
        const maxDate = nextYear.toISOString().split('T')[0];

        setMinDate(today);
        setMaxDate(maxDate);
    }, []);

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
                desiredDate,
                quantity,
                kitType,
                additionalInfo
            });
        }
    };

  return (
    <div id='contact'>
        <h1>צרו קשר לאירוע מתוק במיוחד</h1>
        <div>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="שם מלא:"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="טלפון:"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="אימייל:"
                    />
                </div>
            </div>
            <div className="form-row second-row">
                <div className="form-group date">
                    <label htmlFor="desiredDate">תאריך רצוי לסדנה:</label>
                    <input
                        type="date"
                        id="desiredDate"
                        name="desiredDate"
                        value={desiredDate}
                        onChange={(e) => setDesiredDate(e.target.value)}
                        min={minDate}
                        max={maxDate}
                    />
                </div>
                <div className="form-group quantity">
                    <label htmlFor="quantity">כמות ערכות:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        min="10"
                        max="1000"
                        required
                    />
                </div>
                <div className="form-group kitType">
                    <label htmlFor="kitType">סוג ערכה לבחירה:</label>
                    <select
                        id="kitType"
                        name="kitType"
                        value={kitType}
                        onChange={(e) => setKitType(e.target.value)}
                    >
                        <option value="basic">ערכות בסיסיות</option>
                        <option value="upgraded">ערכות משודרגות</option>
                        <option value="premium">ערכות פרימיום - מומלץ!</option>
                        <option value="custom">בהתאמה אישית (כתבו לנו על זה)</option>
                    </select>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group full-width">
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="משהו נוסף? כתבו לנו כאן..."
                    />
                </div>
            </div>
            <button type="submit">שלח</button>
        </form>
        </div>
    </div>
  )
}

export default Contact
