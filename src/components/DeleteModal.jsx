const DeleteModal = ({data, handleDelete}) => {

    if (!data) return <dialog id="my_modal_3" className={'modal'}></dialog>;

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to
                        delete {data.details.name}?</h3>
                    <h2>This action is irreversible (for now).</h2>
                    <div className={'flex flex-col gap-2 justify-end mt-5'}>
                        <button className={'btn btn-error'} onClick={handleDelete}>Delete</button>
                        <button className={'btn btn-primary'}
                                onClick={() => document.getElementById('my_modal_3').close()}>Cancel
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

export default DeleteModal;