import { FeedbackForm } from 'components/feedback-form';

export const metadata = {
    title: 'Contact Davi'
};


export default async function Page() {
    return (
        <>
            <h1>Entrar em contato</h1>
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}