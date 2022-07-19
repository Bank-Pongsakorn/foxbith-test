import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typographpy from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'

function App() {
  return (
    <Box
    sx={{
      padding: {
        xs: '50px 20px',
        md: '50px 100px',
      },
    }}
    >
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box
        maxWidth= {{ md: '100px',  xs: '50px'}}
      >
        <Typographpy
          sx={{
            color: '#0E204E',
            typography: {
              xs: 'h6',
              md: 'h4'
            }
          }}
        >
          Pineapple Island
        </Typographpy>
      </Box>
      <Box
        display={{
          xs: 'none',
          md: 'flex'
        }}
        gap='80px'
      >
        <Typographpy variant='h6' sx={{ color: '#0E204E'}}>About Us</Typographpy>
        <Typographpy variant='h6' sx={{ color: '#0E204E'}}>What we do</Typographpy>
        <Typographpy variant='h6' sx={{ color: '#0E204E'}}>Project</Typographpy>
      </Box>
      <Box
        sx={{
        display: { xs: 'none', md: 'block'}
        }}
      >
        <Button
          variant='contained'
          sx={{
            fontSize: '20px',
            paddingX: '39px',
            backgroundColor: '#0E204E'
          }}
        >
          Get in Touch</Button>
      </Box>
      <Box
        display={{
          xs: 'flex',
          md: 'none',
        }}
        flexDirection='column'
        gap='5px'
      >
        <Box bgcolor='#0E204E' height='2px' width='24px' />
        <Box bgcolor='#0E204E' height='2px' width='24px'/>
        <Box bgcolor='#0E204E' height='2px' width='24px'/>
      </Box>
    </Box>
    <Box>
      <Box
        margin='100px'
        textAlign='center'
      >
        <Typographpy variant='h3'>What Pineapple Land Offers</Typographpy>
      </Box>

      <Box
        width='100%'
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <Box
          display='flex'
          width='100%'
        >
          <Box
            width='50%'
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
          >
            <Box
              height='567px'
              width='582px'
            >
              <CardMedia
                image='Rectangle 7.png'
                component='img'
              />
            </Box>
            <Box
              height='358px'
              width='205px'
              bgcolor='#0E204E'
            />
          </Box>

          <Box
            display='flex'
            width='50%'
            alignItems='center'
            gap='150px'
          >
            <Box
              display='flex'
              flexDirection='column'
              gap='60px'
              pl='170px'
            >
              <Box
                height='30px'
                width='30px'
                margin='0 auto'
              >
                <CardMedia
                  image='vector (3).png'
                  component='img'
                />
              </Box>
              <Typographpy fontSize='18px'>Eco Friendly</Typographpy>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              gap='60px'
            >
              <Box
                height='30px'
                width='30px'
                margin='0 auto'
              >
                <CardMedia
                  image='ooui_network.png'
                  component='img'
                />
              </Box>
              <Typographpy fontSize='18px'>Smart Home</Typographpy>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              gap='60px'
            >
              <Box
                height='30px'
                width='30px'
                margin='0 auto'
              >
                <CardMedia
                  image='vector (5).png'
                  component='img'
                />
              </Box>
              <Typographpy fontSize='18px'>Good Rates</Typographpy>
            </Box>
          </Box>
        </Box>

        <Box
          display='flex'
          flexDirection='row-reverse'
          width='100%'
        >
          <Box
            width='50%'
            display='flex'
            flexDirection='row-reverse'
            alignItems='center'
            justifyContent='flex-end'
          >
            <Box
              height='567px'
              width='582px'
            >
              <CardMedia
                image='Rectangle 7.png'
                component='img'
              />
            </Box>
            <Box
              height='358px'
              width='205px'
              bgcolor='#0E204E'
            />
          </Box>
          <Box
            display='flex'
            width='50%'
            justifyContent='center'
            alignItems='center'
            gap='150px'
          >
            <Box
              display='flex'
              flexDirection='column'
              gap='60px'
            >
              <Box
                height='30px'
                width='30px'
                margin='0 auto'
              >
                <CardMedia
                  image='vector.png'
                  component='img'
                />
              </Box>
              <Typographpy fontSize='18px'>Serviced Apartment</Typographpy>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              gap='60px'
            >
              <Box
                height='30px'
                width='30px'
                margin='0 auto'
              >
                <CardMedia
                  image='vector (1).png'
                  component='img'
                />
              </Box>
              <Typographpy fontSize='18px'>Private Security</Typographpy>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              gap='60px'
            >
              <Box
                height='30px'
                width='30px'
                margin='0 auto'
              >
                <CardMedia
                  image='vector (2).png'
                  component='img'
                />
              </Box>
              <Typographpy fontSize='18px'>24/7 Electricity</Typographpy>
            </Box>
          </Box>
        </Box>
      </Box>


      <Box sx={{ display: { xs: 'block', md: 'none'}}}>
        <Box>
          <CardMedia
            image=''
            component='img'
          />
        </Box>
        <Box>
          <Box>
            <Box>
              <CardMedia />
              <Typographpy>Eco Friendly</Typographpy>
            </Box>
          </Box>
          <Box>
            <Box>
              <CardMedia />
              <Typographpy>Eco Friendly</Typographpy>
            </Box>
          </Box>
          <Box>
            <Box>
              <CardMedia />
              <Typographpy>Eco Friendly</Typographpy>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}

export default App;
