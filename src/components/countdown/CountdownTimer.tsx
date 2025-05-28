import { useEffect, useState } from 'react';

import type { TimeLeft } from '../../lib/types';
// type Props = {};

const CountdownTimer = () => {
    const [targetDate] = useState(() => {
        const now = new Date();
        const target = new Date(now);
        target.setDate(now.getDate() + 179);
        target.setHours(target.getDate() + 23);
        target.setMinutes(target.getDate() + 52);
        target.setSeconds(target.getDate() + 40);
        return target;
    });

    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate.getTime() - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatTime = (value: number): string => {
        return value.toString().padStart(2, '0');
    };

    return (
        <div className="w-fit p-[1.5rem] rounded-[1.15rem] bg-white">
            <div className="flex items-center gap-6">
                <span className="">
                    <svg
                        className="w-[2rem]"
                        viewBox="0 0 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 9.75V6.75M13.75 4.5L12.25 3M5.5 1.5H8.5M7 15.75C3.68629 15.75 1 13.0637 1 9.75C1 6.43629 3.68629 3.75 7 3.75C10.3137 3.75 13 6.43629 13 9.75C13 13.0637 10.3137 15.75 7 15.75Z"
                            stroke="#3B82F6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
                <span className="inline-block text-[1.45rem] text-[#3b82f6]">
                    Early access ends in: {timeLeft.days}d {formatTime(timeLeft.hours)}h{' '}
                    {formatTime(timeLeft.minutes)}m {formatTime(timeLeft.seconds)}s
                </span>
            </div>
        </div>
    );
};

export default CountdownTimer;
