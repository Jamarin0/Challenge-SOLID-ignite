import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }): User[] | Error {
        const user = this.usersRepository.findById(user_id);
        if (!user) {
            throw new Error("Mensagem do erro");
        }

        if (user.admin === false) {
            throw new Error("Mensagem do erro");
        }
        const all = this.usersRepository.list();

        return all;
    }
}

export { ListAllUsersUseCase };
