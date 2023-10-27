import data from "../../data/index.json";

import React, { useEffect, useState } from 'react';
import CustomCard from "./CustomCard";
import { Container, Grid, Box } from '@mui/material';


export default function Testimonial() {
  return (
    <section className="testimonial--section" id="students">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills-section--heading">Alunos de Iniciação Científica e Tecnológica</h2>
        </div>
      </div>
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
      <h2 className="skills-section--heading">Alunos de Trabalho de Conclusão de Curso</h2>
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

      <h2 className="skills-section--heading">Alunos de Pós-Graduação </h2>
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
    </section>
  );
            }  
