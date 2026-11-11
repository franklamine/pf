// Données des projets
export const projets = [
  {
    image: "sn.png",
    titre: "LF Social – Réseau social",
    statut: "En développement",
    description:
      "LF Social est une application de réseau social permettant aux utilisateurs de créer leur profil, de publier du contenu, de suivre d'autres utilisateurs et d'interagir avec leurs publications. Le projet repose sur une architecture frontend/backend avec un système d'authentification sécurisé et une interface utilisateur interactive.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "React.js"],
    lien: "https://lfsol.cloud",
    restriction: "",
  },

  {
    image: "clinique.png",
    titre: "Clinique esthétique – Site web",
    statut: "Réalisé",
    description:
      "Conception et réalisation d'un site web pour une clinique spécialisée dans les soins infirmiers et les soins de beauté. Le site présente les différents services proposés par la clinique, met en valeur son expertise et offre aux visiteurs une expérience de navigation claire et agréable. Le site a été développé avec WordPress.",
    technologies: ["WordPress", "PHP", "HTML", "CSS"],
    lien: "https://cliniqueemaderm.ca",
    restriction: "",
  },

  {
    image: "aws.png",
    titre: "Application de café – Infrastructure Cloud AWS",
    statut: "Réalisé",
    description:
      "Conception et déploiement d'une application web de gestion de café sur Amazon Web Services (AWS). Le projet consistait à mettre en place une infrastructure Cloud sécurisée et hautement disponible, avec une architecture basée sur plusieurs VPC, des instances EC2, une base de données, un stockage S3 et un répartiteur de charge (Load Balancer). La solution intégrait également le chiffrement des données, la gestion des accès avec IAM et l'envoi de notifications par SMS. L'environnement a été supprimé à la fin du projet afin d'éviter les frais liés aux ressources AWS.",
    technologies: [
      "AWS",
      "VPC",
      "EC2",
      "Base de données",
      "S3",
      "Load Balancer",
      "IAM",
      "Chiffrement",
      "SMS",
    ],
    lien: null,
    restriction:
      "Projet académique réalisé dans un environnement Cloud temporaire. L'infrastructure a été supprimée après sa réalisation afin d'éviter les frais liés aux ressources AWS.",
  },

  {
    image: "asure.png",
    titre: "Infrastructure Active Directory – Azure",
    statut: "Réalisé",
    description:
      "Conception et déploiement d'une infrastructure informatique dans Microsoft Azure avec Windows Server 2025 et Active Directory. Le projet comprenait un contrôleur de domaine Windows Server 2025, un second serveur Windows Server 2025 Core, ainsi que deux postes clients Windows 11 et un client Linux intégrés au domaine. Il incluait la configuration DNS, la gestion centralisée des utilisateurs et des postes de travail, ainsi que le déploiement d'un site web avec IIS et la mise en place de Laragon pour la gestion de la base de données.",
    technologies: [
      "Microsoft Azure",
      "Windows Server 2025",
      "Server Core",
      "Active Directory",
      "Windows 11",
      "Ubuntu",
      "DNS",
      "IIS",
      "Laragon",
    ],
    lien: null,
    restriction:
      "Projet académique réalisé dans un environnement privé. L'infrastructure et ses accès ne sont pas disponibles publiquement.",
  },

  {
    image: "ecom.png",
    titre: "Site de vente en ligne – E-commerce",
    statut: "Réalisé",
    description:
      "Conception et développement d'une plateforme de commerce électronique permettant aux clients de parcourir un catalogue de produits, consulter les fiches détaillées, gérer leur panier et effectuer des commandes en ligne. Le projet comprend également une interface de gestion pour administrer les produits, les utilisateurs et les commandes, avec une base de données pour assurer le stockage et l'organisation des informations.",
    technologies: [
      "React",
      "Spring Boot",
      "Java",
      "MySQL",
      "HTML",
      "CSS",
      "REST API",
    ],
    lien: null,
    restriction:
      "Projet réalisé dans un cadre privé. La consultation publique et la diffusion du lien ne sont pas autorisées par les titulaires du projet.",
  },

  {
    image: "quiz.png",
    titre: "Application de quiz interactif",
    statut: "Réalisé",
    description:
      "Développement d'une application web interactive permettant aux utilisateurs de répondre à des questionnaires générés dynamiquement. L'application propose une sélection aléatoire de questions, une gestion des réponses et un affichage des résultats.",
    technologies: ["JavaScript", "HTML", "CSS", "JSON", "DOM"],
    lien: null,
    restriction:
      "Projet réalisé dans un cadre académique privé. La consultation publique du projet n'est pas disponible.",
  },
];