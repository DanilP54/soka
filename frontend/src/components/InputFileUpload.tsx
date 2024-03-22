import Button from '@mui/joy/Button';
import { styled } from '@mui/joy';
import { FaRegImage } from "react-icons/fa6";

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const InputFileUpload = () => {
  return (
    <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      sx={{
        minWidth: '2.25rem',
        minHeight: '2.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        padding: '0 4px',
        margin: 'none',
        '& .MuiButton-startDecorator': {
          margin: 0
        }
      }}
      startDecorator={<FaRegImage size={20}/>}
    >
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}

export default InputFileUpload;