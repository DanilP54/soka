import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Box, Stack } from '@mui/joy';
import CreatePostForm from '../create_post_form/createPostForm';

const CreatePostModalButton = () => {

    const [open, setOpen] = React.useState(false);



    return (
        <Box display={'flex'} justifyContent={'center'}>
            <Button
                sx={{
                    minWidth: '200px',
                }}
                onClick={() => setOpen(true)}
                color="primary" variant="outlined"
            >
                Твитнуть
            </Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent'
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        height: '300px',
                        boxShadow: 'lg',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(10px)',
                        border: 'none',
                        // p: 2,
                        position: 'relative',
                    }}
                >
                    <Box height={'inherit'}>
                        <CreatePostForm
                        // heigth={'100%'} 
                        />
                    </Box>
                    <ModalClose sx={{
                        '--ModalClose-inset': '-3rem',

                    }}
                        variant="plain"
                    />
                </Sheet>
            </Modal>
        </Box>
    );
}

export default CreatePostModalButton;