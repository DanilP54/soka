import React from "react";
import { BeatLoader } from "react-spinners";

import {
    Box,
    Stack,
    styled,
} from "@mui/joy";

import { PostResponseType, PostsPagination, postsApi } from "../../redux/features/tweets/postsApi";
import CreatePostForm from "../create_post_form/createPostForm";
import Post from "./Post";
import { useInView } from "react-intersection-observer";

const PostWrapperStyled = styled('div')({
    position: 'relative',
    minHeight: '100%',
    maxHeight: '100%',
    // overflowY: 'auto',
    overflowX: 'hidden',
    '& .posts__list_loader': {
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }
});

const PostsList: React.FC = () => {
  
    
    const [pagination, setPagination] = React.useState<PostsPagination>({
        page: 1,
        limit: 10
    });

    const [posts, setPosts] = React.useState<PostResponseType[]>([]);
    const [allPostsLoaded, setPostsLoaded] = React.useState<boolean>(false);
    const { data, isFetching } = postsApi.useGetPostsQuery(pagination);

    const rootRef = React.useRef<HTMLDivElement | null>(null)

    const { ref: lastPostRef } = useInView({
        // root: rootRef.current,
        onChange(inView) {
            if (inView && !allPostsLoaded) {
                console.log(inView);
                
                setPagination((prev) => ({
                    ...prev,
                    page: prev.page + 1,
                }))
            }
        },
        threshold: 0.8,
        triggerOnce: true,
        skip: allPostsLoaded
    })

    React.useEffect(() => {
        if (data) {
            setPosts((prev) => [...prev, ...data])
            if (data.length < 10) {
                setPostsLoaded(true)
            }
        }
    }, [data])

    return (
        <PostWrapperStyled ref={rootRef}>
            <Box>
                {/* <CreatePostForm /> */}
            </Box>
            {
                (
                    <Stack sx={{ paddingBottom: 3 }} rowGap={2} p={1}>
                        {
                            posts?.map((post) => (
                                <Post ref={lastPostRef} key={post.id} post={post} />
                            ))
                        }
                    </Stack>
                )
            }
            <div className="posts__list_loader">
                <BeatLoader color="#000" size={10} loading={isFetching} />
            </div>
        </PostWrapperStyled>
    )
}


export default PostsList;