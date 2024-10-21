import '../styles/globals.css';

export const metadata = {
    title: {
        default: 'Davi Alves'
    }
};

export default function RootLayout({ children }) {

    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/crown.svg" color='white' sizes="any" />
            </head>
            <body>
                <div  >
                    <div>
                        <div className="grow">{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
