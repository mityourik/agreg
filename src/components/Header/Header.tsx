import styles from './Header.module.scss';
import Search from './Search/Search';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles['header__contact-info']}>
            <div className={styles['header__contact-info__mail-and-phone__container']}>
                <a href="mailto:info@1eeg.ru" className={styles['header__contact-link_mail']}>info@1eeg.ru</a>
                <a href="tel:+79774813028" className={styles['header__contact-link_phone']}>+7 (977) 481-30-28</a>
            </div>
            <div className={styles['header__contact-info__social-and-search__container']}>
                <div className={styles['header__social-media']}>
                    <a href="https://vk.com" className={styles['header__social-link_vk']}/>
                    <a href="https://youtube.com" className={styles['header__social-link_youtube']}/>
                </div>
                <Search />
            </div>
        </div>
        <div className={styles['header__logo-and-nav']}>
            <div className={styles['header__logo']}>
                <img src="logo.png" alt="Первая школа ЭЭГ-техников" className={styles['header__logo-image']} />
            </div>
            <nav className={styles['header__nav']}>
                <ul className={styles['header__nav-list']}>
                <li className={styles['header__nav-item']}><a href="#about" className={styles['header__nav-link']}>О школе</a></li>
                <li className={styles['header__nav-item']}><a href="#training" className={styles['header__nav-link']}>Обучение</a></li>
                <li className={styles['header__nav-item']}><a href="#information" className={styles['header__nav-link']}>Информации</a></li>
                <li className={styles['header__nav-item']}><a href="#conference" className={styles['header__nav-link']}>Конференция</a></li>
                <li className={styles['header__nav-item']}><a href="#clinical-work" className={styles['header__nav-link']}>Клиническая работа</a></li>
                <li className={styles['header__nav-item']}><a href="#contacts" className={styles['header__nav-link']}>Контакты</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
