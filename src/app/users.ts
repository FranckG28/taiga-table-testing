export interface User {
    readonly name: string;
    readonly email: string;
    readonly status: 'alive' | 'deceased';
    readonly tags: readonly string[];
}

export const user1: User = {
    name: 'Michael Palin',
    email: 'm.palin@montypython.com',
    status: 'alive',
    tags: ['Funny'],
};

export const user2: User = {
    name: 'Eric Idle',
    email: 'e.idle@montypython.com',
    status: 'alive',
    tags: ['Funny', 'Music'],
};