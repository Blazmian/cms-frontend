import { CDBIcon } from "cdbreact"
import { useEffect, useState } from "react"
import { Button, Stack, Toast, ToastContainer } from "react-bootstrap"
import toast from "react-hot-toast"

const ToastManager = ({ title, text, showToast, t }) => {

    return (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-100 bg-light shadow-lg rounded-2 pointer-events-auto d-flex ring-1 ring-black ring-opacity-5`}>
            <div className="p-3">
                <Stack direction="horizontal" className="justify-content-start align-items-center">
                    <img
                        height={40}
                        width={40}
                        className="rounded-5"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                    />
                    <Stack className="ms-3">
                        <p className="fw-medium m-0">Emilia Gates</p>
                        <p style={{ color: '#939393' }} className="m-0">Sure! 8:30pm works great!</p>
                    </Stack>
                </Stack>
            </div>
            <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Close
            </button>
        </div>
    )
}

export default ToastManager