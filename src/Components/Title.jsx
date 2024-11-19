import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Title = () => {

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        if(location.pathname.startsWith('/experiances/')) {
            const cardDetail = path.split('/')[2];
            document.title = `Experiance ${cardDetail} | EcoWander`;
        }else {

                switch(location.pathname) {
                    case '/':
                        document.title = 'Home | EcoWander';
                        break;
                    case '/profile':
                        document.title = 'Profile | EcoWander';
                        break;
                    case '/update-profile':
                        document.title = 'Update Profile | WcoWander';
                        break;
                    case '/login':
                        document.title = 'Login | EcoWander';
                        break;
                    case '/register':
                        document.title = 'Register | EcoWander';
                        break; 
                    case '/about':
                        document.title = 'About | EcoWander'   
                        break; 
                    case '/contact':
                        document.title = 'About | EcoWander'   
                        break;     
                    default:
                        document.title = 'EcoWander';
                        break 
                        
                    }       
        }
    }, [location])

    return null;
};

export default Title;