import { ExperienceModel } from "../interfaces/experience.interface";
import client from "./base.service";

async function getAllContent(): Promise<ExperienceModel[]> {
  let result: ExperienceModel[] = [];
  await client
    .getEntries({
      content_type: "experience",
      order: "fields.order",
      locale: localStorage.getItem(process.env.REACT_APP_LANGKEY),
    })
    .then((entries: EntrieModel) => {
      result = entries.items.map((entrie: any) => {
        let item = entrie.fields as ExperienceModel;
        item.avatar = entrie.fields.avatar.fields.file.url;
        return item;
      });
    })
    .catch(console.error);

  return result;
}

export { getAllContent };

// function getAllContent() {
//   const content: ContentModel[] = [
//     {
//       menuTitle: "profile",
//       title: "Hudson Potenciano",
//       subTitle: "",
//       text: `Seja bem vindo ao meu portfólio!

//       Sou programador desde os 18 anos e trabalhei em vários projetos como Front End, Back End e Full Stack.

//       Navegando no menu abaixo você poderá conhecer mais sobre as minhas experiências`,
//       avatarUrl: String(require("../assets/images/hudson-avatar.jpg")),
//       experience: ``,
//       color: "#FFF",
//     },

//     {
//       menuTitle: "angular",
//       title: "Angular",
//       subTitle: "",
//       text: `bla bla bla bla bla bla bla bla
//        bla bla bla bla bla bla
//        bla bla bla
//         bla bla bla bla bla bla bla`,
//       avatarUrl: String(require("../assets/images/angular.png")),
//       experience: `asdadsads`,
//       color: "#eb0800",
//     },
//     {
//       menuTitle: "vue",
//       title: "Vue",
//       subTitle: "",
//       text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
//       avatarUrl: String(require("../assets/images/vue.png")),
//       experience: `asdadsads`,
//       color: "#15b300",
//     },
//     {
//       menuTitle: "react",
//       title: "React",
//       subTitle: "",
//       text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
//       avatarUrl: String(require("../assets/images/react.png")),
//       experience: `asdadsads`,
//       color: "#6800b3",
//     },
//     {
//       menuTitle: "ionic",
//       title: "Ionic",
//       subTitle: "",
//       text: "experiencia e projetos",
//       avatarUrl: String(require("../assets/images/ionic.png")),
//       experience: `asdadsads`,
//     },
//     {
//       menuTitle: "wordpress",
//       title: "Wordpress",
//       subTitle: "",
//       text: "organon cms",
//       avatarUrl: String(require("../assets/images/wordpress.png")),
//       experience: `asdadsads`,
//     },
//     {
//       menuTitle: "nodejs",
//       title: "Nodejs",
//       subTitle: "",
//       text: "nestjs também",
//       avatarUrl: String(require("../assets/images/node-js.png")),
//       experience: `asdadsads`,
//     },
//     {
//       menuTitle: "c-sharp",
//       title: "C#",
//       subTitle: "",
//       text: ".net, asp net core",
//       avatarUrl: String(require("../assets/images/c-sharp.png")),
//       experience: `asdadsads`,
//     },
//     {
//       menuTitle: "database",
//       title: "Database",
//       subTitle: "",
//       text: "sql server e mysql",
//       avatarUrl: String(require("../assets/images/database.png")),
//       experience: `asdadsads`,
//     },
//     {
//       menuTitle: "azure",
//       title: "Azure",
//       subTitle: "",
//       text: "devops, azure functions, azure data recognizer?",
//       avatarUrl: String(require("../assets/images/azure.png")),
//       experience: `asdadsads`,
//     },
//   ];
//   return content;
// }

// export { getAllContent };
