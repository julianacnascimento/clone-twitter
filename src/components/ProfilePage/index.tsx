import React from 'react';

import { 
    Container,
    Banner,
    Avatar, 
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>
          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>

              <h1>Juliana Conceição</h1>
              <h2>@julianacnasc</h2>

              <p>Desenvolvedora em construção!</p>

              <ul>
                  <li>
                      <LocationIcon />
                      Rio Tinto, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 26 de junho de 1995
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong> 562</strong>
                  </span>
                  <span>
                    <strong>458 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;