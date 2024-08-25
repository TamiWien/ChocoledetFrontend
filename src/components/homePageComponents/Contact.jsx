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
        <div id='contactRight'>
            <h2>Sweet <br/> Home</h2>
            <h1>הזמנת סדנאות</h1>
        </div>
        <div id='contactLeft'>
            <div id='contactLeftText'>
                <p>אירועים פרטיים / עסקיים המלווים בחוויה יוצאת דופן עם סדנת שוקולד מפנקת במיוחד ושלל קישוטים מתוקים ייחודיים. </p>
                <p><b>אירועים פרטיים:</b> ימי הולדת, בר/בת מצווה, ימי נישואים, מפגשים משפחתיים, מסיבות רווקים/ות או כל אירוע פרטי אחר.</p>
                <p><b>אירועים עסקיים:</b>  אירועי חברה, כנסים, ימי כיף וגיבוש, השקת מוצר, אירועי לקוחות ועוד.</p>
            </div>
            <h2>צרו קשר לאירוע מתוק במיוחד</h2>
            <form id='form' onSubmit={handleSubmit}>
                <div id='formFlex'>
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
                    {/* <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="אימייל:"
                    /> */}
                </div>
                <div id='formFlex'>
                    <div>
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
                    <div>
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
                    <div>
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
                <div id='formFlex'>
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="משהו נוסף? כתבו לנו כאן..."
                    />
                </div>  
                <button type="submit">שלח</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
