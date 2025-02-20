import React from 'react';
import { motion, useInView } from 'framer-motion';
import Timer from '../utils/Timer'; // Import the Timer component

const ConferenceTimer = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 p-4 sm:p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            <div className="text-center text-xl sm:text-3xl font-extrabold mb-2 sm:mb-4 drop-shadow-md">
                🚀 Conference Starts In:
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-3xl">
                <Timer targetDate="2025-10-13T12:00:00" />
            </div>
        </motion.div>
    );
};

export default ConferenceTimer;