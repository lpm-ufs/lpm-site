import data from "../../data/index.json";
import { useTranslation } from 'react-i18next';

import React, { useEffect, useState } from 'react';
import CustomCard from "./CustomCard";
import { Container, Grid, Box } from '@mui/material';


export default function Testimonial() {
  const { t } = useTranslation();

  return (
    <section className="" id="students">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="#ffbe8f"
      >
        <br></br><br></br>
        <h2 className="skills-section--heading">{t('t1_ic')}</h2>
        <br></br><br></br>
        <div style={{}}>
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              {data?.student_ci?.map((anime) => (
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <CustomCard imageUrl={anime.src} authorName={anime.author_name} authorDesignation={anime.author_designation} description={anime.description} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
        <br></br><br></br>
        <h2 className="skills-section--heading">{t('t1_tcc')}</h2>
        <br></br><br></br>
        <div style={{}}>
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              {data?.students_tcc?.map((anime) => (
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <CustomCard imageUrl={anime.src} authorName={anime.author_name} authorDesignation={anime.author_designation} description={anime.description} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
        <br></br><br></br>
        <h2 className="skills-section--heading">{t('t1_pos')}</h2>
        <br></br><br></br>
        <div style={{}}>
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              {data?.students_pos?.map((anime) => (
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <CustomCard imageUrl={anime.src} authorName={anime.author_name} authorDesignation={anime.author_designation} description={anime.description} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
        <br></br><br></br>

      </Box>

    </section>
  );
}  
