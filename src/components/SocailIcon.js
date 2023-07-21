
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const SocailIcon = () => {

    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/b73934169/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedin" /></a>
            <a href="https://github.com/vetur0220/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="github" /></a>
            <a href="https://www.cakeresume.com/vetur0220-40d61c" target="_blank" rel="noreferrer"><img src={navIcon3} alt="CV" /></a>
        </div>
    )
}
