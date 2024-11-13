import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          title: "Sobre",
          subtitle: "Contribuidor em inovações na ufs",
          researchAndExtension: "Pesquisa e extensão",
          description: "O Laboratório de Projetos Mecânicos do Departamento de Engenharia Mecânica da Universidade Federal de Sergipe (UFS), parte do Instituto de Pesquisas sobre Desastres (IPD), se dedica ao ensino, pesquisa e extensão em várias áreas da engenharia. Atendendo diariamente alunos, o laboratório desenvolve pesquisas em aeronaves remotamente pilotadas, enxames de drones, metamateriais, visão computacional, Structural Health Monitoring, metrologia, inteligência artificial, fotogrametria e energias renováveis. Também realiza projetos de extensão, como oficinas de minifoguetes, astronomia, e equipes de foguetes e cubesats (Zenith).",
          instagram: "Instagram",
          email: "E-mail",
          equipmentsTitle: "Equipamentos",
          equipmentsDescription: "Aqui estão alguns dos equipamentos utilizados pelo laboratório.",
          contactTitle: "Contato",
          contactAddressTitle: "Endereço",
          contactAddressData: "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Ramal",
          contactExtensionData: "6315",
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "Doutorado em Engenharia Mecânica pela EESC-USP, Mestrado em Engenharia Mecânica pelo ITA, e graduação em Engenharia Mecatrônica pela EESC-USP.",

          studentsTitle: "Alunos",
          publicationsTitle: "Publicações"

        },
      },
      en: {
        translation: {
          title: "About",
          subtitle: "Contributor in innovations at UFS",
          researchAndExtension: "Research and Extension",
          description: "The Mechanical Projects Laboratory of the Department of Mechanical Engineering at the Federal University of Sergipe (UFS), part of the Disaster Research Institute (IPD), is dedicated to teaching, research, and extension in various areas of engineering. The laboratory works daily with students, developing research in remotely piloted aircraft, drone swarms, metamaterials, computer vision, Structural Health Monitoring, metrology, artificial intelligence, photogrammetry, and renewable energy. It also carries out extension projects such as mini-rocket workshops, astronomy, and rocket and cubesat teams (Zenith).",
          instagram: "Instagram",
          email: "Email",
          equipmentsTitle: "Equipment",
          equipmentsDescription: "Here are some of the equipment used by the laboratory.",
          contactTitle: "Contact",
          contactAddressTitle: "Address",
          contactAddressData: "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Extension",
          contactExtensionData: "6315",
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "PhD in Mechanical Engineering from EESC-USP, Master's in Mechanical Engineering from ITA, and a degree in Mechatronic Engineering from EESC-USP.",
          studentsTitle: "Students",
          publicationsTitle: "Publications"

        },
      },
      fr: {
        translation: {
          title: "À propos",
          subtitle: "Contributeur aux innovations à l'UFS",
          researchAndExtension: "Recherche et Extension",
          description: "Le Laboratoire de Projets Mécaniques du Département de Génie Mécanique de l'Université Fédérale de Sergipe (UFS), faisant partie de l'Institut de Recherche sur les Catastrophes (IPD), se consacre à l'enseignement, la recherche et l'extension dans divers domaines de l'ingénierie. Le laboratoire travaille quotidiennement avec des étudiants, développant des recherches sur les aéronefs télépilotés, les essaims de drones, les métamatériaux, la vision par ordinateur, la surveillance de la santé structurelle, la métrologie, l'intelligence artificielle, la photogrammétrie et les énergies renouvelables. Il réalise également des projets d'extension tels que des ateliers de mini-fusées, l'astronomie et des équipes de fusées et de cubesats (Zenith).",
          instagram: "Instagram",
          email: "Email",
          equipmentsTitle: "Équipements",
          equipmentsDescription: "Voici quelques-uns des équipements utilisés par le laboratoire.",
          contactTitle: "Contact",
          contactAddressTitle: "Adresse",
          contactAddressData: "Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000",
          contactEmailTitle: "Email",
          contactEmailData: "alexandre.ramos@academico.ufs.br",
          contactExtensionTitle: "Poste",
          contactExtensionData: "6315",
          contactName: "Alexandre Carlos Rodrigues Ramos",
          contactBio: "Doctorat en génie mécanique de l'EESC-USP, maîtrise en génie mécanique de l'ITA et diplôme en génie mécatronique de l'EESC-USP.",

          studentsTitle: "Étudiants",
          publicationsTitle: "Publications"






        },
      },
    },
    lng: 'pt', 
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  });

export default i18n;
