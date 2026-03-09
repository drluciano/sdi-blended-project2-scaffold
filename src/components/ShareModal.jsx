import {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext.jsx';

const ShareModal = ({data, handleShare}) => {

    const {users, currentUser} = useContext(UserContext);
    const filteredUsers = users.filter((user) => currentUser !== user.username) ?? [];
    const [selectedUser, setSelectedUser] = useState('');

    if (!data) return <dialog id="my_modal_4" className={'modal'}></dialog>;

    return (
        <>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Choose another user to share this plan with.</h3>
                    <h2>This will give them a copy of the plan.</h2>
                    <select defaultValue="Pick a user" className="select"
                            onChange={(e) => setSelectedUser(e.target.value)}>
                        <option disabled={true}>Pick a user</option>
                        {filteredUsers.map((user, index) => (
                            <option key={index}>{user.username}</option>
                        ))}
                    </select>
                    <div className={'flex flex-col gap-2 justify-end mt-5'}>
                        <button className={'btn btn-error'} onClick={() => handleShare(data, selectedUser)}>Share
                        </button>
                        <button className={'btn btn-primary'}
                                onClick={() => document.getElementById('my_modal_4').close()}>Cancel
                        </button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default ShareModal;