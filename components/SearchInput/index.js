import styles from '../../styles/SearchInput.module.css'

const searchInput = ({ value, onChange }) => {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.search_input}
                type="search"
                value={value}
                onChange={handleChange}
                placeholder="Artist, track, album..."
                autoComplete="off"
            />
            <span className={styles.search_span}>Search</span>
        </div>
    )
}

export default searchInput;