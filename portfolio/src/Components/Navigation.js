import { useEffect, useState } from "react";
import '../App.scss';
import 'boxicons';

const Navigation = () => {
    const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
         /** Change nav style based on initial window size */
        if (window.innerWidth > 480) {
            setShowMobileNavMenu(false);
            
        } else if (window.innerWidth < 480) {
            setShowMobileNavMenu(true);
        }
    }, []);

    useEffect(() => {
        /** Change nav style based on window size */
        const handleResize = () => {
            if (window.innerWidth > 480) {
                setShowMobileNavMenu(false);
                setMobileNavOpen(false);
            } else if (window.innerWidth < 480){
                setShowMobileNavMenu(true);
            }
        };

        /** Detect change in window's size */
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return(
        <div className="header">
        {/** Logo here */}
        <p className="header__logo">Jorick.</p>

        {/** button management */}
        <div className="header__btn" 
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
           {mobileNavOpen 
           ?<box-icon name='x'></box-icon>
           :<box-icon name='menu' className="header__btn-open"></box-icon>} 
        </div>

        {/** Navigation items here */}
        {showMobileNavMenu
        ?   mobileNavOpen && 
                <div className="header__navigation slide">
                    <a href="#" className="item-1">Projects</a>
                    <a href="#" className="item-2">About</a>
                </div>
        :   <div className="header__navigation slide">
                <a href="#" className="item-1">Projects</a>
                <a href="#" className="item-2">About</a>
            </div>
        }
      </div>
    );
}

export default Navigation;