import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function PageTransition({ children }: Props) {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={router.pathname}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
