import { SideNavItemGroup } from "@/types/type";
import { BsHouseDoor } from "react-icons/bs";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";


export const SIDENAV_ITEMS: SideNavItemGroup[] = [

    {
        title: "Dashboards",
        menuList: [{
            title: 'Dashboard',
            path: '/',
            icon: <BsHouseDoor size={20} />,
        }]
    },
    {
        title: "AI",
        menuList: [
            {
                title: 'Voice Recognition',
                path: '/voice-recognition',
                icon: <MdOutlineSettingsVoice size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'Speech to text', path: '/voice-recognition' },
                    { title: 'Streaming', path: '/streaming' },
                ],
            },
        ]
    },

];