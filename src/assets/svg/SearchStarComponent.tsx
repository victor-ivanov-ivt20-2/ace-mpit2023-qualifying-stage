import {motion} from 'framer-motion'

const SearchStar = () => {
    return (
        <motion.div
        initial={{rotate: 0}}
        animate={{rotate: 360}}
        transition={{duration: 10, repeat: Infinity, ease: 'linear'}}
        >
            <svg width="89" height="87" viewBox="0 0 89 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="38.3037" width="10.1392" height="86.7467" fill="#317DFC" />
                <rect x="10.1387" y="17.3084" width="10.1392" height="86.7467" transform="rotate(-45 10.1387 17.3084)" fill="#317DFC" />
                <rect x="2.25293" y="48.4427" width="10.1392" height="86.7467" transform="rotate(-90 2.25293 48.4427)" fill="#317DFC" />
                <rect y="48.4427" width="10.1392" height="86.7467" transform="rotate(-90 0 48.4427)" fill="#317DFC" />
                <rect x="71.4785" y="7.88605" width="10.1392" height="86.7467" transform="rotate(45 71.4785 7.88605)" fill="#317DFC" />
            </svg>
        </motion.div>

    )
}

export default SearchStar