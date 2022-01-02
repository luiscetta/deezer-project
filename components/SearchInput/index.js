import styles from '../../styles/SearchInput.module.css'

const searchInput = ({ value, onChange }) => {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <input
            className={styles.search_input}
            type="search"
            value={value}
            onChange={handleChange}
            placeholder="Artist, tracks, albums..." />
    )
}

export default searchInput;