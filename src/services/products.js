
import axios from "axios"

const getAllProducts = async () =>{
    try {
        const res = await axios.get('https://localhost:7046/api/Products')
        return res.data.products
    } catch (error) {
        throw error;
    }
}

export default getAllProducts
