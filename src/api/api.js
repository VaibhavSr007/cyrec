import axios from "axios";


export const getPlacesData = async (ip) =>{
    try{                                          
        const { data: {data}} = await axios.get(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_mpgHtw2z1PN1o2ZdlrH8wLvcHho3n&ipAddress=${ip}`);
        return data;
    }
    catch(e){
        console.log(e);
    }
}