import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
        <input type="text" placeholder="Поиск" className={styles['search__search-input']} />
        <button type="submit" className={styles['search__search-button']}/>
    </div>
  )
}

export default Search;
