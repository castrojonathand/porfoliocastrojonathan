
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
    const {dataState}= useContextGlobal()
        return (
            <footer className={dataState.theme ? 'light':'dark'} >
                <p>Powered by</p>
            
            </footer>
        )
}

export default Footer
