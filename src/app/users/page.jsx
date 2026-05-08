import AddUserModal from "../components/AddUserModal";
import UsersTable from "../components/UsersTable";
import { deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

const UsersPage = async () => {

    const users = await getUsers();
    // console.log(users);

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2>Users : {users.length}</h2>
                <AddUserModal />
            </div>
            <div>
                <UsersTable users={users} deleteUserAction={deleteUser} />
            </div>
        </div>
    );
};

export default UsersPage;