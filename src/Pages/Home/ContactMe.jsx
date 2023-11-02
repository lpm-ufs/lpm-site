import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomCard from './CustomCard';
import { Container, Grid, Box, Typography } from '@mui/material';
import data from '../../data/index.json';

export default function Testimonial() {
  const { t } = useTranslation();

  return (
    <section className="" id="ContactMe">

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="white"
      >
        <h2 className="skills-section--heading">{t('Contato')}</h2>
        <br></br>

        <Container maxWidth="sm"> {/* Defina um valor adequado para o maxWidth */}
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <CustomCard
                imageUrl={data?.testimonial2[0]?.src}
                authorName={data?.testimonial2[0]?.author_name}
                authorDesignation={data?.testimonial2[0]?.email}
                description={data?.testimonial2[0]?.description}
              />
            </Grid>
          </Grid>
        </Container>
        <br></br>
        <br></br>
      </Box>
    </section>

  );
}
