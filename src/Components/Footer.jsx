
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
    const {dataState}= useContextGlobal()
        return (
            <footer className={dataState.theme ? 'light':'dark'} >
                <p>Castro Jonathan</p>
            
            </footer>
        )
}

export default Footer
