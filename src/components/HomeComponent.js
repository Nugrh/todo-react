import React from 'react';
import TableComponent from './TableComponent';

export default function HomeComponent(props) {
    return (
        <div>
            <>
                <TableComponent users={props.users} />
            </>,
        </div>
    );
}
