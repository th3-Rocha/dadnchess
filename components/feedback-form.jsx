'use client';

import { useState } from 'react';
import { Card } from './card';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className=" container max-w-2xl  mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <form name="feedback" onSubmit={handleFormSubmit} className="text-black flex flex-col gap-3 align-center" netlify>
                <input type="hidden" name="form-name" value="feedback" />
                <input name="name" type="text" placeholder="Nome" required className="input input-bordered" />
                <input name="email" type="text" placeholder="Email" className="input input-bordered" />
                <input name="message" type="text" placeholder="Mensagem" required className="input input-bordered" />
                <button className="w-full btn btn-primary mb-8" type="submit" disabled={status === 'pending'}>
                    Submit
                </button>

                {status === 'ok' && (
                    <div className="alert alert-success mb-8" >
                        <SuccessIcon />
                        Enviado!
                    </div>
                )}
                {status === 'error' && (
                    <div className="alert alert-error mb-8">
                        <ErrorIcon />
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
function ErrorIcon(success) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
