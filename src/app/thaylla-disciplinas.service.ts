import { Injectable } from '@angular/core';

interface Disciplinas {
  id: string;
  name: string;
  day: string;
  hour: string;
  ement: string;
}

@Injectable()
export class ThayllaDisciplinasService {
  lista: Array<Disciplinas> = [
    {
      id: "IBD006",
      name: "Banco de Dados",
      day: "Quarta-Feira",
      hour: "9h30 - 13h",
      ement: "Tipos de Junções (join). Subconsultas (Subqueries). Criação, implementação e utilização de procedimentos armazenados (stored procedures), gatilhos (triggers), funções, cursores, visões (view). Linguagem de Controle de Dados. Transações. Bancos de dados orientados a objetos. Bancos de dados multimídia.",
    },
    {
      id: "IDS001",
      name: "Desenvolvimento para Servidores I",
      day: "Segunda-Feira",
      hour: "9h30 - 13h",
      ement: "PHP histórico e emprego. Instalação e configuração básica do PHP e um IDE. Sintaxe básica do PHP. Usando o PHP como um mecanismo de modelo simples. Panorama das melhores práticas com PHP. Conceitos de programação HTTP. Codificação de caracteres. Localidades, fusos horários e funções de tempo. Strings. Uso de Array e funções de matriz. Orientação a objetos em PHP (Classes, objetos, herança, encapsulamento, polimorfismo, agregação, composição e métodos). Tratamento de exceções de erro. Arquitetura do lado do servidor. Manipulação de dados postados. Enviando e-mail. Sessões e autenticação. Cookies. Arquivo manuseio e armazenamento de dados em arquivos de texto. Gerenciador de banco de dados e suas funções. Frameworks. Web Services, API, RSS, JSON e Ajax. Hospedagem compartilhada.",
    },
    {
      id: "IDS002",
      name: "Desenvolvimento para Servidores II",
      day: "Quinta-Feira",
      hour: "19h - 22h30",
      ement: "Conceitos e evolução das tecnologias de programação de servidores. Recursos da linguagem escolhida para servidores na Internet. Padrões de projetos. Integração com sistemas (Google Maps API, Twitter, entre outros)",
    },
    {
      id: "ISW012",
      name: "Desenvolvimento para Dispositivos Móveis I",
      day: "Segunda-Feira",
      hour: "18h - 22h30",
      ement: "Introdução e conceitos. Recursos disponíveis para dispositivos móveis na linguagem de marcação de textos. Uso de algum ambiente de desenvolvimento: configuração do ambiente; emulação de dispositivos móveis nos computadores pessoais; interface gráfica; serviços disponíveis; banco de dados nos dispositivos. Desenvolvimento de aplicações que utilizam dados de geolocalização. Integração entre sistemas remotos.",
    },
    {
      id: "AGM004",
      name: "Negócios, Marketing, Eletrônicos",
      day: "Quarta-Feira",
      hour: "19h - 22h30",
      ement: "Conceitos de marketing e de marketing digital. O comportamento do consumidor on-line. Marketing de conteúdo. Marketing nas mídias sociais. E-mail marketing. Marketing viral. Publicidade on-line. Pesquisa de marketing on-line. Marketing e os negócios na Internet. Estudos de caso.",
    },
    {
      id: "IWS011",
      name: "Projeto de Prototipagem e Testes de Usabilidade",
      day: "Sabado",
      hour: "8h - 11h30",
      ement: "Conceitos, métodos de prototipagem e ferramentas de teste de protótipos. Conceitos de usabilidade e estratégias de design. Métodos de teste de usabilidade. Planejamento de teste de usabilidade. Recrutamento. Projeto de usabilidade. Plano de teste. Sessão de teste de usabilidade. Análise de dados. Comunicação dos resultados. Variação de técnicas.",
    },
    {
      id: "ITE004",
      name: "Tópicos Especiais II",
      day: "Sexta-Feira",
      hour: "19h - 22h30",
      ement: "Recursos e aplicações da tecnologia escolhida.",
    },
  ];

  constructor() {}

  getLista() {
    return this.lista;
  }

  add(id: string, name: string, day: string, hour:string, ement: string) {
    this.lista.push({ id, name, day, hour, ement });
  }

  remove(index: number) {
    this.lista.splice(index, 1);
  }
}