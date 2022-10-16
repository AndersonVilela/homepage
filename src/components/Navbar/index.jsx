import GitHub from '../../assets/GitHub.png';
import Summer from '../../assets/Summer.png';
import Style from './styles.module.css';

export default function Navbar() {





  return (
    <div className={Style.container}>
      <ul className={Style.list}>
        <li className={`${Style.links} ${Style.logoLink} `}>
          <a className={`${Style.restLink}`}>
            <span className={Style.linkLogo}>A</span>nderson Vilela
          </a>
        </li>
        <li className={Style.links}>
          <a className={Style.navLink}>
            Projects
          </a>
        </li>
        <li className={Style.links}>
          <a className={Style.navLink}>
            Contact
          </a>
        </li>
        <li className={Style.links}>
          <a className={`${Style.navLink} ${Style.gitLink}`}>
            <img src={GitHub} className={Style.gitImage} />Source
          </a>
        </li>
      </ul>
    </div>

  );
}
