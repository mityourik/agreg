import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__contact_info}>
        <a href="mailto:info@1eeg.ru" className={styles['header__contact-link']}>info@1eeg.ru</a>
        <a href="tel:+79774813028" className={styles['header__contact-link']}>+7 (977) 481-30-28</a>
      </div>
      <div className={styles['header__logo']}>
        <img src="logo.png" alt="Первая школа ЭЭГ-техников" className={styles['header__logo-image']} />
        <span className={styles['header__logo-text']}>Первая школа ЭЭГ-техников</span>
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
      <div className={styles['header__social-media']}>
        <a href="https://vk.com" className={styles['header__social-link']}><img src="vk-icon.png" alt="VK" /></a>
        <a href="https://youtube.com" className={styles['header__social-link']}><img src="youtube-icon.png" alt="YouTube" /></a>
      </div>
      <div className={styles['header__search']}>
        <input type="text" placeholder="Поиск" className={styles['header__search-input']} />
        <button type="submit" className={styles['header__search-button']}>🔍</button>
      </div>
    </header>
  );
};

export default Header;
