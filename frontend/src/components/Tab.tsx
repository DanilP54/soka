import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import PostsList from './posts_list/PostsList';
import CreatePostForm from './create_post_form/createPostForm';
import { GiCursedStar } from "react-icons/gi";
import { IconButton } from '@mui/joy';

const TabsLayout = () => {
    return (
        <Tabs aria-label="Basic tabs" defaultValue={0}>
            <TabList disableUnderline sx={{
                [`&& .${tabClasses.root}`]: {
                    backgroundColor: 'rgba(fff,fff,fff, .3)',
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    flexGrow: 1,
                    bgcolor: 'transparent',
                    '&:hover': {
                        bgcolor: 'rgba(0,0,0, .1)',
                    },
                    [`&.${tabClasses.selected}`]: {
                        // color: 'primary.plainColor',
                        '&::after': {
                            height: 2,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                            bgcolor: 'primary.500',
                        },
                    },
                },
                border: 'none',
                position: 'sticky',
                top: 0,
                zIndex: 111,
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Tab
                    variant='outlined'
                    indicatorInset
                    sx={{
                        color: 'black',
                        flexGrow: 1,
                        "--Tab-indicatorSize": "50px",
                        "--Tab-indicatorThickness": "3px",
                        "--Tab-indicatorRadius": "5px"
                    }}>For You</Tab>
                <Tab
                    indicatorInset
                    variant='outlined'
                    sx={{
                        color: 'black',
                        flexGrow: 1,
                        "--Tab-indicatorSize": "50px",
                        "--Tab-indicatorThickness": "3px",
                        "--Tab-indicatorRadius": "5px"
                    }}>Following</Tab>
                <IconButton>
                    <GiCursedStar size={24} />
                </IconButton>
            </TabList>
            <div style={{
                marginTop: 20
            }}>
                <CreatePostForm />
            </div>
            <TabPanel value={0}>
                <PostsList />
            </TabPanel>
            <TabPanel value={1}>
                <b>Second</b> tab panel
            </TabPanel>
        </Tabs >
    );
}

export default TabsLayout;