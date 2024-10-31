export default function ChatWidget() {
    return <>
        <div className="fixed bottom-6 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.077 19.692 7.8 19.14L3 20L4.3 15.9C3.486 14.664 3 13.246 3 12C3 7.582 7.03 4 12 4C16.97 4 21 7.582 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    </>
}