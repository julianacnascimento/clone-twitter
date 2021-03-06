import React from 'react';

import Button from '../Button';

import { Container,
    Topside,
    Logo,
    MenuButtom,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar, 
    ProfileData,
    ExitIcon
 } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <Topside>
            <Logo />

            <MenuButtom>
                <HomeIcon />
                <span>Página Inicial</span>
            </MenuButtom>

            <MenuButtom>
                <BellIcon />
                <span>Notificações</span>
            </MenuButtom>

            <MenuButtom>
                <EmailIcon />
                <span>Mensagens</span>
            </MenuButtom>

            <MenuButtom>
                <FavoriteIcon />
                <span>Favoritados</span>
            </MenuButtom>

            <MenuButtom className="active">
                <ProfileIcon />
                <span>Perfil</span>
            </MenuButtom>

            <Button>
                <span>Tweetar</span>
            </Button>

        </Topside>

        <Botside>
            <Avatar />

            <ProfileData>
                <strong>Juliana Conceição</strong>
                <span>@julianacnasc</span>
            </ProfileData>

            <ExitIcon />
        </Botside>
    </Container>
  );
}

export default MenuBar;