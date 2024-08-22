export type Loading = {
    size?: string | number,
    align?: 'start' | 'center' | 'end'
}

function LoadingComponent({ size = '120px', align = "center" }: Loading) {
    return (
        <div className={`flex-1 flex items-center justify-${align}`}>
            <div
                className="relative flex items-center justify-center"
                style={{ height: size, width: size }}
            >
                <div className="absolute inset-0 rounded-full opacity-75"></div>
                <div
                    className="animate-spin rounded-full border-t-4 border-blue-500"
                    style={{ height: '100%', width: '100%' }}
                />
            </div>
        </div>
    );
}

export default LoadingComponent;
