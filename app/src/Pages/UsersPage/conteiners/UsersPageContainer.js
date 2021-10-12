import React from 'react';
import UsersPageLayout from '../components/Layout';


class UsersPageContainer extends React.Component {
        render() {
                const users = {
                        user1: {
                                age: 25,
                                name: 'Alex',
                                city: 'Minsk'
                        },
                        user2: {
                                age: 23,
                                name: 'Oleg',
                                city: 'Minsk'
                        },
                        user3: {
                                age: 32,
                                name: 'Max',
                                city: 'Minsk'
                        },
                        user4: {
                                age: 22,
                                name: 'Maria',
                                city: 'Minsk'
                        }
                }
                return (
                        <UsersPageLayout userList={users}/>
                );
        };
};

export default UsersPageContainer