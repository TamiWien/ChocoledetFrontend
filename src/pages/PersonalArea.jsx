import { useEffect, useState } from "react";
import Orders from "../components/Orders";
import { useLocation } from "react-router-dom";
import { getUserById } from "../services/usersService";

const PersonalArea = () => {

    const location = useLocation();
    const { userId } = location.state || {};
    
    console.log("user PersonalArea:" + userId);
    
    const [userConected, setUserConected] = useState([]);
   
    const fetchData = async () => {
        try {
            const user = await getUserById(userId);
            setUserConected(user);  
            console.log("user PersonalArea:" + userId);
            console.log("user.orders:", user.orders);
      } catch (error) {
          console.error('Error fetching users:', error);
      }
  };
  
  useEffect(() => {
      fetchData();
  },  [userId]);

    return (
      <div id="personalArea">
        <h1>אזור אישי</h1>
        <div id="customerDetails">
            <h2>פרטי הלקוח</h2>
            <p>שם: {userConected.userName}</p>
            <p>מייל: {userConected.email}</p>
            <p>טלפון: {userConected.password}</p>
        </div>
        <Orders orders={userConected.orders} />
      </div>
    );
  };
  
  export default PersonalArea;