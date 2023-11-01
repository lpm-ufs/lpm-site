import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from "i18next";


const pages = ['Inicio', 'Equipamentos', 'Projetos de Pesquisa', 'Projetos de Extensão', 'Alunos', 'Publicações'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar2() {
  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', height: '80px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className="navbar--content"

            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',  // Defina a cor do texto como preta
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <ul>
                <li>
                  <Link
                    onClick={handleCloseNavMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="AboutMe"
                    className="navbar--content"
                  >
                    {t('Inicio')}
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={handleCloseNavMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="AboutMe2"
                    className="navbar--content"
                  >
                    {t('Equipamentos')}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleCloseNavMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="MyPortfolio"
                    className="navbar--content"
                  >
                    {t('Projetos de Pesquisa')}
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={handleCloseNavMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="AboutMe3"
                    className="navbar--content"
                  >
                    {t('Projetos de Extensão')}
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={handleCloseNavMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="students"
                    className="navbar--content"
                  >
                    {t('Alunos')}
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={handleCloseNavMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Publish"
                    className="navbar--content"
                  >
                    {t('Publicações')}
                  </Link>
                </li>


              </ul>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar2;
