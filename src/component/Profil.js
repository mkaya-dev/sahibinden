import React from "react";
import "../pages/All.css"
const Profile = () => {
    const [scrollTop, setScrollTop] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 340) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className="wrapper block-one"></div>
            <div className="wrapper block-two"></div>
            <div className="wrapper block-three"></div>
            <div className="wrapper block-four"></div>
            <div className="wrapper block-five"></div>
            {scrollTop && (
                <button onClick={bottomToTop} className="backToTop">
                    &#8593;
                </button>
            )}
        </>
    );
};
export default Profile;