import {InputBase, Stack, Link } from "@mui/material"

function InputSample() {
  return ( 
    <Stack alignItems="center" direction="row" spacing={5} justifyContent="space-between" sx={{bgcolor: "#1a2b44", px: 2, py:1, borderRadius: 1}}>
      <InputBase sx={{color: 'white'}} />
      <Link>MAX</Link>
    </Stack>
   )
}

export default InputSample