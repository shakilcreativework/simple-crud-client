import UsersTable from "../components/UsersTable";
import { deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

const UsersPage = async() => {

    const users = await getUsers();
    // console.log(users);

    return (
        <div>
            <h2>Users : {users.length}</h2>
            <div>
                <UsersTable users={users} deleteUserAction = {deleteUser} />
            </div>
        </div>
    );
};

export default UsersPage;