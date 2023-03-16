import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
const Transition: FC<{children: ReactNode}> = ({ children }) => {
    const { asPath } = useRouter();
    const variants = {
        out: {
            opacity: 0,
            y: 0,
            x: -2500,
            transition: {
                duration: 0.50
            }
        },
        inactive: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 1.5,
            },
          },
        in: {
            opacity: 0,
            y: 0,
            x: 2400,
            transition: {
                duration: 0
            }
        }
    };

    return (
        <div className="effect-1">
            <AnimatePresence
                initial={false}
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="inactive"
                    initial="in"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;