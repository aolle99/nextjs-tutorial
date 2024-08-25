import '@/app/ui/global.css';

export default function PublicLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className={`min-h-screen flex flex-col justify-between`}>
        {children}
        <footer className="flex justify-center items-center h-20 bg-gray-800 text-white">
            <p>Footer</p>
        </footer>
        </div>
    );
}
