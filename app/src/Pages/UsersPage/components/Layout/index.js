import UserCard from "../../../../components/UserCard";


const UsersPageLayout = ({userList}) => {
        const {user1, user2, user3, user4} = userList

        const {name, age, city} = user1;
        const {name: name1, age: age1, city: city1} = user2;
        const {name: name2, age: age2, city: city2} = user3;
        const {name: name3, age: age3, city: city3} = user4;
        return (
                <div>
                        <UserCard name={name} age={age} city={city}/>
                        <UserCard name={name1} age={age1} city={city1}/>
                        <UserCard name={name2} age={age2} city={city2}/>
                        <UserCard name={name3} age={age3} city={city3}/>
                </div>
        );
};

export default  UsersPageLayout