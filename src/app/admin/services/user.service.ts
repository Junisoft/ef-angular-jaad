import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/models/user.model';

@Injectable()
export class UserService{
    readonly BASE_URL = 'http://localhost:4000';
    readonly endpoint = 'users';

    constructor(
        private http: HttpClient
    ) {

    }

    getAllUsers() {
        const url = `${this.BASE_URL}/${this.endpoint}`;
        console.log('http >', this.http);
        return this.http.get(url);
    }

    getUserById(id: string) {
        const url = `${this.BASE_URL}/${this.endpoint}/${id}`;
        return this.http.get(url);
    }

    createUser(user: User) {
        const url = `${this.BASE_URL}/${this.endpoint}`;
        return this.http.post(url, user);
    }

    updateUser(user: User) {
        const url = `${this.BASE_URL}/${this.endpoint}/${user.id}`;
        return this.http.put(url, user);
    }

    deleteUser(id: string) {
        const url = `${this.BASE_URL}/${this.endpoint}/${id}`;
        return this.http.delete(url);
    }

}