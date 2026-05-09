import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
    const { userId } = await params;
    // console.log(userId);

    const user = await getUserById(userId);
    // console.log('editing user', user);

    // update user wrapper for passing user and form data
    const updateUserWrapper = async(formData) => {
        'use server';
        return updateUser(userId, formData);
    };

    return (
        <div>
            <h2>User Edit Page</h2>
            <div className="w-1/2 mx-auto">
                <form action={updateUserWrapper} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" defaultValue={user?.name} type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" defaultValue={user?.role} type="text">
                        <Label>Role</Label>
                        <Input placeholder="Enter user role" />
                    </TextField>
                    <div className="flex gap-2">
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" slot="close">New User</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserEditPage;