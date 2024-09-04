import { useEffect, useState } from "react";
import Orders from "../components/Orders";
import { useLocation } from "react-router-dom";
import { deleteUser, getUserById, updateUser } from "../services/usersService";
import { FaEye, FaPhone, FaTimes } from 'react-icons/fa';
import { MdDeleteOutline, MdEdit, MdOutlineEmail } from "react-icons/md";
import { CiSaveUp1 } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";

const PersonalArea = () => {
    const location = useLocation();
    const { userId } = location.state || {};    
    const [userConected, setUserConected] = useState({});
    const [editMode, setEditMode] = useState({ userName: false, password: false });
    const [tempUserName, setTempUserName] = useState('');
    const [saveUserName, setSaveUserName] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const [savePassword, setSavePassword] = useState('');
    const [tempPhone, setTempPhone] = useState('');
    const [savePhone, setSavePhone] = useState('');
    const [tempEmail, setTempEmail] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUserById(userId);
                setUserConected(user);
                setTempUserName(user.userName);
                setSaveUserName(user.userName);
                setTempPassword(user.password);
                setSavePassword(user.password);
                setTempPhone(user.phone);
                setSavePhone(user.phone);
                setTempEmail(user.email);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchData();
    }, [userId]);

    const handleChange = (e) => {
        if (e.target.name === 'userName') setTempUserName(e.target.value);
        console.log('e.target.value:' + e.target.value);
        if (e.target.name === 'password') setTempPassword(e.target.value);
        if (e.target.name === 'phone') setTempPhone(e.target.value);
    };

    const handleSubmit = async (e) => {
        if (e === 'userName') setSaveUserName(tempUserName);
        if (e === 'password') setSavePassword(tempPassword);
        if (e === 'phone') setSavePhone(tempPhone);
        const userData = {
            userName: tempUserName,
            email: tempEmail,
            password: tempPassword,
            isDeleted: false,
            phone: tempPhone,
          };
        console.log('user data before sending:', JSON.stringify(userData, null, 2));
        try {
            setEditMode(false);
            await updateUser(userId, userData);
            alert('User details updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
        }
        if (e === 'userName') setSaveUserName(tempUserName);
        if (e === 'password') setSavePassword(tempPassword);
        if (e === 'phone') setSavePhone(tempPhone);
        console.log(userData);
    };

    const handleCancel = (field) => {
        if (field === 'userName') setTempUserName(userConected.userName);
        if (field === 'password') setTempPassword(userConected.password);
        if (field === 'phone') setTempPhone(userConected.phone);
        setEditMode(false);
    };

    const handleDelete = async () => {
        try {
            await deleteUser(userId);
            console.log(userId);
            alert('User deleted successfully');
        } catch (error) {
            console.log(userId);
            console.error('Error updating user:', error);
        }
    };

    return (
        <div id="personalArea">
            <h1>אזור אישי</h1>
            <div id="customerDetails">
                <div id="customerDetailsName"><h2>{userConected.userName || "פרטי הלקוח"}</h2><div id="userIcon"><FaUserLarge /></div></div>
                <div className="customerDate">{new Date(userConected.createdAt).toLocaleDateString()}</div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="field">
                        <div className='detailsIcons'><FaUserLarge /></div>
                        <label>שם: {editMode.userName ? (
                            <>
                                <input className='change' name='userName' value={tempUserName} onChange={handleChange}/>
                                <button className='change fail' type="button" onClick={() => handleSubmit('userName')}><CiSaveUp1 /></button>
                                <button className='change fail' type="button" onClick={() => handleCancel('userName')}><FaTimes /></button>
                            </>):(
                            <>
                                <span>{saveUserName}</span>
                                <MdEdit className='editIcon' onClick={() => setEditMode(prev => ({ ...prev, userName: true }))} />
                            </>)}
                        </label>
                    </div>
                    <div className="field">
                        <div className='detailsIcons'><FaEye /></div>
                        <label> סיסמה: {editMode.password ? (
                            <>
                                <input className='change' name='password' value={tempPassword} onChange={handleChange}/>
                                <button className='change fail' type="button" onClick={(e) => handleSubmit(e, 'password')}><CiSaveUp1 /></button>
                                <button className='change fail' type="button" onClick={() => handleCancel('password')}><FaTimes /></button>
                            </>):(
                            <>
                                <span className='password'>{savePassword}</span>
                                <MdEdit className='editIcon' onClick={() => setEditMode(prev => ({ ...prev, password: true }))} />
                            </>)}
                        </label>
                    </div>
                    <div className="field">
                        <div className='detailsIcons'><FaPhone /></div>
                        <label> טלפון: {editMode.phone ? (
                            <>
                                <input className='change' name='phone' value={tempPhone} onChange={handleChange}/>
                                <button className='change fail' type="button" onClick={(e) => handleSubmit(e, 'phone')}><CiSaveUp1 /></button>
                                <button className='change fail' type="button" onClick={() => handleCancel('phone')}><FaTimes /></button>
                            </>):(
                            <>
                                <span>{savePhone}</span>
                                <MdEdit className='editIcon' onClick={() => setEditMode(prev => ({ ...prev, phone: true }))} />
                            </>)}
                        </label>
                    </div>
                </form>
                <div id="noCangeDetails">
                    <div className='detailsIcons'><MdOutlineEmail /></div>
                    <div className="noChange">אימייל: <div className="noChangeIn"> {userConected.email}</div></div>
                    {/* <div className='detailsIcons'><FaPhone /></div>
                    <div className="noChange">טלפון: <div className="noChangeIn">{userConected.phone || '000-000-0000'}</div></div> */}
                </div>
                <div className="deleteUser" onClick={handleDelete}>מחק חשבון משתמש<MdDeleteOutline /></div>
            </div>
            <Orders orders={userConected.orders} />
        </div>
    );
};

export default PersonalArea;