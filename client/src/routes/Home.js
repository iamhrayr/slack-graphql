import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Home = () => (
    <Query query={allUsersQuery}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);
        }}
    </Query>
);

const allUsersQuery = gql`
    {
        allUsers {
            id
            email
        }
    }
`;

export default Home;
