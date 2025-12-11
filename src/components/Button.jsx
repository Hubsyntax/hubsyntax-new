export default function Button({ text, icon, className = "", onClick, children }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-[10px] text-[18px] ${className}`}
        >
            {text || children}
            {icon && (
                <div className="btn-img">
                    <img src={icon} alt="" className="w-auto" />
                </div>
            )}
        </button>
    );
}