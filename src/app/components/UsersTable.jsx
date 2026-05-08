import { Table } from "@heroui/react";

const UsersTable = ({ users }) => {
    console.log(users);

    const {name, email, role} = users;

    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-150">
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Role</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Email</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                users.map(user => (
                                    <Table.Row key={user._id}>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.role}</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                            </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default UsersTable;