import styles from './styles.module.scss';

const UserCard = ({name, age ,city}) => {

        return (
                <div 
                className={styles.wrapper}
                style={{marginRight: 20,
                        marginLeft: 20}}
                >
                        <h1>Name: {name}</h1>
                        <h2>Age: {age}</h2>
                        <h3>City: {city}</h3>
                </div>
        )
}

export default UserCard