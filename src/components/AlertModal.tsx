import {Button, Modal} from "flowbite-react";

export default function AlertModal({title,message,isOpen,onClose,onAccept}:any) {
    return (
        <>
            <Modal dismissible show={isOpen} onClose={onClose}>
                <Modal.Header>{title}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {message}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onAccept}>I accept</Button>
                    <Button color="gray" onClick={onClose}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
