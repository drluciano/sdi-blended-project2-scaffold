import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {CircleUser, User, UserPlus} from 'lucide-react';

const CreateUserModal = () => {

    const {setUsers} = useContext(UserContext);

    const userObject = {username: '', firstName: '', lastName: ''};

    const userCreator = (e) => {
        userObject.username = e.target.elements.username.value;
        userObject.firstName = e.target.elements.firstName.value;
        userObject.lastName = e.target.elements.lastName.value;

        const existingUsers = JSON.parse(localStorage.getItem('users')) ?? [];
        const newUserList = [...existingUsers, userObject];

        setUsers(newUserList);
        localStorage.setItem('users', JSON.stringify(newUserList));

        document.getElementById('create_user_modal').close();
        e.target.reset();
    };


    return (
        <>
            <dialog id="create_user_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Create New User</h3>
                    <div className={'divider'}/>
                    <form method={'dialog'} id={'userCreatorForm'} name={'userCreatorForm'} onSubmit={userCreator}>
                        <div className={'w-full'}>
                            <label className="input validator w-full">
                                <User/>
                                <input
                                    type="text"
                                    required
                                    placeholder="Desired Username"
                                    name={'username'}
                                    id={'username'}
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="3"
                                    maxLength="30"
                                    title="Only letters, numbers or dash"
                                />
                            </label>
                            <p className="validator-hint">
                                Must be 3 to 30 characters
                                <br/>containing only letters, numbers or dash
                            </p>
                        </div>
                        <div>
                            <label className="input validator w-full">
                                <CircleUser/>
                                <input
                                    type="text"
                                    required
                                    placeholder="First Name"
                                    name={'firstName'}
                                    id={'firstName'}
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="2"
                                    maxLength="20"
                                    title="Only letters, numbers or dash"
                                />
                            </label>
                            <p className="validator-hint">
                                Must be 2 to 20 characters
                                <br/>containing only letters, numbers or dash
                            </p>
                        </div>
                        <div>
                            <label className="input validator w-full">
                                <CircleUser/>
                                <input
                                    type="text"
                                    required
                                    placeholder="Last Name"
                                    name={'lastName'}
                                    id={'lastName'}
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="2"
                                    maxLength="20"
                                    title="Only letters, numbers or dash"
                                />
                            </label>
                            <p className="validator-hint">
                                Must be 2 to 20 characters
                                <br/>containing only letters, numbers or dash
                            </p>
                        </div>

                        <div className={'flex flex-row gap-2'}>
                            <div>
                                <input type="checkbox" className="toggle validator" required title="Required"/>
                                <p className="validator-hint">Required</p>
                            </div>
                            <p>I agree to the terms and conditions. There are none.</p>
                        </div>
                        <div className={'divider'}/>
                        <div className={'modal-action'}>
                            <button className={'btn btn-neutral w-full'} type={'submit'}><UserPlus/> Create User
                            </button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default CreateUserModal;