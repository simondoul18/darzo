"use client";
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function EnhancedTableToolbar(props: any) {
    const { numSelected } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                py: 1,
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: 'background.level1',
                }),
                borderTopLeftRadius: 'var(--unstable_actionRadius)',
                borderTopRightRadius: 'var(--unstable_actionRadius)',
            }}
        >
            {numSelected > 0 ? (
                <Typography sx={{ flex: '1 1 100%' }} component="div" className='text-lg'>
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    id="tableTitle"
                    component="div"
                    className='text-lg'
                >
                    {props.tableName}
                </Typography>
            )}
        </Box>
    );
}