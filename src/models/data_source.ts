import "reflect-metadata"

import { DataSource } from "typeorm"
import { Pessoa, Projeto } from "./model"

export const MariaDBDataSource = new DataSource({
    type: "mysql",
    host: "database",
    port: 3306,
    username: "mariadb",
    password: "mariadb",
    database: "mariadb",
    synchronize: true,
    logging: false,
    entities: [Projeto, Pessoa],
    migrations: [],
    subscribers: [],
})
     
MariaDBDataSource.initialize().then(() => {
    console.log("Inicializada a fonte de dados...");
}).catch((err) => {
    console.error(err, "Erro de inicialização da fonte de dados!!");
})
