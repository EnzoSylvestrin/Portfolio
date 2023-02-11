import { Player } from '@lottiefiles/react-lottie-player';

export type Loading = {
    w?: string | number,
    h?: string | number,
    align?: 'start' | 'center' | 'end'
}

function LoadingComponent({ w = '80px', h = '80px', align = "center" }: Loading) {
    return (
        <div className={`flex-1 flex items-center justify-${align}`}>
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_usmfx6bp.json"
                style={{ height: h, width: w }}
            >
            </Player>
        </div>
    );
}

export default LoadingComponent;