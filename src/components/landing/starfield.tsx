type Star = {
    left: string;
    top: string;
    size: number;
    duration: string;
    delay: string;
};

function createStars(count: number, seed: number): Star[] {
    let state = seed;
    const random = () => {
        state = (state * 9301 + 49297) % 233280;
        return state / 233280;
    };

    return Array.from({ length: count }, () => {
        const size = random() < 0.15 ? 3 : random() < 0.5 ? 2 : 1;
        return {
            size,
            left: `${(random() * 100).toFixed(2)}%`,
            top: `${(random() * 72).toFixed(2)}%`,
            duration: `${(2.5 + random() * 4).toFixed(2)}s`,
            delay: `${(random() * 4).toFixed(2)}s`,
        };
    });
}

const stars = createStars(80, 7);

export function Starfield() {
    return (
        <div aria-hidden="true" className="absolute inset-0">
            {stars.map((star, index) => (
                <span
                    key={index}
                    className="absolute animate-twinkle rounded-[99px] bg-ember-50"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                        animationDuration: star.duration,
                        animationDelay: star.delay,
                    }}
                />
            ))}
        </div>
    );
}
