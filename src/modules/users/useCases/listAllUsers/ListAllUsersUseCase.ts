import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }): User[] | Error {
        const user = this.usersRepository.findById(user_id);

        if (!user) {
            throw new Error("Don't exist this user.");
        }

        if (user.admin === false) {
            throw new Error("Don't exist this user.");
        }
        return this.usersRepository.list();
    }
}

export { ListAllUsersUseCase };
