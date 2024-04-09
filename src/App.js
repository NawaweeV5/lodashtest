import * as React from 'react';
import { useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button, Divider, IconButton, TextField, Grid, Container } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Hidden } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: '64px',
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? 'white' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E8E8E8' : '#2D3843',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledBox = styled(Box)({
  width: '80%',
  height: 48,
  display: 'flex',
  overflowX: 'auto',
});

const SmallBox = styled(Box)({
  width: '10%',
  height: '100%',
  border: '1px solid #E8E8E8',
  marginRight: '4px',
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const dataHighlight = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1530216421037-11e7a48ae76c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '[Pantip Point] ชวนแชร์ภาพความสดชื่นต้อนรับ Summer!'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1680458842367-0d47f573ca2b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'PANTIP PADCAST 3 อันดับ กระทู้ฮิตบนพันทิปประจำวัน'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1696758405345-d814b95a22c7?q=80&w=1839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'กิจกรรม "แนะวิธีคลายร้อนต้อนรับซัมเมอร์สุดฮอต'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1712417827761-7a68ff4a90f3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'ข่าวดี! เพื่อนๆสามารถสร้างรายได้ไปพร้อมกับการใช้งาน'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1712415194711-e71f68c368a6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'PANTIP PICK OF THE YEAR 2023 - รวม 10 สุดยอดกระทู้'
  },
];

const tabTexts = [
  "รวมมิตร", "ชายคา", "ห้องสมุด", "พันทิป", "ราชดำเนิน",
  "ไกลบ้าน", "เฉลิมกรุง", "แก็ดเจ็ต", "หอศิลป์", "บางขุนพรหม",
  "โต๊ะเครื่องแป้ง", "แกลเลอรี่", "กรีนโซน", "ก้นครัว", "กล้อง",
  "จตุจักร", "เฉลิมไทย", "ซิลิคอนวัลเลย์", "บลูแพลนเน็ต", "มาบุญครอง",
  "ชานเรือน", "ถนนนักเรียน", "ภูมิภาค", "รัชดา", "ศาลาประชาคม",
  "ศุภชลาศัย", "สวนลุมพินี", "สีลม", "ศาสนา", "สยามสแควร์", "สินธร",
  "หว้ากอ", "การ์ตูน", "พรหมชาติ", "กรุงโซล", "บางรัก", "ดิโอลด์สยาม",
  "ไร้สังกัด"
];

const dataPantipRealtime = [
  {
    title: '[BR]ทำกิจกรรมร่วมกับ PANTIP HAPPY PRIZE ดีขนาดไหนมาดูกัน'
  },
  {
    title: 'ทำไมที่บ้านต้องรีบให้เด็กจบใหม่มีภาระหนี้สิน'
  },
  {
    title: 'พูดเลยว่า BABYMONSTER เตรียมดัง'
  },
  {
    title: 'ทำไมคนไทยที่อายุเยอะๆ หน่อยชอบบอกว่าเมืองไทยในอดีตอากาศไม่ร้อน'
  },
  {
    title: 'หมั้นกันแล้ว ฝ่ายชายควรให้เงินเรามั้ยคะ'
  },
  {
    title: 'ทำไมตึก HYBE ถึงไม่เด่นเรื่องยอดวิวยูทูป'
  },
  {
    title: 'แฟนให้เพื่อนผู้หญิงนั่งรถกลับต่างจังหวัดด้วยกันสองต่อสอง แต่เราไม่โอเค เรางี่เง่าไปมั้ยคะ'
  },
  {
    title: 'แม่บอกว่าลูกคนโต ควรมีหน้าที่ดูแลพ่อแม่ยามแก่เฒ่า'
  },
  {
    title: 'HITACHI โพสขอบคุณ แนนทัดดาว'
  },
  {
    title: 'ทำไมที่บ้านต้องรีบให้เด็กจบใหม่มีภาระหนี้สิน'
  },
]

const dataPantipPick = [
  {
    title: 'ระหว่างเงียบหายไปเลยกับค่อยๆ หายไป แบบไหนดีกว่ากัน'
  },
  {
    title: 'แชร์ประสบการณ์... ตามรอย Slam Dunk ที่คามาคุระ-โตเกียว'
  },
  {
    title: 'ถ้าแฟนลบแชทคนคนนึงตลอดมันแปลกใช่ไหมคะ'
  },
  {
    title: 'คุณคิดว่าลักษณะนิสัยของคุณเป็นมิตรหรือว่าเป็นพิษกับเพื่อนร่วมงานคะ?'
  },
  {
    title: 'อะไรคือเหตุผลที่คนวัยเกษียณ ไม่ลงทุนหุ้นปันผล ทั้งที่สะดวก ผลตอบแทนดดี'
  },
  {
    title: 'ใครคือนักร้องนักดนตรีชายคนสำคัญของคุณครับ'
  },
  {
    title: 'แฟนให้เพื่อนผู้หญิงนั่งรถกลับต่างจังหวัดด้วยกันสองต่อสอง แต่เราไม่โอเค เรางี่เง่าไปมั้ยคะ'
  },
  {
    title: 'แม่บอกว่าลูกคนโต ควรมีหน้าที่ดูแลพ่อแม่ยามแก่เฒ่า'
  },
  {
    title: 'HITACHI โพสขอบคุณ แนนทัดดาว'
  },
  {
    title: 'ทำไมที่บ้านต้องรีบให้เด็กจบใหม่มีภาระหนี้สิน'
  },
]

export default function App(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const open = Boolean(anchorEl);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showMore, setShowMore] = React.useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const tabs = tabTexts.map((text, index) => (
    <Tab
      key={index}
      icon={
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px',
            fontWeight: '600',
          }}
        >
          {isLoading ? (
            <Skeleton variant="text" sx={{ width: '20px', height: '30px' }} />
          ) : (
            <CropOriginalIcon sx={{ mb: '4px' }} />
          )}
          {isLoading ? (
            <Skeleton variant="text" sx={{ width: '40px', height: '16px' }} />
          ) : (
            text
          )}
        </Box>
      }
    />
  ));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: 'white', borderBottom: '1px solid #E8E8E8' }}>
          <Toolbar sx={{}}>
            <Grid container alignItems="center">
              <Hidden smDown>
                <Grid item sm={4} md={4} sx={{}}>
                  <img src='/pantip.png' style={{ marginLeft: '12px', height: '48px', backgroundColor: '#EB4343' }} />
                </Grid>
              </Hidden>
              <Grid item xs={9} sm={4} md={4}>
                <BootstrapInput
                  placeholder='ค้นหาบน Pantip'
                  id="bootstrap-input"
                  sx={{ ml: 'auto', width: '100%', mr: 'auto' }}
                  endAdornment={
                    <SearchIcon
                      sx={{
                        backgroundColor: '#EB4343',
                        position: 'absolute',
                        right: '12px', // จัดตำแหน่งทางขวาของ InputBase
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        color: 'white',
                        borderRadius: '64px',
                        border: '4px solid #EB4343'
                      }}
                    />
                  }
                />
              </Grid>
              <Grid item xs={3} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                <Box sx={{}}>
                  <Hidden smDown>
                    <IconButton
                      sx={{
                        mr: '8px',
                      }}
                    >
                      <LanguageIcon />
                    </IconButton>
                  </Hidden>
                  <Button
                    onClick={handleClick}
                    sx={{
                      border: '1px solid #E8E8E8',
                      p: '4px',
                      borderRadius: '32px',
                      ml: 'auto',
                      '&:hover': {
                        backgroundColor: 'white',
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)', // กำหนดเงาขึ้นเมื่อ hover
                      },
                    }}>

                    <MoreVertIcon sx={{ color: 'black', mt: '4px', ml: '4px', mb: '4px' }} />
                    <AccountCircleIcon sx={{ color: 'black', mr: '8px', ml: '4px', mb: '4px', mt: '4px' }} />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>ลงทะเบียน</MenuItem>
                    <MenuItem onClick={handleClose}>เข้าสู่ระบบ</MenuItem>
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
          <Divider />
          <Toolbar sx={{}}>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={12} md={12}>
                <Box sx={{ bgcolor: 'white', color: 'black' }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    {tabs}
                  </Tabs>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Container sx={{ width: '100%', paddingTop: '148px' }}>
        <Box sx={{ display: 'flex', justifyItems: 'center' }}>
          <KeyboardDoubleArrowRightIcon />
          <Typography sx={{ fontWeight: '700' }}>
            หน้าแรกพันทิป
          </Typography>
        </Box>
        <Box sx={{ border: '1px solid #E8E8E8', mt: '12px', borderRadius: '8px' }}>
          <Box sx={{ borderBottom: '1px solid #E8E8E8', p: '8px' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: '700', color: '#EB4343' }}>
              Announce
            </Typography>
          </Box>
          <Box sx={{ p: '8px', borderBottom: '1px solid #E8E8E8', p: '8px', display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: '700', color: '#EB4343', display: 'flex', alignItems: 'center' }}>
              Pantip Daily Podcast
            </Typography>
            <Typography sx={{ fontWeight: '700', ml: '5%' }}>
              ชวนแชร์ภาพความสดชื่นต้อนรับ "SUMMER"
            </Typography>
          </Box>
          <Box sx={{ p: '8px', borderBottom: '1px solid #E8E8E8', p: '8px', display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: '700', color: '#EB4343', display: 'flex', alignItems: 'center' }}>
              Pantip Point
            </Typography>
            <Typography sx={{ fontWeight: '700', ml: '5%' }}>
              ชวนแชร์ภาพความสดชื่นต้อนรับ "SUMMER"
            </Typography>
          </Box>
        </Box>
        <Box sx={{ border: '1px solid #E8E8E8', mt: '24px', borderRadius: '8px' }}>
          <Box sx={{ borderBottom: '1px solid #E8E8E8', p: '8px' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: '700', color: '#EB4343' }}>
              Highlight
            </Typography>
          </Box>
          <Box sx={{ overflowX: "scroll", p: '16px', display: 'flex' }}>
            {dataHighlight.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  flexDirection: 'column',
                  borderRadius: '8px',
                  ml: index !== 0 ? '16px' : 0,
                }}
              >
                {isLoading ? (
                  <Skeleton variant="rectangular" sx={{ width: '250px', height: '220px' }} />
                ) : (
                  <img style={{ width: '250px', height: '220px' }} src={item.imageSrc} />
                )}
                {isLoading ? (
                  <Skeleton variant="text" sx={{ width: '250px', height: '16px', mt: '8px' }} />
                ) : (
                  <Typography sx={{ fontWeight: '700', p: '8px' }}>
                    {item.text}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ border: '1px solid #E8E8E8', mt: '24px', borderRadius: '8px', mb: '24px' }}>
          <Box sx={{ borderBottom: '1px solid #E8E8E8', p: '8px' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: '700', color: '#EB4343' }}>
              Pantip Realtime
            </Typography>
            <Typography sx={{ fontSize: '12px' }} >
              กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
            </Typography>
          </Box>
          <Box>
            <Grid container>
              {dataPantipRealtime.slice(0, showMore ? dataPantipRealtime.length : 6).map((item, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Box sx={{ p: '8px', border: '1px solid #E8E8E8', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                    {isLoading ? (
                      <>
                        <Skeleton variant="rectangular" width={'100%'} height={20} />
                      </>
                    ) : (
                      <Typography sx={{ fontWeight: '700' }}>
                        {item.title}
                      </Typography>
                    )}

                  </Box>
                </Grid>
              ))}
            </Grid>
            {dataPantipRealtime.length > 6 && (
              <Box sx={{ textAlign: 'center' }}>
                {showMore ? (
                  <Button sx={{ width: '100%', border: 'none', color: 'black' }} variant="outlined" onClick={handleShowLess}>ดูน้อยลง</Button>
                ) : (
                  <Button sx={{ width: '100%', border: 'none', color: 'black' }} variant="outlined" onClick={handleShowMore}>ดูเพิ่มเติม</Button>
                )}
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{ border: '1px solid #E8E8E8', mt: '24px', borderRadius: '8px', mb: '24px' }}>
          <Box sx={{ borderBottom: '1px solid #E8E8E8', p: '8px' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: '700', color: '#EB4343' }}>
              Pantip Pick
            </Typography>
            <Typography sx={{ fontSize: '12px' }} >
              กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip
            </Typography>
          </Box>
          <Box>
            <Grid container>
              {dataPantipPick.slice(0, showMore ? dataPantipPick.length : 4).map((item, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                  <Box sx={{ p: '8px', border: '1px solid #E8E8E8', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                    {isLoading ? (
                      <>
                        <Skeleton variant="rectangular" width={'100%'} height={20} />
                      </>
                    ) : (
                      <Typography sx={{ fontWeight: '700' }}>
                        {item.title}
                      </Typography>
                    )}

                  </Box>
                </Grid>
              ))}
            </Grid>
            {dataPantipPick.length > 4 && (
              <Box sx={{ textAlign: 'center' }}>
                {showMore ? (
                  <Button sx={{ width: '100%', border: 'none', color: 'black' }} variant="outlined" onClick={handleShowLess}>ดูน้อยลง</Button>
                ) : (
                  <Button sx={{ width: '100%', border: 'none', color: 'black' }} variant="outlined" onClick={handleShowMore}>ดูเพิ่มเติม</Button>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </React.Fragment >
  );
}
