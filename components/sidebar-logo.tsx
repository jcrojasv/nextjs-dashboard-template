import { useTheme } from "next-themes";
import { GiArtificialIntelligence } from "react-icons/gi";


export const SideBarLogo=()=>
{
    const { theme } = useTheme();
    return (
        <span className={theme === 'dark' || theme === 'custom' ? 'text-white' : 'text-black'}>
            < GiArtificialIntelligence className="mx-3.5" size={40}/>
        </span>
    )
}